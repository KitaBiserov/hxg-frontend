import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

interface tabsProps {
  tabId: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  content: {id: number, title: string, list: string[] }[]  
}


export const TabsComponent: React.FC<tabsProps> = ( {tabId, setSelectedTab, content}) => {
  

  const selectTabHandler =  (tabId: number) => (e: React.MouseEvent<Element, MouseEvent>) : void =>  {
    e.preventDefault();
    setSelectedTab(tabId);
 }

  return (
    <>
      <Tabs>
        <TabList className="tab-list">
          {content.map((companyContent) => (
            <Tab key={companyContent.id}
              className={tabId === companyContent.id ? "tab-list__tab activeTab" : "tab-list__tab"}
              onClick={selectTabHandler(companyContent.id)}
            >
              <h2>{companyContent.title.toUpperCase()}</h2>
            </Tab>
          ))}
        </TabList>
        {content.map((companyContent, i) => (
          <TabPanel key={i}>
            <ul>
              {companyContent.list.map((companyContentlist, idx) => (
                <li key={idx}>
                  <span>{companyContentlist}</span>
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}


