import { createTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button, Modal } from '@mui/material'
import MuiAccordion from '@mui/material/Accordion'

const themeGlobal = createTheme({
	palette: {
		primary: { main: '#02020b', dark: '#4d5382' },
		secondary: {
			main: '#ebebeb',
		},
	},
	typography: {
		fontFamily: ['HelveticaNueCyr', 'Century Gothic'].join('.'),
	},
	components: {
		MuiTab: {
			styleOverrides:{

			}
		},
		MuiModal: {
			styleOverrides: {
				root: {
					zIndex: 999999,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'&.Mui-focused': {
						border: '0px',
					},
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: `
     @font-face {
      font-family: "HelveticaNeueCyr";
      src: url("fonts/HelveticaNeueCyr-Medium.ttf");
      
   };
   @font-face {
    font-family: "Century Gothic";
    src: url("fonts/GOTHIC.TTF");
 };
    `,
		},
	},
})

export const LanguageMenuStyle = styled(Menu)(({ theme }) => ({
	zIndex: '9990',
	'& .MuiPopover-paper': {
		backgroundColor: 'rgba(2,2,11,0.5)',
		marginTop: '65px',
		border: '1px solid #ebebeb',
	},
	'& .MuiMenu-list': {
		backgroundColor: 'rgba(0,0,0,0)',
		borderRadius: 'none',
	},
}))

export const LanguageMenuItemStyle = styled(MenuItem)(({ theme }) => ({
	backgroundColor: 'rgb(0,0,0,0.1)',
	marginTop: '0px',
	zIndex: '9990',
}))

export const MobileMenuButton = styled(Button)(({ theme }) => ({}))

export const MobileMenu = styled(Modal)(({ theme }) => ({}))

export const ItemButton = styled(Button)(({ theme }) => ({
	textAlign: 'center',
}))

export const AccordionStyle = styled(MuiAccordion)(({ theme }) => ({}))

export const btnCallback = styled(Button)({})

export default themeGlobal
