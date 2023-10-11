'use client';
import React from 'react';
const ToDo = () => {
	const [isEditing, setIsEditing] = React.useState({
		id: `${Math.random(36)}`,
	});
	const handleIsEditing = (e) => {
		const { value } = e.target;
		setIsEditing((prev) => ({ ...prev, todo: value }));
	};

	const addNewItemToUserSubmitItem = (itemId, newValue) => {
		setUserSubmit = (prev) =>
			prev.map((item) =>
				item.id === itemId ? { ...prev, text: newValue } : item,
			);
	};
	const [userInputSubmit, setUserInputSubmit] = React.useState([]);
	const [userInput, setUserInput] = React.useState({
		id: `${Date.now()}`,
		todo: '',
		active: false,
	});
	const handleChange = (e) => {
		setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUserInputSubmit((prev) => [...prev, userInput]);
		setUserInput((prev) => ({ ...prev, todo: '' }));
	};

	return (
		<>
			<div className='bg-gray-800  p-2 rounded-md m-2'>
				<h1 className='text-center'> Mini-App TodoList</h1>
				<div className='flex justify-center items-center mt-3'>
					<section className='flex justify-center items-center ml-2 mt-2  '>
						<section>
							<form
								onSubmit={handleSubmit}
								className='flex gap-2 flex-col w-full  flex-1 md:flex-row flex-wrap'>
								<input
									className='rounded-md'
									name='todo'
									onChange={handleChange}
									value={userInput.todo}
									type='text'
								/>
								<button className=' border-none bg-blue-700 rounded-sm px-3 transition duration-200 hover:bg-blue-800 m-0 '>
									Добавить
								</button>
							</form>
						</section>
					</section>
				</div>
				{userInputSubmit.map((item) => (
					<>
						dssdadsada
						<ul className='list-none text-center mt-3 text-orange-400'>
							<li>{item.todo}</li>
							{isEditing.id === item.id ? (
								<>
									<input type='text' />
									<button
										onClick={() =>
											setIsEditing({ id: '' })
										}>
										Сохранить
									</button>
								</>
							) : (
								<>
									<button
										onClick={() =>
											setIsEditing({ id: item.id })
										}>
										Редактировать
									</button>
								</>
							)}
						</ul>
					</>
				))}
			</div>
		</>
	);
};

export default ToDo;
