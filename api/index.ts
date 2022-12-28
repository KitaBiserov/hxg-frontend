import axios from 'axios'

const service = axios.create({
	baseURL: 'https://62c3fa7eabea8c085a67f486.mockapi.io/',
})

type ServerError = string | undefined

interface tableContent {
	row: string
	value: string
}

export interface CatalogItem {
	id: number
	model: string
	description: string[]
	image: string
	vendor: string
	datasheet: string
	table: tableContent[]
}

type Data = any

export { getCatalogItem, getItem }

const getCatalogItem = async (
	categoryId?: number,
	source?: string
): Promise<Data | ServerError> => {
	try {
		const response: Data = await service.get(
			`/${source}?category=${categoryId}`,
			{
				timeout: 3000,

			}
		)
		
		return response.data
	} catch (err: any) {
		err != null ? err.message : null
	}
}

const getItem = async (
	id?: number,
	source?: string
): Promise<Data | ServerError> => {
	try {
		const response: Data = await service.get(`/${source}?id=${id}`, {
			timeout: 3000,
			responseType: 'json',
		})
		return response.data[0]
	} catch (err: any) {
		err != null ? err.message : null
	}
}
