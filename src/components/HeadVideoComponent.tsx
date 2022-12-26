import React from 'react'
import Carousel from 'nuka-carousel'
import Button from '@mui/material/Button'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone'
import NavigationBar from './NavigationBar'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export interface HeaderContent {
	id: number
	title: string
	description?: string
	image: string
	link: string
	linkHidden?: boolean
	backgroundImage: string
}

interface HeadVideoComponentProps {
	content: HeaderContent[]
	theme: string
}

function HeadVideoComponent({ content, theme }: HeadVideoComponentProps) {
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})

	const getResponsiveBackgroud = () => {
		return isMobileScreen === true ? 'mobile' : 'desktop'
	}

	return (
		<>
			<section className="sc-main">
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
							backgroundImage: `url("images/service/arrow-white.png")`,
						},
						prevButtonStyle: {
							backgroundColor: 'transparent',
							rotate: '180deg',
							width: '50px',
							height: '50px',
							backgroundSize: '100%',
							backgroundImage: `url("images/service/arrow-white.png")`,
						},
						pagingDotsStyle: {
							display: 'none',
						},
					}}
					withoutControls={false}
					autoplay={true}
					enableKeyboardControls={true}
					autoplayInterval={5000}
				>
					{content.map((obj, idx) => {
						return (
							<div className="slider-header" key={idx}>
								<div style={{ position: 'relative' }}>
									<video
										playsInline
										controls={false}
										autoPlay
										loop
										muted
										className="slider-content-background"
										disablePictureInPicture
									>
										<source src={obj.image} />
										Browser dosnt support video
									</video>
									<div className="slider-header__title-box">
										<h1 className="title-box__main-title">
											{obj.title.toUpperCase()}
										</h1>

										<div className="slider-header__description-box black">
											<label>{obj.description} </label>
											{obj.linkHidden ? (
												<> </>
											) : (
												<div className="slider-header__link">
													<Button
														href={obj.link}
														sx={{
															display:
																'inline-flex',
															position:
																'relative',
															left: '100%',
															color: '#ebebeb',
														}}
														endIcon={
															<ArrowForwardIosTwoToneIcon />
														}
													>
														<p>learn more</p>
													</Button>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</Carousel>
			</section>
		</>
	)
}

export default HeadVideoComponent
