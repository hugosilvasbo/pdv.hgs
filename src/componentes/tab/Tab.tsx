import React, { useState } from "react";
import style from "../../../styles/componentes/tab/Tab.module.scss";

interface ITabs {
  index: string;
  children: [];
}

const Tabs = (props: ITabs) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab = (index: string) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className={style.Tabs}>
        <ul className={style.nav}>
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleTab("tab1")}
          >
            Tab 1
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleTab("tab2")}
          >
            Tab 2
          </li>
        </ul>
        <div className={style.outlet}>
          {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
        </div>
      </div>
    </>
  );
};

export default Tabs;
