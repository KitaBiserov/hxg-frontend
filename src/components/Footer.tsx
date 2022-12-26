import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import config from '../config/ru/config'
import Accordion from '../utils/accordion'
import logo from '../../images/logo/logo.svg'
import service from '../../images/service/service.svg'

function Footer() {
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 576px)',
	})

	const thirdNavnav = config.homePage.navigation.list.slice(2, 3)

	const secondNavnav = config.homePage.navigation.list.slice(1, 2)
	const firstNav = config.homePage.navigation.list.slice(0, 1)

	return (
		<footer className="footer" id="footer">
			<div className="grid">
				<div className="grid__wrapper">
					<div className="footer__about">
						<div className="footer__logo logo">
							<a href="/" className="a logo__link">
								<svg className="img logo__img">
									<image
										className="img logo__img"
										xlinkHref={logo}
									/>
								</svg>
							</a>
						</div>
					</div>

					{isMobileScreen ? (
						<>
							<nav className="footer__nav">
								<div className="footer__menu">
									{config.homePage.navigation.list.map(
										(navbuttons) => (
											<div
												className="footer__item"
												key={navbuttons.id}
											>
												<Accordion
													title={navbuttons.title}
													options={
														navbuttons.extentions
													}
												/>
											</div>
										)
									)}
								</div>
							</nav>
						</>
					) : (
						<>
							<nav className="footer__nav">
								<div className="footer__menu">
									{firstNav.map((navbuttons) => (
										<div
											className="footer__item"
											key={navbuttons.id}
										>
											<a
												href={navbuttons.link}
												className="a anchor footer__link  footer__link-h3"
											>
												{navbuttons.title}
											</a>

											{navbuttons.extentions.map(
												(sub, i) => (
													<a
														key={i}
														className="a anchor footer__link"
														href={sub.link}
													>
														<span></span>
														{sub.label}
													</a>
												)
											)}
										</div>
									))}
								</div>
							</nav>
							<nav className="footer__nav">
								<div className="footer__menu">
									{secondNavnav.map((navbuttons) => (
										<div
											className="footer__item"
											key={navbuttons.id}
										>
											<Link
												to={navbuttons.link}
												className="a anchor footer__link  footer__link-h3"
											>
												{navbuttons.title}
											</Link>

											{navbuttons.extentions.map(
												(sub, i) => (
													<Link
														key={i}
														className="a anchor footer__link"
														to={sub.link}
													>
														<span></span>
														{sub.label}
													</Link>
												)
											)}
										</div>
									))}
								</div>
							</nav>
							<nav className="footer__nav">
								<div className="footer__menu">
									{thirdNavnav.map((navbuttons) => (
										<div
											className="footer__item"
											key={navbuttons.id}
										>
											<Link
												to={navbuttons.link}
												className="a anchor footer__link  footer__link-h3"
											>
												{navbuttons.title}
											</Link>

											{navbuttons.extentions.map(
												(sub, i) => (
													<Link
														key={i}
														className="a anchor footer__link"
														to={sub.link}
													>
														<span></span>
														{sub.label}
													</Link>
												)
											)}
										</div>
									))}
								</div>
							</nav>
						</>
					)}

					<div className="footer__contacts">
						<div className="footer__contact">
							<div className="footer__wrapper-icon">
								<i className="icon icon--mail">
									<svg
										className="icon__svg"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											className="icon__path"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5ZM4.09132 6.58194C4.24961 6.23843 4.59696 6 5 6H19C19.403 6 19.7504 6.23843 19.9087 6.58194L12.6139 12.2556C12.2528 12.5365 11.7472 12.5365 11.3861 12.2556L4.09132 6.58194ZM4 9.04464V14.865L7.61261 11.8544L4 9.04464ZM4.0829 17.3993C4.23705 17.7529 4.58966 18 5 18H19C19.4103 18 19.763 17.7529 19.9171 17.3993L14.7715 13.1113L13.8418 13.8343C12.7585 14.6769 11.2415 14.6769 10.1582 13.8343L9.22853 13.1113L4.0829 17.3993ZM20 14.865V9.04464L16.3874 11.8544L20 14.865Z"
											fill="#FFA101"
										/>
									</svg>
								</i>
							</div>
							<div className="footer__wrapper-info">
								<span className="span footer__info-question">
									EMAIL
								</span>
								<a
									href={
										'mailtto:' +
										config.contactPage.contacts.Email
									}
									className="a footer__info-answer"
								>
									{config.contactPage.contacts.Email}
								</a>
							</div>
						</div>
					</div>
					<div className="footer__contacts">
						<div className="footer__contact">
							<div className="footer__wrapper-icon">
								<i className="icon icon--marker">
									<svg
										className="icon__svg"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											className="icon__path"
											d="M16 2H8.00001C7.20436 2 6.4413 2.31607 5.87869 2.87868C5.31608 3.44129 5.00001 4.20435 5.00001 5V21C4.99931 21.1762 5.04518 21.3495 5.13299 21.5023C5.22079 21.655 5.3474 21.7819 5.50001 21.87C5.65203 21.9578 5.82447 22.004 6.00001 22.004C6.17554 22.004 6.34799 21.9578 6.50001 21.87L12 18.69L17.5 21.87C17.6524 21.9564 17.8248 22.0012 18 22C18.1752 22.0012 18.3476 21.9564 18.5 21.87C18.6526 21.7819 18.7792 21.655 18.867 21.5023C18.9548 21.3495 19.0007 21.1762 19 21V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7957 2 16 2ZM17 19.27L12.5 16.67C12.348 16.5822 12.1755 16.536 12 16.536C11.8245 16.536 11.652 16.5822 11.5 16.67L7.00001 19.27V5C7.00001 4.73478 7.10536 4.48043 7.2929 4.29289C7.48044 4.10536 7.73479 4 8.00001 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8947 4.48043 17 4.73478 17 5V19.27Z"
											fill="#FFA101"
										/>
									</svg>
								</i>
							</div>
							<div className="footer__wrapper-info">
								<span className="span footer__info-question">
									АДРЕС
								</span>
								<Link
									to="/contacts"
									className="a footer__info-answer"
								>
									{config.contactPage.contacts.Address}
								</Link>
							</div>
						</div>
					</div>
					<div className="footer__contacts">
						<div className="footer__contact">
							<div className="footer__wrapper-icon">
								<i className="icon icon--marker">
									<svg
									
										version="1.1"
										className="icon__svg"
										viewBox="0 0 24 24"
										
										xmlns="http://www.w3.org/2000/svg"
									>
										
										<image className="icon__svg"  xlinkHref={service}/>
									</svg>
								</i>
							</div>
							<div className="footer__wrapper-info">
								<span className="span footer__info-question">
									СЕРВИС
								</span>
								<a
									className="a anchor footer__link"
									href="http://support.huaxun.ru/"
								>
									Техническая поддержка
								</a>
							</div>
						</div>
					</div>

					<div className="footer__block-policy">
						<span className="span footer__copy footer__copy--mob">
							© 2018-2022 Huaxun Group Все права защищены
						</span>
					</div>
				</div>
				<div className="footer__wrapper-text">
					<p className="p footer__desc">
						© 2018 - 2022 Huaxun Group Ru все права защищены
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
