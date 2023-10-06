import Image from 'next/image';

// import TestimonialImage01 from '@/public/images/testimonial-01.jpg';
// import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
// import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

export default function Testimonials() {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='py-12 md:py-20 border-t border-gray-800'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
						<h2 className='h2 mb-4'>Work hard, be somebody.</h2>
						<p className='text-xl text-gray-400'>
							Be something more than what you see in the mirror.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
