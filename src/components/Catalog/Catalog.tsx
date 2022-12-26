import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import { Link } from "react-router-dom"

interface tableContent {
  row: string
  value: string
}

export interface catalogItemInfo {
  id: number
  model: string
  description: string[]
  image: string
  vendor: string
  datasheet: string
  table: tableContent[]
}

export interface catalogItem {
  catalogItem: catalogItemInfo[]
}

interface CatalogProps {
  id: number
  title: string
  description: string[]
  img: string
  vendor: string
  source: string
  routerURL: string
}

const Catalog = ({
  id,
  title,
  description,
  img,
  source,
  routerURL,
}: CatalogProps) => {
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 576px)",
  })

  const BackGroundImageSrc = (img: string) => {
    return `url("${img}")`
  }

  const handleVisible = () => {
    setIsVisible(true)
  }

  const handleHiden = () => {
    setIsVisible(false)
  }

  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {isMobileScreen === false ? (
        <div
          onMouseEnter={handleVisible}
          onMouseLeave={handleHiden}
          className="sc-catalog__equipment-item"
          title={title}
          style={{ backgroundImage: BackGroundImageSrc(img) }}
        >
          <div className="sc-catalog__equipment-item__img">
            <div className={isVisible === false ? "h1" : "not-display"}>
              {title}
            </div>
          </div>

          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1, transitionDuration: "0.3s" }}
                transition={{}}
              >
                <div className="sc-catalog__equipment-item__description white">
                  <p>{description.slice(0, 1) + "..."}</p>
                </div>
                <div className="btn__box--catalog">
                  <button className="btn">
                    <Link
                      className=" a btn__content"
                      to={`${routerURL}/${source}/${id}`}
                    >
                      LEARN MORE
                    </Link>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div
          className="sc-catalog__equipment-item"
          title={title}
          style={{ backgroundImage: BackGroundImageSrc(img) }}
        >
          <div className="sc-catalog__equipment-item__img">
            <div className="h1">{title} </div>
          </div>

          <div className="sc-catalog__equipment-item__description">
            <p>{description.slice(0, 2) + "..."}</p>

            <div className="btn__box--catalog">
              <button className="btn">
                <Link
                  className="a btn__content"
                  to={`${routerURL}/${source}/${id}`}
                >
                  learn more
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Catalog
