import React, { useState } from 'react'
import config from '../config/ru/config'
import Accordion from '../utils/accordion'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'
import styled from 'styled-components'
import themeGlobal from '../style/theme'
import { ThemeProvider } from '@mui/material/styles'
import LanguageMenu from './LanguageMenu'
import { FeedbackModal } from './FeedbackModal'

function MobileMenu() {
	const [isViseble, setIsVisible] = useState(false)

	const handleOpenMobileMenu = () => setIsVisible(true)

	const handleCloseMobileMenu = () => {
		setIsVisible(false)
	}

	return (
		<ThemeProvider theme={themeGlobal}>
			<Button
				sx={{ width: '20px', padding: '5px 7px 5px 15px' }}
				color="secondary"
				variant="contained"
				size="large"
				startIcon={<MenuIcon />}
				onClick={handleOpenMobileMenu}
			></Button>
			<MobileMenuItem open={isViseble} onClose={handleCloseMobileMenu}>
				<div className="mob-menu" id="mob-menu">
					<div className="mob-menu__wrapper">
						<nav className="mob-menu__nav">
							<CloseButton
								startIcon={<CloseIcon />}
								onClick={handleCloseMobileMenu}
							></CloseButton>
							{config.homePage.navigation.list.map((obj) => (
								<div key={obj.id} className="mob-menu__menu">
									<Accordion
										title={obj.title}
										options={obj.extentions}
									></Accordion>
								</div>
							))}
							<div className="mob-menu__btn">
								<div className="mob-menu__lang lang">
									<LanguageMenu />
								</div>

								<FeedbackModal />
							</div>
						</nav>
					</div>
				</div>
			</MobileMenuItem>
		</ThemeProvider>
	)
}

const MobileMenuItem = styled(Modal)`
	&-content {
		z-index: 999990;
		width: 75%;
		height: 100% !important;
	}
	&-overlay {
		overflow: hidden;
	}
`

const CloseButton = styled(Button)`
	&& {
		color: black;
		background-color: none !important;
		display: block !important;
		position: fixed !important;
		top: 3%;
		left: 50%;
		transform: translateX(-50%) !important;
		z-index: 999990;
	}
`

export default MobileMenu
