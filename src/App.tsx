import './style/scss/main.scss'
import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Footer from './components/Footer'
import { WinterLoader } from './style/winter-pack/WinterLoader'
import Item from './pages/Item'
import { Header } from './components/Header'
import { ThemeProvider } from '@mui/material/styles'
import themeGlobal from './style/theme'
import Policy from './pages/Policy'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/client'
import { WinterLoyout } from './style/winter-pack/WinterLoyout'

const Vacancy = lazy(() => import('./pages/Vacancy'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
const Contacts = lazy(() => import('./pages/Contacts'))
const About = lazy(() => import('./pages/About'))
const EnergyEquipment = lazy(() => import('./pages/EnergyEquipment'))
const EquipmentIT = lazy(() => import('./pages/EquipmentIT'))
const ConsumerEquipment = lazy(() => import('./pages/ConsumerEquipment'))
const ConstructionMachine = lazy(() => import('./pages/ConstructionMachine'))


export function App() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => setLoaded(true), 4000)
	}, [])

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={themeGlobal}>
				<WinterLoyout>
					<div className="App">
						{!loaded ? (
							<WinterLoader />
						) : (
							<BrowserRouter>
								<Header />
								<Routes>
									<Route
										path="*"
										element={
											<Suspense fallback={<WinterLoader />}>
												<ErrorPage />
											</Suspense>
										}
									/>
									<Route path="/" element={<Home />}></Route>

									<Route
										path="/contacts"
										element={
											<Suspense fallback={<WinterLoader/>}>
												<Contacts />
											</Suspense>
										}
									/>
									<Route
										path="/about"
										element={
											<Suspense fallback={<WinterLoader />}>
												<About />
											</Suspense>
										}
									/>
									<Route
										path="/construction-machine"
										element={
											<Suspense fallback={<WinterLoader />}>
												<ConstructionMachine />
											</Suspense>
										}
									/>
									<Route path="/construction-machine/:source/id:" />

									<Route
										path="/energy-equipment/:source/id:"
										element={<Item />}
									/>
									<Route
										path="/consumer-equipment/:source/:id"
										element={<Item />}
									/>
									<Route
										path="/terms-of-use-and-privacy-policy"
										element={<Policy />}
									/>
									<Route
										path="/it-equipment/:source/:id"
										element={<Item />}
									/>
									<Route
										path="/it-equipment"
										element={
											<Suspense fallback={<WinterLoader />}>
												<EquipmentIT />
											</Suspense>
										}
									></Route>
									<Route
										path="/energy-equipment"
										element={
											<Suspense fallback={<WinterLoader />}>
												<EnergyEquipment />
											</Suspense>
										}
									/>
									<Route
										path="/vacancy"
										element={
											<Suspense fallback={<WinterLoader />}>
												<Vacancy />
											</Suspense>
										}
									/>
									<Route
										path="/consumer-equipment"
										element={
											<Suspense fallback={<WinterLoader />}>
												<ConsumerEquipment />
											</Suspense>
										}
									/>
								</Routes>

								<Footer />
							</BrowserRouter>
						)}
					</div>
				</WinterLoyout>
			</ThemeProvider>
		</ApolloProvider>
	)
}

