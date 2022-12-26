import './style/scss/main.scss'
import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Footer from './components/Footer'
import Loader from './utils/loader'
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
		setTimeout(() => setLoaded(true), 3000)
	}, [])

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={themeGlobal}>
				<WinterLoyout>
					<div className="App">
						{!loaded ? (
							<Loader />
						) : (
							<BrowserRouter>
								<Header />
								<Routes>
									<Route
										path="*"
										element={
											<Suspense fallback={<Loader />}>
												<ErrorPage />
											</Suspense>
										}
									/>
									<Route path="/" element={<Home />}></Route>

									<Route
										path="/contacts"
										element={
											<Suspense fallback={<Loader />}>
												<Contacts />
											</Suspense>
										}
									/>
									<Route
										path="/about"
										element={
											<Suspense fallback={<Loader />}>
												<About />
											</Suspense>
										}
									/>
									<Route
										path="/construction-machine"
										element={
											<Suspense fallback={<Loader />}>
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
											<Suspense fallback={<Loader />}>
												<EquipmentIT />
											</Suspense>
										}
									></Route>
									<Route
										path="/energy-equipment"
										element={
											<Suspense fallback={<Loader />}>
												<EnergyEquipment />
											</Suspense>
										}
									/>
									<Route
										path="/vacancy"
										element={
											<Suspense fallback={<Loader />}>
												<Vacancy />
											</Suspense>
										}
									/>
									<Route
										path="/consumer-equipment"
										element={
											<Suspense fallback={<Loader />}>
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

