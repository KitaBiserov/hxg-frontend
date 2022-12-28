import React from 'react'
import Carousel from 'nuka-carousel'
import Button from '@mui/material/Button'
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone'


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

function HeadVideoComponent({ content }: HeadVideoComponentProps) {
	return (
		<>
			<section className="sc-main">
				<Carousel
					defaultControlsConfig={{
						prevButtonText: ' ',
						nextButtonText: ' ',
						nextButtonStyle: {
							backgroundColor: 'transparent',
							width: '100px',
							height: '100px',
							background: 'no-repeat',
							backgroundSize: '100%',
							// eslint-disable-next-line quotes
							backgroundImage: `url('assets/images/service/arrow-white.png')`,
						},
						prevButtonStyle: {
							backgroundColor: 'transparent',
							rotate: '180deg',
							width: '100px',
							height: '100px',
							backgroundSize: '100%',
							// eslint-disable-next-line quotes
							backgroundImage: `url('assets/images/service/arrow-white.png')`,
						},
						pagingDotsStyle: {
							display: 'none',
						},
					}}
					withoutControls={false}
					autoplay={true}
					enableKeyboardControls={true}
					autoplayInterval={20000}
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
