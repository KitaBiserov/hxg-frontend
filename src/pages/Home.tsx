import React from 'react'
import HeadVideoComponent from '../components/HeadVideoComponent'
import Cards from '../components/Cards'
import config from '../config/ru/config'
import { FeedbackModal } from '../components/FeedbackModal'
import { useMediaQuery } from 'react-responsive'
import Ticker from '../components/Ticker'

export const Home = () => {
	const isMobileScreen = useMediaQuery({
		query: 'max-width: 575px',
	})

	return (
		<>
			<HeadVideoComponent
				theme={'a header__link white'}
				content={config.homePage.homeHeader}
			/>

			<Cards />

			<section className="sc-partners" id="sc-partners">
				<div className="sc-partners__wrapper-title wrapper-title grid-gap">
					<h2 className="h2 wrapper-title">ПАРТНЕРЫ</h2>
				</div>
			</section>

			<section
				style={{
					position: 'relative',
				}}
				className="sc-numbers"
			>
				<Ticker />
			</section>

			<section className="sc-feedback sc-feedback__main-page">
				<div className="sc-feedback__form-control form-control">
					<div className="form-control__wrapper-title">
						<h2 className="h2 form-control__title">
							Вы заинтересованы в сотрудничестве?
						</h2>
						{isMobileScreen === true ? (
							<p className="p form-control__desc desc">
								Our specialists will be happy to help you choose
								exactly the equipment that best suits your tasks
								and meets the pricing policy, will give
								qualified advice on the brands and models
								presented in the company.
							</p>
						) : (
							<p className="p form-control__desc desc">
								{' '}
								Наши специалисты дадут квалифицированную
								консультацию по брендам и моделям,
								представленным в компании.
							</p>
						)}
					</div>

					<FeedbackModal />
				</div>
			</section>
		</>
	)
}
