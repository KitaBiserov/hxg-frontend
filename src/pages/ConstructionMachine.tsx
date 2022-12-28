import * as React from 'react'
import { Categories } from '../components/Catalog/Categories'
import { CatalogSceleton } from '../components/Catalog/Sceleton'
import { HeaderVideoComponent } from '../components/HeaderVideoComponent'
import Catalog, { catalogItemInfo } from '../components/Catalog/Catalog'
import { useMediaQuery } from 'react-responsive'
import InfoModal from '../utils/infoModal'
import config from '../config/ru/config'
import { getCatalogItem } from '../../api/index'

export const ConstructionMachine = () => {
	const routerURL = 'construction-machines'
	const backgroundImage = 'construction'

	const handleClickCategory = (id: number) => {
		setCategoryId(id)
	}
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})
	const [items, setItems] = React.useState([])
	const [categoryId, setCategoryId] = React.useState(0)
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		getCatalogItem(categoryId, routerURL).then((response) =>
			setItems(response)
		)
		setIsLoading(false)
	}, [categoryId])

	const URL = 'construction'

	return (
		<>
			<HeaderVideoComponent
				theme={'a header__link'}
				backgroundImage={backgroundImage}
				category={categoryId}
				content={config.constructionPage.constructionHeaderContent}
			></HeaderVideoComponent>

			<div className="grid">
				<InfoModal />
				<div className="sc-catalog">
					{isMobileScreen === false ? (
						<div className="sc-catalog__catalog-grid">
							<div className="sc-catalog__categories-container">
								<Categories
									categories={
										config.constructionPage
											.constructionCategories
									}
									category={categoryId}
									onClickCategory={handleClickCategory}
								/>
							</div>
							<div className="sc-catalog__equipment-grid">
								{isLoading
									? [...new Array(6)].map((obj, index) => (
											<CatalogSceleton
												props={obj}
												key={index}
											/>
									  ))
									: items.map((obj: catalogItemInfo) => (
											<Catalog
												routerURL={routerURL}
												source={URL}
												key={obj.id}
												title={obj.model}
												description={obj.description}
												img={obj.image}
												id={obj.id}
												vendor={obj.vendor}
											/>
									  ))}
							</div>
						</div>
					) : (
						<div className="sc-catalog__catalog-grid--mob">
							<div className="sc-catalog__categories-container">
								<Categories
									categories={
										config.constructionPage
											.constructionCategories
									}
									category={categoryId}
									onClickCategory={handleClickCategory}
								/>
							</div>
							<div className="sc-catalog__catalog-grid-sub">
								<div className="sc-catalog__equipment-grid--mob">
									{isLoading
										? [...new Array(6)].map(
												(obj, index) => (
													<CatalogSceleton
														props={obj}
														key={index}
													/>
												)
										  )
										: items.map((obj: catalogItemInfo) => (
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
		</>
	)
}

export default ConstructionMachine
