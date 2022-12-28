import * as React from 'react'
import Catalog, { catalogItemInfo } from '../components/Catalog/Catalog'
import { HeaderVideoComponent } from '../components/HeaderVideoComponent'
import { CatalogSceleton } from '../components/Catalog/Sceleton'
import { Categories } from '../components/Catalog/Categories'
import config from '../config/ru/config'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import InfoModal from '../utils/infoModal'
import { getCatalogItem, CatalogItem } from '../../api/index'

export const EquipmentIT = () => {
	const equipmentPrefix = 'https://62c3fa7eabea8c085a67f486.mockapi.io/it'
	const routerURL = '/it-equipment'
	const [isLoading, setIsLoading] = React.useState(false)
	const [categoryId, setCategoryId] = React.useState(1)
	const [URL, setURL] = React.useState('')
	const [data, setData] = React.useState<catalogItemInfo[]>([])
	const handleClickCategory = (id: number) => {
		setCategoryId(id)
	}

	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})

	const UrlSource = 'it'
	React.useEffect(() => {
		setURL(UrlSource)
	}, [URL])

	React.useEffect(() => {
		getCatalogItem(categoryId, UrlSource).then((response) =>
			setData(response)
		)
	}, [categoryId])

	const backgroundImage = 'server'

	return (
		<>
			<HeaderVideoComponent
				theme={'a header__link'}
				backgroundImage={backgroundImage}
				category={categoryId}
				content={config.itPage.itHeaderContent}
			/>
			<div className="grid">
				<div className="sc-catalog">
					{isMobileScreen === false ? (
						<div className="sc-catalog__catalog-grid">
							<div className="sc-catalog__categories-container">
								<Categories
									categories={config.itPage.itCategories}
									category={categoryId}
									onClickCategory={handleClickCategory}
								/>
							</div>
							<div className="sc-catalog__catalog-grid-sub">
								<div className="sc-catalog__equipment-grid">
									{data === undefined
										? [...new Array(6)].map(
												(obj, index) => (
													<CatalogSceleton
														props={obj}
														key={index}
													/>
												)
										  )
										: data.map((obj: catalogItemInfo) => (
												<Catalog
													routerURL={routerURL}
													key={obj.id}
													id={obj.id}
													title={obj.model}
													vendor={obj.vendor}
													description={
														obj.description
													}
													img={obj.image}
													source={URL}
												/>
										  ))}
								</div>
							</div>
						</div>
					) : (
						<div className="sc-catalog__catalog-grid--mob">
							<div className="sc-catalog__categories-container">
								<Categories
									categories={config.itPage.itCategories}
									category={categoryId}
									onClickCategory={handleClickCategory}
								/>
							</div>
							<div className="sc-catalog__catalog-grid-sub">
								<div className="sc-catalog__equipment-grid--mob">
									{data === undefined
										? [...new Array(6)].map(
												(obj, index) => (
													<CatalogSceleton
														props={obj}
														key={index}
													/>
												)
										  )
										: data.map((obj: catalogItemInfo) => (
												<Catalog
													routerURL={routerURL}
													source={URL}
													key={obj.id}
													title={obj.model}
													description={
														obj.description
													}
													img={obj.image}
													id={obj.id}
													vendor={obj.vendor}
												/>
										  ))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<Outlet />
			<InfoModal />
		</>
	)
}

export default EquipmentIT
