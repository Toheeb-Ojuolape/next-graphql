interface NodePolicy {
  disabled: Boolean;
  fee_base_msat: string;
  fee_rate_milli_msat: string;
  last_update: string;
  max_htlc_msat: string;
  min_htlc: string;
  time_lock_delta: number;
}

interface NodeInfo {
  node: Map<string, string>;
}

export interface Channel {
  block_age: number;
  capacity: string;
  chan_point: string;
  last_update: number;
  last_update_date: string;
  long_channel_id: string;
  node1_policy: NodePolicy;
  node1_pub: string;
  node2_policy: NodePolicy;
  node2_pub: string;
  short_channel_id: string;
  node2_info: NodeInfo;
}

export interface Pagination {
  limit: number;
  offset: number;
}

export interface Channels {
  pagination: Pagination;
  list: Channel[];
}
