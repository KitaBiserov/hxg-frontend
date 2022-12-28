import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config/ru/config'

function Card() {
	const [fireOn, setFireOn] = React.useState(0)

	const handleFire =
		(i: number) => (e: React.MouseEvent | React.TouchEvent) => {
			e.preventDefault()
			setFireOn(i)
		}

	return (
		<section className="section sc-directions" id="sc-directions">
			<div className="sc-directions__wrapper-title wrapper-title grid-gap">
				<h2 className="h2 wrapper-title">НАПРАВЛЕНИЯ РАЗВИТИЯ</h2>
			</div>

			<div className="grid">
				<div className="grid__wrapper sc-directions__wrapper">
					{config.homePage.directions.map((obj, i) => (
						<Link
							key={i}
						
							onMouseLeave={handleFire(i)}
							onMouseEnter={handleFire(i)}
							onTouchStart={handleFire(i)}
							className={
								fireOn === i
									? ' a sc-directions__card card fire'
									: ' a sc-directions__card card'
							}
							to={obj.link}
						>
							<span className="card__line"></span>

							<div className="card__wrapper-icon">
								<i className="icon card__icon icon--integration">
									<svg className="icon__svg card__svg">
										<image
											key={i}
											xlinkHref={obj.image}
											className="icon__svg card__svg"
										/>
									</svg>
								</i>
							</div>

							<div className="card__wrapper-text">
								<h3 className="h3 card__title">
									{obj.title.toUpperCase()}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default Card
