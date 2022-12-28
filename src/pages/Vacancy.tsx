import React from 'react'
import { VacancyForm } from '../components/VacancyForm'
import config from '../config/ru/config'
const VacansyList = () => {
	return (
		<>
			<div className="sc-network__wrapper-text">
				<h2 className="h2 sc-network__main-title">
					{' '}
					{config.vacancyPage.vacancy.mainTitle}
				</h2>
				<p className="p sc-network__desc">
					{config.vacancyPage.vacancy.mainlabel}
				</p>
			</div>
			<div className="sc-network__box-content box-content">
				<h3 className="h3 sc-network__title box-content__title">
					{' '}
					{config.vacancyPage.vacancy.offerTitle}
				</h3>
				<div className="box-content__items">
					{config.vacancyPage.vacancy.offerList.map((obj, idx) => (
						<div key={idx} className="box-content__item marker">
							<span className="marker__circle"></span>
							<p className="p box-content__text marker__content">
								{obj}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="sc-network__wrapper-text sc-network__wrapper-text">
				<h3 className="h3 sc-network__title">
					{config.vacancyPage.vacancy.postTitle}
				</h3>

				{config.vacancyPage.vacancy.postList.map((obj, idx) => (
					<p className="p sc-network__desc" key={idx}>
						{obj}
					</p>
				))}
			</div>
		</>
	)
}

export const Vacancy = () => {
	return (
		<>
			<section className="section sc-network" id="sc-network">
				<div className="grid">
					<div className="grid__wrapper sc-network__wrapper">
						<VacansyList />
					</div>
					<div className="sc-network__wrapper-text sc-network__wrapper-text--center">
						<VacancyForm />
					</div>
				</div>
			</section>
		</>
	)
}

export default Vacancy
