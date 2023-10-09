import Image from 'next/image';
// import Person3D from '@/public/images/person3D.png';
import Person3D from '@/public/images/person-regist.png';
export default function Testimonials() {
	return (
		<section className='bg-gray-700 rounded-2xl mr-2'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 border-t border-gray-800'>
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
						<h2 className='h2 mb-4'>Work hard, be somebody.</h2>
						<p className='text-xl text-gray-400'>
							Be something more than what you see in the mirror.
							lil wayne.
						</p>
					</div>
					{/* <div className='flex items-center justify-center'>
						<div className='w-1/2'>
							<Image src={Person3D} />
						</div>
						<div className='w-1/2'>
							<p>
								Ваш текст здесь. Можете добавить свои слова и
								стилизовать их.
							</p>
						</div>
					</div> */}
					<div className='flex items-center justify-center'>
						<div className='w-1/2'>
							<Image
								src={Person3D}
								alt='person3d'
							/>
						</div>
						<div className='w-1/2'>
							<h1 className='text-2xl text-white'>Education</h1>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Numquam dolores accusantium
								doloribus dolor accusamus quisquam eveniet ipsa
								saepe impedit reiciendis? Aliquam aut maxime
								sint illo repudiandae architecto sapiente
								maiores laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
