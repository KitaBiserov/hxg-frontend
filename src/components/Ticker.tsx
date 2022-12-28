import React from 'react'
import config from '../config/en/config'
import { motion } from 'framer-motion'

const TickerBlock = () => {
	return (
		<div
			style={{
				top: 0,
				overflow: 'hidden',
				zIndex: 10,
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				maxHeight: '100%',
				display: 'flex',
				position: 'absolute',
				maskImage:
					'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)',
			}}
		>
			<motion.ul
				transition={{
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'linear',
					duration: 45,
				}}
				
				animate={{
					translateX: -3200,
				}}
				style={{
					gap: 10,
					placeItems: 'center',
					display: 'flex',
					position: 'relative',
				}}
			>
				{config.homePage.tickerItems.items.map((obj) => (
					<li key={obj.id}  className="ticker-item">
						<a title={obj.link} href={obj.link}>
							{' '}
							<img
								
								src={obj.img}
								alt={obj.link}
							/>
						</a>
					</li>
				))}
				{config.homePage.tickerItems.items.map((obj) => (
					<li key={obj.id} style={{ margin: '100px' }}>
						<a title={obj.link} href={obj.link}>
							{' '}
							<img
								style={{ width: '100px' }}
								src={obj.img}
								alt={obj.link}
							/>
						</a>
					</li>
				))}
				
			</motion.ul>
		</div>
	)
}

export default TickerBlock
