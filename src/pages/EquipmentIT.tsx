import React, { useState, useEffect, MouseEventHandler } from 'react'
import Catalog, { catalogItemInfo } from '../components/Catalog/Catalog'
import { HeaderVideoComponent } from '../components/HeaderVideoComponent'
import { CatalogSceleton } from '../components/Catalog/Sceleton'
import { Categories } from '../components/Catalog/Categories'
import config from '../config/ru/config'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import InfoModal from '../utils/infoModal'
import { NetworkStatus, useQuery } from '@apollo/client'
import { GET_ALL_IT_EQUIPMENT } from '../apollo/queries/queries'

export const EquipmentIT = () => {
	const equipmentPrefix = 'https://62c3fa7eabea8c085a67f486.mockapi.io/it'
	const routerURL = '/it-equipment'
	const [categoryId, setCategoryId] = useState(1)
	const [URL, setURL] = useState('')

	const { loading, error, data, refetch, networkStatus } = useQuery(
		GET_ALL_IT_EQUIPMENT,
		{
			variables: { categoryId },
			pollInterval: 500,
			fetchPolicy: 'network-only',
			nextFetchPolicy: 'cache-first',
		}
	)

	const handleClickCategory = (id: number) => {
		setCategoryId(id)
		refetch({ categoryId: categoryId })
	}

	const handleRefetch = () => (event: MouseEvent) => {
		event.preventDefault()
		if (networkStatus === NetworkStatus.refetch)
			return console.log('Refetching')
		refetch({ categoryId: categoryId })
		console.log(error)
	}

	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})

	const UrlSource = 'it'
	useEffect(() => {
		setURL(UrlSource)
	}, [URL])
	console.log(data, loading, error)
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
									{loading || data == undefined
										? [...new Array(6)].map(
												(obj, index) => (
													<CatalogSceleton
														props={obj}
														key={index}
													/>
												)
										  )
										: data.getItEquipment.map(
												(obj: catalogItemInfo) => (
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
												)
										  )}
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
									{loading || data === undefined
										? [...new Array(6)].map(
												(obj, index) => (
													<CatalogSceleton
														props={obj}
														key={index}
													/>
												)
										  )
										: data.getItEquipment.map(
												(obj: catalogItemInfo) => (
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
												)
										  )}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<Outlet />
		</>
	)
}

export default EquipmentIT
