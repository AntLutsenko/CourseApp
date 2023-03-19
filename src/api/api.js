import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.wisey.app/api/v1',
});

export async function setAuthToken() {
	try {
		const data = await instance.get('/auth/anonymous?platform=subscriptions');
		return localStorage.setItem('token', data.data.token);
	} catch (error) {
		console.log(error);
	}
}

export async function getCourses() {
	const token = localStorage.getItem('token');
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	try {
		const responce = await instance.get(`/core/preview-courses`, {
			headers,
		});
		return responce.data.courses;
	} catch (error) {
		throw new Error(error.message);
	}
}

export const getCourse = async (id) => {
	const token = localStorage.getItem('token');
	try {
		const data = await instance.get(
			`https://api.wisey.app/api/v1/core/preview-courses/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

export default instance;
