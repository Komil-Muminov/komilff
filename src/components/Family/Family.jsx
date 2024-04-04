import "./css/Experience.css";
import Slider from "../Slider/Slider";

const Family = () => {
	return (
		<>
			<section className="sections family__sections">
				<div className="container">
					<h2 className="sections-title text-center">ME</h2>
					<div className="family__content flex gap-4 flex-col justify-center items-center">
						{/* <blockquote className="sections__desc family__desc max-w-xs text-center">
							Семья — это то, что делает нас сильными в самые сложные моменты
							нашей жизни. - Брэд Хенри
						</blockquote> */}
						<Slider />
					</div>
				</div>
			</section>
		</>
	);
};

export default Family;
