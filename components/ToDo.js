'use client';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const ToDo = () => {
	const [userInput, setUserInput] = React.useState('');
	const [userInputToObj, setUserInputToObj] = React.useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setUserInputToObj((prev) => [
			...prev,
			{ id: uuidv4(), todo: userInput, isEditing: false }, // Ошибка исправлена
		]);
		setUserInput('');

		console.log(userInputToObj);
	};

	const handleIsEditingMode = (itemId) => {
		setUserInputToObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? { ...item, isEditing: !item.isEditing }
					: item,
			),
		);
		// Ваш код здесь.
	};
	const handleSaveEditedItem = (itemId, userInput) => {
		setUserInputToObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? { ...item, todo: userInput, isEditing: !item.isEditing }
					: item,
			),
		);
		setUserInput('');
		// Ваш код здесь.
	};

	const [showTodo, setShowTodo] = React.useState(false);

	return (
		<>
			<section className='flex bg-slate-900 p-44 rounded-md mt-2 '>
				<div className='flex flex-1 justify-center'>
					{' '}
					<button
						onClick={() => setShowTodo(!showTodo)}
						className={`${
							!showTodo
								? 'border-none bg-slate-700 p-2 rounded-sm transition duration-200 hover:bg-transparent'
								: 'hidden'
						}`}>
						{' '}
						ПОКАЗАТЬ MINI-APP{' '}
					</button>{' '}
					<button
						onClick={() => setShowTodo(!showTodo)}
						className={`${
							!showTodo
								? 'hidden'
								: 'border-none bg-slate-700 p-2 rounded-sm transition duration-200 hover:bg-transparent'
						}`}>
						Скрыть
					</button>
				</div>{' '}
			</section>
			{showTodo && (
				<section className='flex flex-wrap flex-col  gap-2 mt-2  '>
					<div className='flex justify-center  mb-3'>
						<form onSubmit={handleSubmit}>
							<input
								className='rounded-md mr-2'
								type='text'
								value={userInput}
								onChange={(e) => setUserInput(e.target.value)}
							/>
							<button className='border-none rounded-md p-2 bg-blue-700 transition duration-200 hover:bg-blue-800'>
								Добавить
							</button>
						</form>
					</div>
					<div className='map-items flex flex-col justify-center items-center'>
						{userInputToObj.map((item) => (
							<div className='flex gap-3 mb-3 '>
								<ul>
									<li>
										{item.todo}
										{item.isEditing ? (
											<div className='edit-save'>
												<input
													type='text'
													className='mr-2'
													value={userInput}
													onChange={(e) =>
														setUserInput(
															e.target.value,
														)
													}
												/>
												<button
													className='border-none rounded-md p-2 bg-blue-700 transition duration-200 hover:bg-blue-800'
													onClick={() =>
														handleSaveEditedItem(
															item.id,
															userInput,
														)
													}>
													Сохранить
												</button>
											</div>
										) : (
											<div className='btn-edit'>
												<button
													className='border-none rounded-md p-2 bg-blue-700 transition duration-200 hover:bg-blue-800'
													onClick={() =>
														handleIsEditingMode(
															item.id,
														)
													}>
													Редактировать
												</button>
											</div>
										)}
									</li>
								</ul>
							</div>
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default ToDo;
