import Image from "next/image";
import robing from "@/public/images/robotpng.png";
export default function Testimonials() {
	return (
		<section className="bg-gray-700 rounded-2xl mr-2 ">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-t border-gray-800">
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">Work hard, be&nbsp;somebody.</h2>
						<p className="text-xl text-gray-400">
							Be&nbsp;something more than what you see in&nbsp;the mirror.
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
					<div
						className="flex items-center justify-center "
						data-aos="fade-right"
					>
						<div className="w-1/2">
							{
								<Image
									src={robing}
									alt="person3d"
								/>
							}
						</div>
						<div className="w-1/2">
							<h1 className="text-center text-3xl">Past Live</h1>{" "}
							<p className="ml-1 text-xl">
								&mdash;&nbsp;In&nbsp;the past, there was an&nbsp;incredible
								story in&nbsp;which a&nbsp;special bond, standing on&nbsp;wet
								ground despite the absence of&nbsp;rain, came
								to&nbsp;an&nbsp;end, opening a&nbsp;new beginning. This moment
								proved to&nbsp;be&nbsp;a significant step for this story, and
								it&nbsp;moved on&nbsp;to&nbsp;the next chapter of&nbsp;its life,
								leaving the past behind. And while the new chapter in&nbsp;its
								life provided new opportunities, it&nbsp;will always hold
								memories of&nbsp;the past in&nbsp;its heart. The name
								of&nbsp;this story is&nbsp;Lalila.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
