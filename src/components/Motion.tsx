import { motion } from 'framer-motion'
import * as React from 'react'

export { TextUp }

interface TextUpProps {
	title: string
	label?: string
}

const TextUp = ({ title, label }: TextUpProps) => {
	return (
		<motion.div
			transition={{}}
			initial={{
				y: -20,
			}}
			animate={{
				translateY: -0,
			}}
		>
			<motion.h1
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
			>
				{title}
			</motion.h1>
			<motion.label
				initial={{
					x: -20,
					opacity: 0,
				}}
				animate={{
					translateX: 0,
					opacity: 1,
				}}
			>
				{label}
			</motion.label>
		</motion.div>
	)
}
