import axios from 'axios';

const httpRequests = {

    createField: async (API_URL, reqData) => {
        const response = await axios.post(API_URL, reqData)
        return response.data[0]
    },

    getPublicItem: async (API_URL) => {
        const response = await axios.get(API_URL)
        return response.data[0]
    },

    deleteField: async (API_URL, fieldKey) => {
        const response = await axios.delete(API_URL + fieldKey)
        return response.data[0]
    },

    updateValue: async (API_URL, reqData) => {
        const { id, reqBody } = reqData;
        const response = await axios.patch(API_URL + id, reqBody)
        return response.data
    },

	getMetalsData: async (API_URL, metals) => {
		const response = await axios.post(API_URL, metals)
		return response.data
	}
}

export default httpRequests;
