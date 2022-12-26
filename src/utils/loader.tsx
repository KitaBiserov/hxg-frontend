import React from 'react'
import { motion } from 'framer-motion'
import logoBall from '../../images/logo/logo-ball.svg'

function Loader() {
	return (
		<div className="loader">
			<div className="loader--content">
				<motion.svg
					transition={{
						repeat: Infinity,
						ease: 'linear',
						repeatType: 'loop',

						duration: 0.8,
					}}
					animate={{
						scale: [0, 1],
					}}
				>
					<image className="image" xlinkHref={logoBall} />
				</motion.svg>
				<SantaModel />
			</div>
		</div>
	)
}

export default Loader
