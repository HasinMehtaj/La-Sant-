import Cookie from 'js-cookie';

const getbmi = async () => {
	try {
		const token = Cookie.get('token');
		let res = await fetch('/api/bmi', {
			method: 'get',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		});
		return await res.json();
	} catch (error) {
		console.log('bmi error', error);
	}
};

const suggestPlan = async (planType, bmi) => {
	try {
		const token = Cookie.get('token');
		let res = await fetch('/api/plan/suggestPlan', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify({ planType, bmi }),
		});
		return await res.json();
	} catch (error) {
		console.log('suggestDiet error', error);
	}
};

export { getbmi, suggestPlan };
