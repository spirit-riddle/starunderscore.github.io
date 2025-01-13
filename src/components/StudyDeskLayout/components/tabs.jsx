import React from "react";

const Tabs = ({ tabs, currentTabIndex, setCurrentTabIndex }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.href}
          className={index === currentTabIndex ? "active-tab" : ""}
          onClick={() => setCurrentTabIndex(index)}
        >
          {tab.title}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
