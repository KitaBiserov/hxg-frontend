import React from 'react'
import BasicTable, { tableContent } from './Table'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Box, Typography } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import themeGlobal from '../../style/theme'

interface ItemTabsProps {
	value: number
	datasheet: string
	onClickTab: any
	title: string
	tabs: string[]
	table: tableContent[]
	content: string[]
}

function ItemTabs({
	tabs,
	value,
	title,
	table,
	onClickTab,
	content,
	datasheet,
}: ItemTabsProps) {
	return (
		<ThemeProvider theme={themeGlobal}>
			<Tabs className="popup-tabs">
				<TabList className="tab-list">
					{tabs.map((companyContent, i) => (
						<Tab
							key={i}
							className={
								value === i
									? 'tab-list__tab active'
									: 'tab-list__tab '
							}
							onClick={() => onClickTab(i)}
						>
							<h2>{companyContent.toUpperCase()}</h2>
						</Tab>
					))}
				</TabList>
				<TabPanel>
					<div className="sc-network__wrapper-text">
						<ul>
							{content.map((obj, idx) => (
								<li key={idx}>
									<span></span>
									{obj}
								</li>
							))}
						</ul>
					</div>
				</TabPanel>

				<TabPanel>
					<BasicTable title={title} table={table} />
				</TabPanel>

				<TabPanel>
					<Box>
						<Typography>
							{/* datasheet === '' ? (
								<div className="sc-items__download-link">
									<svg
										width="50px"
										height="50px"
										version="1.1"
										viewBox="0 0 700 700"
										xlinkHref="http://www.w3.org/2000/svg"
									>
										<g>
											<path d="m465.45 167.95h95.016c3.9023-0.035156 7.2773-2.7305 8.1758-6.5312 1.082-5.6445-3.3867-10.695-6.9766-14.699l-109.37-109.36c-2.6797-2.7148-5.8438-4.8984-9.3281-6.4453-4.1523-1.9219-8.6719-2.9141-13.246-2.9062h-207.28c-9.1172 0.007812-17.859 3.6328-24.305 10.082-6.4453 6.4453-10.07 15.184-10.082 24.301v11.762c0 4.6367 3.7617 8.3984 8.4023 8.3984 4.6367 0 8.3984-3.7617 8.3984-8.3984v-11.762c0.003906-4.6602 1.8594-9.1328 5.1562-12.426 3.2969-3.2969 7.7656-5.1523 12.43-5.1562 1.3398 0.14062 207.41-0.27344 208.63 0.14453l-0.003906 88.672c0.019531 9.1055 3.6484 17.836 10.094 24.273 6.4492 6.4336 15.184 10.051 24.293 10.055zm76.883-16.801h-76.883c-4.6562 0-9.1211-1.8438-12.418-5.1289s-5.1523-7.7461-5.168-12.398v-76.941z" />
											<path d="m574.95 256.13h-3.9219l0.003906-62.777c0-4.6406-3.7617-8.3984-8.4023-8.3984-4.6367 0-8.3984 3.7578-8.3984 8.3984v62.777h-349.38v-148.18c0-4.6406-3.7617-8.4023-8.3984-8.4023-4.6406 0-8.4023 3.7617-8.4023 8.4023v27.805-0.003906c-0.96484-0.37109-1.9883-0.5625-3.0234-0.55859h-59.969c-7.1719 0.007813-14.043 2.8555-19.113 7.9258-5.0742 5.0664-7.9297 11.938-7.9414 19.105v335.67c0.015625 9.043 3.6133 17.707 10.004 24.102 6.3945 6.3906 15.059 9.9883 24.102 10.004h442.84c7.1758-0.007812 14.051-2.8594 19.121-7.9336 5.0742-5.0703 7.9258-11.945 7.9336-19.121v-221.76 0.003906c-0.007812-7.1758-2.8594-14.055-7.9297-19.125-5.0742-5.0742-11.949-7.9297-19.125-7.9336zm-425.54 27.051v214.71c0 6.1836-3.2969 11.895-8.6484 14.988-5.3555 3.0898-11.953 3.0898-17.305 0-5.3555-3.0938-8.6523-8.8047-8.6523-14.988v-335.67c0.003907-5.6602 4.5938-10.246 10.254-10.254h59.969c1.0352-0.007812 2.0625-0.20703 3.0234-0.58594v104.72h-11.586c-7.1758 0.007812-14.055 2.8633-19.129 7.9375-5.0742 5.0781-7.9219 11.961-7.9258 19.137zm435.79 221.77c-0.003907 5.6602-4.5938 10.25-10.254 10.254h-413.46c3.1016-5.2383 4.7344-11.215 4.7266-17.305v-214.71c0.007813-5.6602 4.5938-10.246 10.254-10.254h398.48c5.6602 0.007813 10.25 4.5938 10.254 10.254z" />
										</g>
									</svg>
									<a className="a" href={'' + datasheet}>
										{title + '  Datasheet'}
									</a>
								</div>
							) : (
								<></>
							)*/}
						</Typography>
					</Box>
				</TabPanel>
			</Tabs>
		</ThemeProvider>
	)
}

export default ItemTabs
