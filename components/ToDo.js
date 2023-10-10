import React from 'react';
const ToDo = () => {
	return (
		<>
			<div>
				<h1 className='text-center'>Mini-App TodoList</h1>
				<div className='flex justify-center items-center mt-3'>
					<section className='flex justify-center items-center ml-2 mt-2  '>
						<section>
							<form className='flex gap-2 flex-col w-full  flex-1 md:flex-row flex-wrap'>
								<input
									className='rounded-md'
									type='text'
								/>
								<input
									className='rounded-md'
									type='text'
								/>
								<button className=' border-none bg-blue-700 rounded-sm px-3 transition duration-200 hover:bg-blue-800 m-0 '>
									Добавить
								</button>
							</form>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default ToDo;
