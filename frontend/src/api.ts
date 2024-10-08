const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:7071";

export const fetchApi = async () => {
	const response = await fetch(`${apiUrl}/hello`);
	return response.text();
};
