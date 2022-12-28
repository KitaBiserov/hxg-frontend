import { Link } from 'react-router-dom'
import React from 'react'

function ErrorPage() {
	return (
		<div className="error-page">
			<div className="error-page__block">
				
				<h1>404 	  Page not Found </h1>
				
				<Link className="a anchor white" to="/">
					
					Back to main page
				</Link>
			</div>
		</div>
	)
}

export default ErrorPage
