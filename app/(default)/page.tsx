export const metadata = {
	title: 'Комил Муминов',
	description: 'КМ',
};

import Hero from '@/components/hero';
// import Features from '@/components/features';
// import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';
import ToDo from '@/components/ToDo';
import Head from 'next/head';
export default function Home() {
	return (
		<>
			<Head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Hero />
			{/* <Features /> */}
			<Zigzag />
			<Testimonials />
			<ToDo />
			{/* <Newsletter /> */}
		</>
	);
}
