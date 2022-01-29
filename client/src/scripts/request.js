export const addRequest = async (url, method = 'GET', data = null) => {
	try {
		const headers = {}

		if (data) headers['content-Type'] = 'application/json'

		const response = await fetch(url, { method, headers, body: data ? JSON.stringify(data) : undefined })

		return await response.json()
	} catch (e) {
		console.log(e)
	}
}

