import React from 'react'
import { motion } from 'framer-motion'
import gift from './assets/images/png/gift.png'
import santa from './assets/images/png/santa.png'
export { WinterLoader }

function WinterLoader() {
	const images = [gift, santa]

	return (
		<div className="loader">
			<motion.div
				className="loader--content"
				transition={{
					repeat: Infinity,
					ease: 'easeInOut',
					repeatType: 'loop',

					duration: 2,
				}}
				animate={{
					translateY: [20, 0, 20],
				}}
			>
				<img
					className="image"
					alt="winter-pack"
					src={images[getRandom() > 0.5 ? 0 : 1]}
				/>
			</motion.div>
		</div>
	)
}

const getRandom = (): number => {
	return Math.random()
}
