import React from 'react'
import NavigationBar from '../components/NavigationBar'
import config from '../config/ru/config'
import Iframe from 'react-iframe'

export const Contacts = () => {
	const [isOpen] = React.useState(false)
	return (
		<section className="sc-maps" id="sc-maps">
			<NavigationBar theme={'a header__link-black'} />
			<div className="sc-maps__maps-container">
				<Iframe
					url="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7cee8f191666eb94f5b74b44c31aeec6375d43034b91c9868c8b099ac3383fd&amp;source=constructor"
					width="100%"
					styles={{ top: '8%', outerHeight: '384px' }}
					height="384px"
					className="Iframe"
					title="yandex-map-widget"
					position="absolute"
				/>
			</div>
			<div
				className={
					isOpen === true ? 'grid sc-maps__grid' : 'display-not'
				}
			>
				<div className="grid__wrapper sc-maps__wrapper">
					<div className="sc-maps__wrapper-page"></div>
					<div className="sc-maps__wrapper-nav">
						<div className="sc-maps__nav-content">
							<div className="sc-maps__wrapper-infoblock">
								<div className="footer__contact sc-maps__contact">
									<div className="footer__wrapper-icon sc-maps__wrapper-icon">
										<i className="icon icon--marker">
											<svg
												className="icon__svg"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													className="icon__path"
													d="M16 2H8.00001C7.20436 2 6.4413 2.31607 5.87869 2.87868C5.31608 3.44129 5.00001 4.20435 5.00001 5V21C4.99931 21.1762 5.04518 21.3495 5.13299 21.5023C5.22079 21.655 5.3474 21.7819 5.50001 21.87C5.65203 21.9578 5.82447 22.004 6.00001 22.004C6.17554 22.004 6.34799 21.9578 6.50001 21.87L12 18.69L17.5 21.87C17.6524 21.9564 17.8248 22.0012 18 22C18.1752 22.0012 18.3476 21.9564 18.5 21.87C18.6526 21.7819 18.7792 21.655 18.867 21.5023C18.9548 21.3495 19.0007 21.1762 19 21V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7957 2 16 2ZM17 19.27L12.5 16.67C12.348 16.5822 12.1755 16.536 12 16.536C11.8245 16.536 11.652 16.5822 11.5 16.67L7.00001 19.27V5C7.00001 4.73478 7.10536 4.48043 7.2929 4.29289C7.48044 4.10536 7.73479 4 8.00001 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8947 4.48043 17 4.73478 17 5V19.27Z"
												/>
											</svg>
										</i>
									</div>
									<div className="footer__wrapper-info sc-maps__wrapper-info">
										<span className="span footer__info-question sc-maps__info-question">
											АДРЕС
										</span>
										<span className="a footer__info-answer sc-maps__info-answer">
											{
												config.contactPage.contacts
													.Address
											}
										</span>
									</div>
								</div>

								<div className="footer__contact sc-maps__contact">
									<div className="footer__wrapper-icon sc-maps__wrapper-icon">
										<i className="icon icon--clock">
											<svg
												className="icon__svg"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													className="icon__path"
													d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM15.1 12.63L13 11.42V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12 11 12.08 11 12.12C11.0059 12.1889 11.0228 12.2564 11.05 12.32C11.0706 12.3793 11.0974 12.4363 11.13 12.49C11.1574 12.5468 11.1909 12.6005 11.23 12.65L11.39 12.78L11.48 12.87L14.08 14.37C14.2324 14.4564 14.4048 14.5012 14.58 14.5C14.8014 14.5015 15.0171 14.4296 15.1932 14.2953C15.3693 14.1611 15.4959 13.9722 15.5531 13.7583C15.6103 13.5444 15.5948 13.3176 15.5092 13.1134C15.4236 12.9092 15.2726 12.7392 15.08 12.63H15.1Z"
												/>
											</svg>
										</i>
									</div>
									<div className="footer__wrapper-info sc-maps__wrapper-info">
										<span className="span footer__info-question sc-maps__info-question">
											ЧАСЫ РАБОТЫ
										</span>
										<span className="a footer__info-answer sc-maps__info-answer">
											{
												config.contactPage.contacts
													.Workhours
											}
										</span>
									</div>
								</div>
								<div className="footer__contact sc-maps__contact">
									<div className="footer__wrapper-icon sc-maps__wrapper-icon">
										<i className="icon icon--mail">
											<svg
												className="icon__svg"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													className="icon__path"
													clipRule="evenodd"
													d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5ZM4.09132 6.58194C4.24961 6.23843 4.59696 6 5 6H19C19.403 6 19.7504 6.23843 19.9087 6.58194L12.6139 12.2556C12.2528 12.5365 11.7472 12.5365 11.3861 12.2556L4.09132 6.58194ZM4 9.04464V14.865L7.61261 11.8544L4 9.04464ZM4.0829 17.3993C4.23705 17.7529 4.58966 18 5 18H19C19.4103 18 19.763 17.7529 19.9171 17.3993L14.7715 13.1113L13.8418 13.8343C12.7585 14.6769 11.2415 14.6769 10.1582 13.8343L9.22853 13.1113L4.0829 17.3993ZM20 14.865V9.04464L16.3874 11.8544L20 14.865Z"
													fill="#FFA101"
												/>
											</svg>
										</i>
									</div>
									<div className="footer__wrapper-info sc-maps__wrapper-info">
										<span className="span footer__info-question sc-maps__info-question">
											E-MAIL
										</span>
										<a
											href={
												'mailto:' +
												config.contactPage.contacts
													.Email
											}
											className="a footer__info-answer sc-maps__info-answer"
										>
											{config.contactPage.contacts.Email}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Contacts
