import React, { useState } from 'react'
import { HeaderVideoComponent } from '../components/HeaderVideoComponent'
import SliderComponent from '../components/SliderComponent'
import { TabsComponent } from '../components/TabsComponent'
import config from '../config/ru/config'
import { catalogHeaderContent } from '../components/HeaderVideoComponent'

interface AreaListProps {
	title: string
	list: string[]
}

const AreasList = ({ title, list }: AreaListProps) => {
	return (
		<div className="sc-network__wrapper-text sc-benefits__wrapper-title">
			<h3>{title}</h3>
			<ul>
				{list.map((obj, id) => (
					<li key={id}>{obj}</li>
				))}
			</ul>
		</div>
	)
}

export const About = () => {
	const [selectedTab, setSelectedTab] = useState(0)

	const main: catalogHeaderContent = {
		catalogHeaderContentList: [
			{
				id: 1,
				title: 'Huaxun Group',
				description: '',
			},
		],
	}
	const backgroundImage = 'main'
	return (
		<>
			<section
				className="sc-main-pages sc-main-pages--about"
				id="sc-main-pages"
			>
				<HeaderVideoComponent
					theme={'a header__link'}
					backgroundImage={backgroundImage}
					category={1}
					content={main}
				/>
			</section>
			<section className="sc-about-directions" id="sc-directions">
				<div className="grid">
					<div className="grid__wrapper sc-about-directions__wrapper">
						<div className="sc-network__wrapper-text sc-about-directions__wrapper-text">
							<TabsComponent
								content={config.aboutPage.aboutCompany}
								setSelectedTab={setSelectedTab}
								tabId={selectedTab}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="sc-gallery" id="sc-gallery">
				<div className="grid">
					<div className="sc-gallery__wrapper-title grid-gap">
						<h2 className="h2 sc-gallery__title">
							ОСНОВНАЯ КОМАНДА УПРАВЛЕНИЯ
						</h2>
					</div>

					<SliderComponent
						content={config.aboutPage.persona}
					></SliderComponent>
				</div>
			</section>

			<section className="sc-benefits" id="sc-benefits">
				<div className="grid">
					<div className="grid__wrapper">
						<AreasList
							title={config.aboutPage.areasList.title}
							list={config.aboutPage.areasList.list}
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
