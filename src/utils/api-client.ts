const client = async (
	endpoint: string,
	{ data, token, headers: customHeaders, ...customConfig }: any
) => {
	const config = {
		method: data ? 'POST' : 'GET',
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			Authorization: token ? `Bearer ${token}` : undefined,
			'Content-Type': data ? 'application/json' : undefined,
			...customHeaders,
		},
		...customConfig,
	};

	return window
		.fetch(process.env.REACT_APP_API_URL + endpoint, config)
		.then(async response => {
			const { items } = await response.json();
			if (response.ok) {
				return items;
			} else {
				const error = {
					message: 'Sorry, there was an error, try again',
				};
				return Promise.reject(error);
			}
		});
};

export { client };
