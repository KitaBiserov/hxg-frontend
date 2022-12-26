import React from 'react'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'
import { useMediaQuery } from 'react-responsive'
import config from '../config/ru/config'
import { FeedbackModal } from './FeedbackModal'
import LanguageMenu from './LanguageMenu'

import logo from '../../images/logo/logo-winter.svg'
import { useScroll } from 'framer-motion'

export interface Extentions {
	label: string
	link: string
}

export interface Navigator {
	id: number
	title: string
	link: string
	extentions: Extentions[]
}

export interface NavigationList {
	list: Navigator[]
}

export interface ThemeSettings {
	theme: string
}

interface NavigationBarProps {
	theme: string
}
interface NavigationMenuProps {
	id: number
	title: string
	link: string
	extentions: Extentions[]
	theme: string
}

const NavigationMenu = ({
	id,
	title,
	extentions,
	theme,
}: NavigationMenuProps) => {
	return (
		<NavigationExtentionPopup
			trigger={
				<li key={id} className="header__item ">
					<a className={theme}>{title}</a>
				</li>
			}
			on="click"
			closeOnDocumentClick
			mouseLeaveDelay={30}
			mouseEnterDelay={5}
			arrow={false}
		>
			<div className="header__nav--popup">
				<ul className="header__menu--popup">
					{extentions.map((obj, i) => (
						<li key={i} className="header__item--popup">
							<Link className="a header__link" to={obj.link}>
								{obj.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</NavigationExtentionPopup>
	)
}

function NavigationBar({ theme }: NavigationBarProps) {
	const isMobileScreen = useMediaQuery({
		query: '(max-width: 810px)',
	})

	const scroll = useScroll({})

	return (
		<header className="header" id="header">
			<div className="grid__wrapper header__wrapper">
				{isMobileScreen && <MobileMenu />}

				<div className="header__logo logo">
					<Link className="a logo__link" to="/">
						<svg
							className="img logo__img"
							style={{ height: '50px', width: '200px' }}
						>
							<image
								className="img logo__img"
								style={{ height: '50px', width: '200px' }}
								xlinkHref={logo}
							></image>
						</svg>
					</Link>
				</div>
				<nav className="header__nav">
					<ul className="header__menu">
						{config.homePage.navigation.list.map((obj) => (
							<NavigationMenu
								theme={theme}
								title={obj.title}
								id={obj.id}
								key={obj.id}
								link={obj.link}
								extentions={obj.extentions}
							/>
						))}
					</ul>
					<div className="header__btn">
						<FeedbackModal />
						<div className="header__lang lang">
							<LanguageMenu />
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

const NavigationExtentionPopup = styled(Popup)`
	&-content {
		z-index: 9999;
		align-items: center !important;
		top: 50% !important;
		left: 0px !important;
		width: 100%;

		position: absolute;
		height: 100px;
		background-color: rgba(0, 0, 0, 0.9) !important;
	}
`

export default NavigationBar
