'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, Facebook } from '@mui/icons-material';
export default function Footer() {
	return (
		<footer>
			<div className='py-12 md:py-16'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6'>
					<div className='md:flex md:items-center md:justify-center'>
						{/* <div className='text-gray-400 text-sm mr-4 text-center'>
							<small className='text-red-300 duration-300 ease-in-out hover:text-red-400 '>
								{' '}
								forever in my mind 01-04 Лалила.
							</small>
						</div> */}
						<ul className='flex flex-wrap  justify-center items-center mb-4 md:order-1 md:ml-4 md:mb-0'>
							<li className='ml-4'>
								<p>Мой инстаграм:</p>

								<Link
									target='_blank'
									href='https://www.instagram.com/komilff/'
									className='flex justify-center items-center text-purple-600 bg-gray-800 duration-300 ease-in-out hover:text-gray-100 hover:bg-purple-600 rounded-full '
									aria-label='Instagram'>
									<Instagram />
								</Link>
							</li>
							<li className='ml-4'>
								<p>Мой фейсбук:</p>

								<Link
									target='_blank'
									href='https://facebook.com/profile.php?id=100011337580298&_se_imp=1YoEl3FbgNNKkDUwT'
									className='flex justify-center items-center text-purple-600 bg-gray-800   duration-300 ease-in-out hover:text-gray-100 hover:bg-purple-600 rounded-full '
									aria-label='Facebook'>
									<Facebook />
								</Link>
							</li>

							<li className='ml-4'>
								<p>Написать мне:</p>

								<Link
									target='_blank'
									href='https://docs.google.com/forms/d/e/1FAIpQLSfZMHCZ6q3kblUIamI9QMwqrL-JIwKolEC9Ax-23kDL49HBpQ/viewform?usp=sf_link'
									className='flex justify-center items-center text-purple-600 bg-gray-800   duration-300 ease-in-out hover:text-gray-100 hover:bg-purple-600 rounded-full '
									aria-label='Facebook'>
									<Mail />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='text-gray-400 text-sm mr-4 text-center mt-2'>
					<small className='text-red-300 duration-300 ease-in-out pl-12 hover:text-red-400 text-xl '>
						{' '}
						01.04 ∞
					</small>
				</div>
			</div>
		</footer>
	);
}
