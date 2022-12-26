import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'

interface ItemSliderProps {
	ids: number[]
}

export const ItemSlider = ({ ids }: ItemSliderProps) => {
	return (
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
			slidesToShow={3}
		>
			{ids.map((obj, idx) => (
				<div key={idx} className="sc-catalog__equipment-item">
					{obj}
				</div>
			))}
			<div>
				<a href="/" className="a anchor">
					{' '}
					back to catalog
				</a>
			</div>
		</Carousel>
	)
}
