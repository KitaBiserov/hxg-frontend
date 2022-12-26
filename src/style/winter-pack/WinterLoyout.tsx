import * as React from 'react'
import './winter.scss'

export const WinterLoyout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="winter-screen">
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			<div className="snowflake"></div>
			{children}
		</section>
	)
}
