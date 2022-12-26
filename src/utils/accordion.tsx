import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import styled from 'styled-components'
import { AccordionStyle } from '../style/theme'
import { ThemeProvider } from '@mui/material'
import themeGlobal from '../style/theme'
import { CssBaseline } from '@mui/material'
export interface AcordionOptions {
	label?: string | undefined
	link: string
	value?: string | undefined
}

interface AcordionList {
	title: string
	options: AcordionOptions[]
}

export default function Accordion({ title, options }: AcordionList) {
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false)
		}

	return (
		<ThemeProvider theme={themeGlobal}>
			<CssBaseline />
			<AccordionStyle
				sx={{ fontFamily: 'Century Gothic', textAlign: 'center' }}
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
			>
				<AccordionSummary
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					{title}
				</AccordionSummary>

				{options.map((obj, i) => (
					<MuiAccordionDetails
						key={i}
						sx={{
							fontFamily: 'Century Gothic',
							borderBottom: 'none',
						}}
					>
						<Link className="a" to={obj.link}>
							{obj.label}
						</Link>
					</MuiAccordionDetails>
				))}
			</AccordionStyle>
		</ThemeProvider>
	)
}

const AccordionSummary = styled(MuiAccordionSummary)`
	&& {
		text-align: center;
	}
`
