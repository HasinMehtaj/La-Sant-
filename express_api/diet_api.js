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

const getDietPlan = async (bmi, planType) => {
	try {
		const token = Cookie.get('token');
		let res = await fetch('/api/plan/suggestPlan', {
			method: 'get',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		});
		return await res.json();
	} catch (error) {
		console.log('getDietPlan error', error);
	}
};

const getsuggestDiet = async () => {
	try {
		const token = Cookie.get('token');
		let res = await fetch('/api/plan/suggestPlan', {
			method: 'get',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		});
		return await res.json();
	} catch (error) {
		console.log('suggestDiet error', error);
	}
};

export { getbmi, getDietPlan, getsuggestDiet };
