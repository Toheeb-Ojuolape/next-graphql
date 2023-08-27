// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function ApiHandler(req: NextApiRequest, res: NextApiResponse) {
  let limitQuery = req.query.limit;
  let limit: number | undefined;
  if (typeof limitQuery === "string") {
    limit = parseInt(limitQuery);
  }
  const graphql = JSON.stringify({
    query:
      "query Pagination($pubkey: String!, $page: PageInput, $order: OrderChannelInput) {\r\n  getNode(pubkey: $pubkey) {\r\n    graph_info {\r\n      channels {\r\n        channel_list(page: $page, order: $order) {\r\n          pagination {\r\n            limit\r\n            offset\r\n          }\r\n          list {\r\n            block_age\r\n            capacity\r\n            chan_point\r\n            last_update\r\n            last_update_date\r\n            long_channel_id\r\n            node1_policy {\r\n              disabled\r\n              fee_base_msat\r\n              fee_rate_milli_msat\r\n              last_update\r\n              max_htlc_msat\r\n              min_htlc\r\n              time_lock_delta\r\n            }\r\n            node1_pub\r\n            node2_policy {\r\n              disabled\r\n              fee_base_msat\r\n              fee_rate_milli_msat\r\n              last_update\r\n              max_htlc_msat\r\n              min_htlc\r\n              time_lock_delta\r\n            }\r\n            node2_pub\r\n            short_channel_id\r\n            node2_info {\r\n              node {\r\n                alias\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",
    variables: {
      pubkey: req.query.pubkey,
      page: { limit: 10, offset: limit ? limit - 10 : 0 },
      order: { by: req.query.sortBy, direction: req.query.direction },
    },
  });

  const myHeaders = {
    "Content-Type": "application/json",
  };

  axios({
    method: "POST",
    url: "https://api.amboss.space/graphql",
    headers: myHeaders,
    data: graphql,
  })
    .then((response) => {
      res.status(200).json({ data: response.data.data });
    })
    .catch((error) => {
      console.error("error", error);
      res.status(500).json(error);
    });
}
