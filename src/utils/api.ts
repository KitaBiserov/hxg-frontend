import axios, { AxiosError } from 'axios'

type ServerError = string | undefined
type Data = string[] | undefined



const getItems = async (id: string): Promise<Data | ServerError> => {
	try {
		const response = await axios.get<Data>(
			'https://62c3fa7eabea8c085a67f486.mockapi.io/it?id=' + id
		)
		console.log(`get items in action ${response.data}`)

		return response.data
	} catch (err) {
		const serverError = err as AxiosError<ServerError>
		if (serverError && serverError.response) {
			return serverError.response.data
		}
	}
}

export default getItems

const itSource = 'https://62c3fa7eabea8c085a67f486.mockapi.io/it?id='
const energySource = 'https://62c3fa7eabea8c085a67f486.mockapi.io/energy?id='
const constructionSource =
	'https://62c3fa7eabea8c085a67f486.mockapi.io/construction-machines?id='
const consumerSource =
	'https://62c3fa7eabea8c085a67f486.mockapi.io/consumer-equipment?id='

export const getItEquipment = (id: string | undefined) => {
	const res = fetch(itSource + id)
	console.log(res)
	return res
}

export const getEnergyEquipment = (id: string | undefined) => {
	const res = fetch(energySource + id)
	console.log(res)
	return res
}
export const getConstructionEquipment = (id: string | undefined) => {
	const res = fetch(constructionSource + id)
	console.log(res)
	return res
}
export const getConsumerEquipment = (id: string | undefined) => {
	const res = fetch(consumerSource + id)
	console.log(res)
	return res
}
