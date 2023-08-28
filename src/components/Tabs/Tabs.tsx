import React from "react";

function Tabs(props: { active: string,setActive:Function }) {
  return (
    <div className="tabs">
      <div onClick={()=>props.setActive("table")} className={props.active === "table" ? "active" : ""}>Table</div>
      <div onClick={()=>props.setActive("graph")} className={props.active === "graph" ? "active" : ""}>Graph</div>
    </div>
  );
}

export default Tabs;
