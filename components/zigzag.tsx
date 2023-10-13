'use client';
import Image from 'next/image';
import FeatImage01 from '@/public/images/features-03-image-01.webp';
import FeatImage02 from '@/public/images/features-03-image-02.webp';
import FeatImage04 from '@/public/images/features-03-image-03.webp';

export default function Zigzag() {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 border-t border-gray-800'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<h1 className='h2 mb-4'>Обо мне</h1>
					</div>

					{/* Items */}
					<div className='grid gap-20'>
						{/* 1st item */}
						<div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
							{/* Image */}
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
								data-aos='fade-up'>
								<Image
									className='max-w-full mx-auto md:max-w-none h-auto rounded-xl'
									src={FeatImage01}
									width={540}
									height={405}
									alt='Features 01'
								/>
							</div>
							{/* Content */}
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
								data-aos='fade-right'>
								<div className='md:pr-4 lg:pr-12 xl:pr-16'>
									<h3 className='h3 mb-3'>Комил Муминов</h3>
									<p className='text-xl text-gray-400 mb-4'>
										Я родился 1 апреля 1997 года. Моя
										учебная история началась в средней школе
										№88, где я учился с 2004 по 2015 год.
										После окончания школы я решил продолжить
										свое образование и поступил в
										Северо-Кавказский университет (СКФУ) в
										городе Пятигорске, который находится в
										Ставропольском крае России. В
										университете я выбрал инженерный
										факультет и обучался на программиста.
										Это был важный период в моей жизни, где
										я углубил свои знания в области
										программирования и инженерии. Время,
										проведенное в Пятигорске, было для меня
										незабываемым и одним из лучших периодов
										в моей жизни, который я никогда не
										забуду. Я стремлюсь к дальнейшему росту
										и развитию, а также к применению своих
										навыков в реальной жизни. <br />
									</p>
								</div>
							</div>
						</div>

						{/* 2nd item */}
						<div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
							{/* Image */}
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
								data-aos='fade-up'>
								<Image
									className='max-w-full mx-auto md:max-w-none h-auto rounded-xl'
									src={FeatImage02}
									width={540}
									height={405}
									alt='Features 02'
								/>
							</div>
							{/* Content */}
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
								data-aos='fade-left'>
								<div className='md:pl-4 lg:pl-12 xl:pl-16'>
									<h3 className='h3 mb-3'>
										Мои навыки программирования
									</h3>
									<ul className='text-lg text-gray-400 -mb-2'>
										<li className='flex items-center mb-2'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>HTML</span>
										</li>
										<li className='flex items-center mb-2'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>CSS</span>
										</li>
										<li className='flex items-center'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>JAVASCRIPT</span>
										</li>

										<li className='flex items-center'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>REACT JS</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* 3rd item */}
						<div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
							{/* Image */}
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
								data-aos='fade-up'>
								<Image
									className='max-w-full mx-auto md:max-w-none h-auto rounded-xl'
									src={FeatImage04}
									width={540}
									height={405}
									alt='Features 03'
								/>
							</div>
							{/* Content */}
							<div
								className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
								data-aos='fade-right'>
								<div className='md:pr-4 lg:pr-12 xl:pr-16'>
									<h3 className='h3 mb-3'>Мое Хобби</h3>

									<ul className='text-lg text-gray-400 -mb-2'>
										<li className='flex items-center mb-2'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>Футбол</span>
										</li>
										<li className='flex items-center mb-2'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>Саморазвитие </span>
										</li>
										<li className='flex items-center'>
											<svg
												className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
												viewBox='0 0 12 12'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
											</svg>
											<span>Программирования</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
