import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ItemTabs from "./Tabs";

import { catalogItemInfo } from "./Catalog";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "rgb(0,0,0, 0.9)",
  boxShadow: 24,
  p: 4,
};

interface ItemPopUpProps {
  id: number;
  source: string;
}

export default function ItemPopUp({ id, source }: ItemPopUpProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [item, setItem] = useState([]);
  useEffect(() => {
   
    fetch(source + id)
      .then((res) => res.json())
      .then((arr) => {
        setItem(arr);
    
      });
  }, [setItem]);

  const TabsName = ["Features", "Characteristics", "Datasheet"];

  return (
    <>
      <button className="btn" onTouchStart={handleOpen}>
        
        LEARN MORE
        
      </button>
      <Modal
      open={open}
      aria-labelledby="item"
      >
         <Box sx={style}>
          <div className="grid">
            <div className="sc-catalog">
              <button
                className="btn btn__close"
                onTouchStart={handleClose}
                onClick={handleClose}
              >
                {" "}
                &times;
              </button>

              {item.map((obj: catalogItemInfo, i) => (
                <div
                  
                  key={i}
                  className="sc-catalog__equipment-item--popup"
                >
                  <div className="title">
                    <h1>{obj.model}</h1>
                  </div>

                  <img src={obj.image} alt={obj.model} />

                  <div className="sc-catalog__equipment-item--popup__container">
                    <ItemTabs
                      title={obj.model}
                      table={obj.table}
                      tabs={TabsName}
                      content={obj.description}
                      datasheet={obj.datasheet}
                      value={selectedTab}
                      onClickTab={(i: number) => setSelectedTab(i)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          </Box>
      </Modal>
    </>
  );


}

