import React, { useEffect } from "react";

interface ITab {
  tabs: any;
}

const Tab = (props: ITab) => {
  return (
    <>
      {props.tabs.map((tab: any) => {
        return tab;
      })}
    </>
  );
};

export default Tab;
