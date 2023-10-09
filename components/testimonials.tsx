import Image from 'next/image';
import robotpng from '@/public/images/robotpng.png';
export default function Testimonials() {
	return (
		<section className='bg-gray-700 rounded-2xl mr-2'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 border-t border-gray-800'>
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
						<h2 className='h2 mb-4'>Work hard, be somebody.</h2>
						<p className='text-xl text-gray-400'>
							Be something more than what you see in the mirror.
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
							{
								<Image
									src={robotpng}
									alt='person3d'
								/>
							}
						</div>
						<div className='w-1/2'>
							<h1 className='text-center text-2xl'>Past Live</h1>{' '}
							<p>
								{/* В прошлом существует удивительная история, где
								одна особенная связь завершилась новым началом.
								Этот момент оказался для этой истории важным
								шагом, и она перешла к следующей главе своей
								жизни, оставив в прошлом прошлое. И хотя новая
								глава в ее жизни предоставила ей новые
								возможности, она всегда будет хранить в сердце
								воспоминания о прошлом. Но каждый раз при виде
								ее прошлое изнутри сгораяет */}
								In the past, there is an amazing story where one
								special connection came to an end, leading to a
								new beginning. This moment proved to be an
								important step for this story, and it moved on
								to the next chapter of its life, leaving the
								past behind. And while the new chapter in its
								life provided new opportunities, it will always
								hold memories of the past in its heart.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
