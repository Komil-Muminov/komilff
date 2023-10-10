import React from 'react';
const ToDo = () => {
	return (
		<>
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
						<button>Добавить</button>
					</form>
				</section>
			</section>
		</>
	);
};

export default ToDo;
