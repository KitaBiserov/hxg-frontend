import React from 'react'

export interface catalogHeaderContentItem {
	id: number
	title: string
	description: string
}

export interface catalogHeaderContent {
	catalogHeaderContentList: catalogHeaderContentItem[]
}

interface HeaderVideoComponentProps {
	category: number
	backgroundImage: string
	content: catalogHeaderContent
	theme: string
}

export const HeaderVideoComponent = ({
	category,
	backgroundImage,
	content,
}: HeaderVideoComponentProps) => {
	return (
		<>
			<div
				className="slider-header--pages"
				style={{
					backgroundImage: `url('assets/images/gifs/desktop-${backgroundImage}.gif')`,
				}}
			>
				{' '}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
					}}
					className="slider-header slider-header__title-box  slider-header__title-box__pages"
				>
					{content.catalogHeaderContentList.map((obj) => (
						<div
							style={{ padding: '0px 20px 0px 20px' }}
							key={obj.id}
							className={
								category === obj.id ? 'display' : 'not-display'
							}
						>
							<h3>{obj.title.toUpperCase()}</h3>

							<label>{obj.description} </label>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
