import * as React from 'react'
import ItemTabs from '../components/Catalog/Tabs'
import { useParams } from 'react-router-dom'
import { ItemSceleton } from '../components/Catalog/Sceleton'
import config from '../config/ru/config'
import { getItem, CatalogItem } from '../../api'

const Item = () => {
	const { id, source } = useParams()
	const [data, setData] = React.useState<CatalogItem>()
	const [selectedTab, setSelectedTab] = React.useState(0)
	const [isShowMore, setShowMore] = React.useState(false)

	React.useEffect(() => {
		getItem(parseInt(id!), source).then((response: CatalogItem) =>
			setData(response)
		)
	}, [id])

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
						{data === undefined ? (
							<ItemSceleton />
						) : (
							<>
								<div
									key={data.id}
									className="sc-catalog__equipment-item--popup"
								>
									<div className="title">
										<h1>{data.model}</h1>
									</div>
									<img src={data.image} alt={data.model} />

									<div className="sc-catalog__equipment-item--popup__container">
										<ItemTabs
											title={data.model}
											table={data.table}
											tabs={
												config.itemPage.item.tabsnames
											}
											content={data.description}
											datasheet={data.datasheet}
											value={selectedTab}
											onClickTab={(i: number) =>
												setSelectedTab(i)
											}
										/>
									</div>
								</div>

								<div className="sc-item__grid">
									<h1>{data.model}</h1>

									<div className="sc-item__info">
										<div className="sc-item__info--image">
											<img
												src={data.image}
												alt={data.model}
											/>
										</div>
										<div className="sc-item__info-block">
											<div className="sc-item__info-block--box">
												<div className="sc-item__info-block--row">
													<h3>VENDOR:</h3>{' '}
													<label>{data.vendor}</label>
												</div>
												{isShowMore != true ? (
													<>
														<label>
															{data.description.slice(
																0,
																2
															)}
														</label>
														<span
															onClick={
																handleShowMore
															}
														>
															{' '}
															Click to show
														</span>
													</>
												) : (
													<>
														<label>
															{data.description}
														</label>
														<span
															onClick={
																handleShowMoreOff
															}
														>
															{' '}
															Click to expand
														</span>
													</>
												)}
											</div>
										</div>
									</div>
									<div className="sc-catalog__equipment-item--popup__container">
										<ItemTabs
											title={data.model}
											table={data.table}
											tabs={
												config.itemPage.item.tabsnames
											}
											content={data.description}
											datasheet={data.datasheet}
											value={selectedTab}
											onClickTab={(i: number) =>
												setSelectedTab(i)
											}
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
