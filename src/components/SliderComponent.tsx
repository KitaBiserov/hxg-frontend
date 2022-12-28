import React from 'react'
import Carousel from 'nuka-carousel'

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
						display: 'none',
					},
					prevButtonStyle: {
						display: 'none',
					},
					pagingDotsStyle: {
						display: 'block',
						marginLeft: '20px',
					},
				}}
				withoutControls={false}
				autoplay={true}
				enableKeyboardControls={false}
				autoplayInterval={15000}
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
