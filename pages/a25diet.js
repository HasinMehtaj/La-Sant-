import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { getbmi } from '../express_api/bmi';
import { suggestPlan } from '../express_api/diet_api';
import format from 'date-fns/format';

const a25diet = () => {
	const [BMI, setBMI] = useState(-1);
	const [plan, setPlan] = useState({});
	const [weekNumber, setWeekNumber] = useState(1);
	const [todos, setTodos] = useState([]);
	const [month, setMonth] = useState(format(new Date(), 'MMMM'));

	const handleSetWeek = (weekNumber) => {
		setWeekNumber(weekNumber);
		let sliceStart = (weekNumber - 1) * 7;
		let sliceEnd = weekNumber * 7;
		setTodos(plan.todos.slice(sliceStart, sliceEnd));
	};

	useEffect(() => {
		getbmi()
			.then((data) => {
				if (!data.error) {
					setBMI(data.BMI.toFixed(2));

					suggestPlan('Diet', data.BMI)
						.then((dietPlan) => {
							setPlan(dietPlan);
							setTodos(dietPlan.todos.slice(0, 7));
						})
						.catch((error) => {
							console.log(error);
						});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	let bmiComment = '';
	if (BMI < 18) {
		bmiComment = 'underweight';
	} else if (BMI >= 18 && BMI <= 25) {
		bmiComment = 'fit';
	} else if (BMI > 25) {
		bmiComment = 'overweight';
	}

	return (
		<>
			<div className={styles.main}>
				<Navbar></Navbar>

				<h1>
					{`Hello there! You are ${bmiComment}, let's make you follow a proper diet
        plan to get you fit and healthy.`}
					<br />
					<div className='btn-group justify-content-center'>
						<button
							type='button'
							className='btn btn-dark dropdown-toggle'
							data-bs-toggle='dropdown'
							data-bs-display='static'
							aria-expanded='false'
						>
							{/* Please choose the month for which you want to see the diet chart */}
							{month}
						</button>
						<ul className='dropdown-menu dropdown-menu-lg-end'>
							<li>
								<button className='dropdown-item' type='button'>
									January
								</button>
							</li>

							<li>
								<button className='dropdown-item' type='button'>
									February
								</button>
							</li>

							<li>
								<button className='dropdown-item' type='button'>
									March
								</button>
							</li>

							<li>
								<button className='dropdown-item' type='button'>
									April
								</button>
							</li>

							<li>
								<button className='dropdown-item' type='button'>
									May
								</button>
							</li>
							<li>
								<button className='dropdown-item' type='button'>
									June
								</button>
							</li>
							<li>
								<button className='dropdown-item' type='button'>
									July
								</button>
							</li>

							<li>
								<button className='dropdown-item' type='button'>
									August
								</button>
							</li>
							<li>
								<button className='dropdown-item' type='button'>
									September
								</button>
							</li>
							<li>
								<button className='dropdown-item' type='button'>
									October
								</button>
							</li>
							<li>
								<button className='dropdown-item' type='button'>
									November
								</button>
							</li>
							<li>
								<button className='dropdown-item' type='button'>
									December
								</button>
							</li>
						</ul>
					</div>
					<br></br>
					<div className='btn-group justify-content-center'>
						<button
							type='button'
							className='btn btn-dark dropdown-toggle'
							data-bs-toggle='dropdown'
							data-bs-display='static'
							aria-expanded='false'
						>
							{`Week-${weekNumber}`}
						</button>
						<ul className='dropdown-menu dropdown-menu-lg-end'>
							<li>
								<button
									className='dropdown-item'
									type='button'
									onClick={() => handleSetWeek(1)}
								>
									Week-1
								</button>
							</li>

							<li>
								<button
									className='dropdown-item'
									type='button'
									onClick={() => handleSetWeek(2)}
								>
									Week-2
								</button>
							</li>

							<li>
								<button
									className='dropdown-item'
									type='button'
									onClick={() => handleSetWeek(3)}
								>
									Week-3
								</button>
							</li>
							<li>
								<button
									className='dropdown-item'
									type='button'
									onClick={() => handleSetWeek(4)}
								>
									Week-4
								</button>
							</li>
						</ul>
					</div>
				</h1>
				<div className='bg-light grey'>
					<div className='m-20 bg-light grey'>
						<h1 className='text-center mb-3'>Weekly Diet Chart</h1>
						<table className='table'>
							<thead>
								<tr>
									<th>#</th>
									<th>6 am</th>
									<th>6:30 am</th>
									<th>8 am</th>
									<th>10 am</th>
									<th>1 pm</th>
									<th>4 pm</th>
									<th>8 pm</th>
									<th>Tasks Completed</th>
								</tr>
							</thead>

							<tbody>
								{todos.map((todo, todoIndex) => {
									let splitTodos = todo.task.split(', ');

									return (
										<tr key={todoIndex}>
											<td>{todoIndex + 1}</td>

											{splitTodos.map((splitTodo, splitTodoIndex) => (
												<td key={splitTodoIndex}>{splitTodo}</td>
											))}
											<td>
												<div className='form-check'>
													<input className='form-check-input' type='checkbox' />
												</div>
											</td>
										</tr>
									);
								})}
								{/* <tr className='table-light secondary'>
									<td>1</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr>

								<tr className='table-light secondary'>
									<td>2</td>

									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr>

								<tr className='table-light secondary'>
									<td>3</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr>

								<tr className='table-light secondary'>
									<td>4</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr>

								<tr className='table-light secondary'>
									<td>5</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr>

								<tr className='table-light secondary'>
									<td>6</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr>

								<tr className='table-light secondary'>
									<td>7</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<div className='form-check'>
											<input
												className='form-check-input'
												type='checkbox'
												id='inlineFormCheck'
											/>
										</div>
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>

				<Footer></Footer>
			</div>
		</>
	);
};

export default a25diet;
