import React from 'react'
import Carousel from 'nuka-carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { url } from 'inspector'
import { useMediaQuery } from 'react-responsive'

interface PersonaSliderConent {
	id: number
	title: string
	label: string
	description: string[]
	image: string
}

interface PersonaSliderProps {
	content: PersonaSliderConent[]
}

function SliderComponent({ content }: PersonaSliderProps) {
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 414px)',
	})

	return (
		<div>
			<Carousel
				defaultControlsConfig={{
					prevButtonText: ' ',
					nextButtonText: ' ',
					nextButtonStyle: {
						backgroundColor: 'transparent',
						width: '50px',
						height: '50px',
						background: 'no-repeat',
						backgroundSize: '100%',
						backgroundImage: `url("./assets/img/service/arrow.png")`,
					},
					prevButtonStyle: {
						backgroundColor: 'transparent',
						rotate: '180deg',
						width: '50px',
						height: '50px',
						backgroundSize: '100%',
						backgroundImage: `url("./assets/img/service/arrow.png")`,
					},
					pagingDotsStyle: {
						display: 'none',
					},
				}}
				withoutControls={false}
				autoplay={true}
				enableKeyboardControls={false}
				autoplayInterval={5000}
			>
				{content.map((obj) => (
					<div
						key={obj.id}
						id={obj.id.toString()}
						className="sc-persona__slider"
					>
						<div className="sc-persona__grid">
							{isMobileScreen === false ? (
								<>
									<div
										className="sc-persona__image-container"
										style={{
											backgroundImage: `url('${obj.image}')`,
										}}
									></div>
									<div className="sc-persona__title-box">
										<h2>{obj.title}</h2>
										<span></span>
										<label>{obj.label}</label>
										{obj.description.map((details, idx) => (
											<ol key={idx}>
												<li>{details}</li>
											</ol>
										))}
									</div>
								</>
							) : (
								<>
									<div
										className="sc-persona__image-container"
										style={{
											backgroundImage: `url('${obj.image}')`,
										}}
									>
										<div className="sc-persona__title-box">
											<h2>{obj.title}</h2>
											<span></span>
											<label>{obj.label}</label>
											{obj.description.map(
												(details, idx) => (
													<ol key={idx}>
														<li>{details}</li>
													</ol>
												)
											)}
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default SliderComponent
