'use client';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const ToDo = () => {
	const [userInput, setUserInput] = React.useState('');
	const [userInputToObj, setUserInputToObj] = React.useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInput.trim() !== '') {
			setUserInputToObj((prev) => [
				...prev,
				{ id: uuidv4(), todo: userInput, isEditing: false },
			]);
			setUserInput('');
		} else {
			alert('Пустая строка !!!!');
		}
	};

	const handleIsEditingMode = (itemId) => {
		setUserInputToObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? { ...item, isEditing: !item.isEditing }
					: item,
			),
		);
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
	};

	const [showTodo, setShowTodo] = React.useState(false);

	return (
		<>
			<div className='flex justify-center items-center w-1/1 rounded-md mt-2 mb-5 '>
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
			</div>
			{showTodo && (
				<div className='flex flex-wrap flex-col justify-center items-center  gap-2 bg-slate-900 rounded-md pt-5 '>
					<div className='flex justify-center items-center mt-2'>
						<form onSubmit={handleSubmit}>
							<input
								className='rounded-md mr-1 w-full md:f-1/2'
								type='text'
								value={userInput}
								onChange={(e) => setUserInput(e.target.value)}
							/>
							<div className='flex justify-center items-center add-btn'>
								<button className='flex flex-wrap w-1/2 md:w-1/2 border-none rounded-md p-1 mt-1 md:p-2 bg-blue-700 transition duration-200 hover:bg-blue-800'>
									Добавить
								</button>
							</div>
						</form>
					</div>
					<div className='map-items flex flex-col justify-center items-center'>
						{userInputToObj.map((item) => (
							<div className='flex justify-center items-center gap-3 mb-3 '>
								<ul className='flex justify-center items-center mb-4'>
									<li>
										<div className='flex justify-center items-center'>
											{item.todo}
										</div>
										{item.isEditing ? (
											<div className='edit-save '>
												<input
													type='text'
													className='rounded-md mr-1 w-full md:f-1/2'
													value={userInput}
													onChange={(e) =>
														setUserInput(
															e.target.value,
														)
													}
												/>
												<div className='flex w-1/1 justify-center items-center '>
													<button
														className='flex flex-wrap w-1/2 border-none rounded-md p-1 mt-1 md:p-2 bg-blue-700 transition duration-200 hover:bg-blue-800 md:w-1/2 '
														onClick={() =>
															handleSaveEditedItem(
																item.id,
																userInput,
															)
														}>
														Сохранить
													</button>
												</div>
											</div>
										) : (
											<div className='flex flex-wrap w-1/1 md:w-1/1 btn-edit '>
												<button
													className=' border-none rounded-md p-1 mt-1 md:p-2 bg-blue-700 transition duration-200 hover:bg-blue-800'
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
				</div>
			)}
		</>
	);
};

export default ToDo;
