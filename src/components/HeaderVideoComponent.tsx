import React, { Suspense } from 'react'
import Loader from '../utils/loader'
import NavigationBar from './NavigationBar'
import { useMediaQuery } from 'react-responsive'

export interface catalogHeaderContentItem {
	id: number
	title: string
	description: string
}

export interface catalogHeaderContent {
	catalogHeaderContentList: catalogHeaderContentItem[]
}

interface HeaderVideoComponentProps {
	category: number
	backgroundImage: string
	content: catalogHeaderContent
	theme: string
}

export const HeaderVideoComponent = ({
	category,
	backgroundImage,
	content,
	theme,
}: HeaderVideoComponentProps) => {
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})

	const getResponsiveBackgroud = () => {
		return isMobileScreen === true ? 'mobile' : 'desktop'
	}
	
	return (
		<>
			<div className="slider-header--pages">
				<NavigationBar theme={theme} />

				<Suspense fallback={<Loader />}>
					<video
						title="awsome video"
						playsInline
						controls={false}
						autoPlay
						loop
						muted
						disablePictureInPicture
					>
						<source src={`images/gifs/${backgroundImage}.mp4`} />
					</video>
				</Suspense>
			

			<div className="slider-header__title-box">
				{content.catalogHeaderContentList.map((obj) => (
					<div
						key={obj.id}
						className={
							category === obj.id ? 'display' : 'not-display'
						}
					>
						<h3>{obj.title.toUpperCase()}</h3>

						<label>{obj.description} </label>
					</div>
				))}
			</div>
			</div>
		</>
	)
}
