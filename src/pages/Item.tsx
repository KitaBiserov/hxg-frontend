import React, { useState } from "react"
import ItemTabs from "../components/Catalog/Tabs"
import { useParams } from "react-router-dom"
import { ItemSceleton } from "../components/Catalog/Sceleton"
import config from "../config/ru/config"
import { useQuery } from "@apollo/client"
import { GET_CONSUMER_ITEM, GET_IT_ITEM } from "../apollo/queries/queries"

const Item = () => {
  const { id, source } = useParams()

  const [selectedTab, setSelectedTab] = useState(0)
  const [isShowMore, setShowMore] = useState(false)

  let Id: number
  id != undefined ? (Id = parseInt(id)) : (Id = 0)

  let QUERY: any

  switch (source != undefined) {
    case source != undefined && source === "it": {
      QUERY = GET_IT_ITEM

      break
    }
    case source != undefined && source === "consumer": {
      QUERY = GET_CONSUMER_ITEM

      break
    }
    case source != undefined && source === "construction": {
      QUERY = GET_IT_ITEM
      break
    }
    case source != undefined && source === "energy": {
      QUERY = GET_IT_ITEM

      break
    }
    default:
      break
  }

  const { loading, data } = useQuery(QUERY, {
    variables: { Id },
    pollInterval: 500,
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  })

  const handleShowMore = () => {
    setShowMore(true)
  }

  const handleShowMoreOff = () => {
    setShowMore(false)
  }
  return (
    <>
      <section className="sc-item">
        <div className="grid">
          <div className="sc-catalog">
            {loading || data === undefined ? (
              <ItemSceleton />
            ) : (
              <>
                <div
                  key={data.getItItem.id}
                  className="sc-catalog__equipment-item--popup"
                >
                  <div className="title">
                    <h1>{data.getItItem.model}</h1>
                  </div>

                  <img src={data.getItItem.image} alt={data.getItItem.model} />

                  <div className="sc-catalog__equipment-item--popup__container">
                    <ItemTabs
                      title={data.getItItem.model}
                      table={data.getItItem.table}
                      tabs={config.itemPage.item.tabsnames}
                      content={data.getItItem.description}
                      datasheet={data.getItItem.datasheet}
                      value={selectedTab}
                      onClickTab={(i: number) => setSelectedTab(i)}
                    />
                  </div>
                </div>

                <div className="sc-item__grid">
                  <h1>{data.getItItem.model}</h1>

                  <div className="sc-item__info">
                    <div className="sc-item__info--image">
                      <img
                        src={data.getItItem.image}
                        alt={data.getItItem.model}
                      />
                    </div>
                    <div className="sc-item__info-block">
                      <div className="sc-item__info-block--box">
                        <div className="sc-item__info-block--row">
                          <h3>VENDOR:</h3>{" "}
                          <label>{data.getItItem.vendor}</label>
                        </div>
                        {isShowMore != true ? (
                          <>
                            <label>
                              {data.getItItem.description.slice(0, 2)}
                            </label>
                            <span onClick={handleShowMore}> Click to show</span>
                          </>
                        ) : (
                          <>
                            <label>{data.getItItem.description}</label>
                            <span onClick={handleShowMoreOff}>
                              {" "}
                              Click to expand
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="sc-catalog__equipment-item--popup__container">
                    <ItemTabs
                      title={data.getItItem.model}
                      table={data.getItItem.table}
                      tabs={config.itemPage.item.tabsnames}
                      content={data.getItItem.description}
                      datasheet={data.getItItem.datasheet}
                      value={selectedTab}
                      onClickTab={(i: number) => setSelectedTab(i)}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Item
