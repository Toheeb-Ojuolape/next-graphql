import React from "react";
import Skeleton from "@/components/Loader/SkeletonLoader/Skeleton";

function TableSkeletonLoader() {
  const loadingList = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <tbody>
      {loadingList.map((_, i: number) => (
        <tr key={i}>
          <td>
            <Skeleton width={"200px"} height={"20px"} border={"8px"} />
          </td>
          <td>
            <Skeleton width={"200px"} height={"20px"} border={"8px"} />
          </td>
          <td>
            <Skeleton width={"200px"} height={"20px"} border={"8px"} />
          </td>
          <td>
            <Skeleton width={"200px"} height={"20px"} border={"8px"} />
          </td>
          <td>
            <Skeleton width={"200px"} height={"20px"} border={"8px"} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableSkeletonLoader;
