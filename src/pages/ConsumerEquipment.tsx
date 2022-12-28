import * as React from 'react'
import { HeaderVideoComponent } from '../components/HeaderVideoComponent'
import Catalog, { catalogItemInfo } from '../components/Catalog/Catalog'
import { Categories } from '../components/Catalog/Categories'
import { CatalogSceleton } from '../components/Catalog/Sceleton'
import { useMediaQuery } from 'react-responsive'
import InfoModal from '../utils/infoModal'
import config from '../config/ru/config'
import { getCatalogItem} from '../../api/index'

export const ConsumerEquipment = () => {
	const routerURL = '/consumer-equipment'
	const [items, setItems] = React.useState([])
	const [categoryId, setCategoryId] = React.useState(0)
	const [isLoading, setIsLoading] = React.useState(true)
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})
	const handleClickCategory = (id: number) => {
		setCategoryId(id)
	}

	const backgroundImage = 'consumer'

	const URL = 'consumer-equipment'

	React.useEffect(() => {
		getCatalogItem(categoryId, 'consumer-equipment').then((response) =>
			setItems(response)
		)
		setIsLoading(false)
	}, [categoryId])
	return (
		<>
			<HeaderVideoComponent
				theme={'a header__link'}
				backgroundImage={backgroundImage}
				content={config.consumerPage.consumerHeaderContent}
				category={categoryId}
			></HeaderVideoComponent>

			<div className="grid">
				<InfoModal />
				<div className="sc-catalog">
					{isMobileScreen === false ? (
						<div className="sc-catalog__catalog-grid">
							<div className="sc-catalog__categories-container">
								<Categories
									categories={
										config.consumerPage.consumerCategories
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
												key={obj.id}
												id={obj.id}
												title={obj.model}
												vendor={obj.vendor}
												description={obj.description}
												img={obj.image}
												source={URL}
											/>
									  ))}
							</div>
						</div>
					) : (
						<div className="sc-catalog__catalog-grid--mob">
							<div className="sc-catalog__categories-container">
								<Categories
									categories={
										config.consumerPage.consumerCategories
									}
									category={categoryId}
									onClickCategory={handleClickCategory}
								/>
							</div>
							<div className="sc-catalog__catalog-grid-sub">
								<div className="sc-catalog__equipment-grid--mob">
									{isLoading
										? [...new Array(3)].map(
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

export default ConsumerEquipment
