const fetchError = (status, endpoint) => {
	switch (true) {
		case status === 500:
			return `Internal Server Error while attempting to access endpoint to ${endpoint}. Server is not responding or doesn't exist.`;
		case status === 401:
			return `The API endpoint to ${endpoint} cannot be accessed.`;
		case status === 403:
			return `Access Denied! - You are not authorized to access this resource. - ${endpoint}`;
		case status === 404:
			return `The API endpoint to ${endpoint} cannot not found.`;
		default:
			return `Could not access response for the requested endpoint`;
	}
};

const consolLogError = (err) => {

	if (err.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log({
			'err.response.data': err.response.data,
			'err.response.status': err.response.status,
			'err.response.headers': err.response.headers
		});
	} else if (err.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log({ 'err.request': err.request });
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log({ 'err.message': err.message });
	}
	console.log({ 'err.config': err.config });
};

const featuresLogic = {

	initialStatus: {
		isError: false,
		isSuccess: false,
		isLoading: false,
		message: ''
	},

	caseState: {
		pending: (state) => {
			state.isSuccess = false
			state.isError = false
			state.isLoading = true
		},
		fulfilled: (dataName) => (state, action) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = true
			state[dataName] = action.payload
		},
		rejected: (state, action) => {
			state.isLoading = false
			state.isSuccess = false
			state.isError = true
			state.message = action.payload
		},
		reset: (dataName, emptyType) => (state) => {
			state.isError = false
			state.isSuccess = false
			state.isLoading = false
			state.message = ''
			state[dataName] = emptyType
		}
	},

	errorMessage: (err, endpoint) => {
		consolLogError(err);
		const status = err?.response?.status;
		const message = (err?.response?.data?.message) || err.message;
		const defaultMsg = err.toString();
		if (message) {
			return message;
		} else {
			return status ? fetchError(status, endpoint) : defaultMsg;
		}
	}
}

export default featuresLogic
