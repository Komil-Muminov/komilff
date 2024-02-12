import "./css/Person.css";
import KM from "./img/KM.png";
import HtmlIcon from "./img/html5.svg";
import Css from "./img/css.svg";
import JS from "./img/JS.svg";
import react from "./img/react.svg";
const PersonPage = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					{/* PERSON */}

					<div className="img-wrapper flex justify-center items-center ">
						<img
							src={KM}
							alt="km"
							className="object-cover h-[19em] w-[19em] avatar-wrapper"
						/>
					</div>
					<div className="text-wrapper flex justify-center items-center flex-col flex-wrap rounded-md mb-[1.3em]">
						<h1 className="sections-title person-title text-center text-2xl first-letter: md:text-6xl">
							I'M KOMIL MUMINOV.
						</h1>
						<p className="sections-desc person-desc">
							Саламалейкум, Добро пожаловать на мой сайт!
						</p>
						<small className="text-red-300"> 01.04 ∞</small>
					</div>
					<div className="person-btn-wrapper flex flex-col justify-center items-center gap-3 md:flex-row">
						<a
							href="mailto:kmuminov0104@gmail.com"
							className="btn person-btn text-center"
						>
							Написать на Почту
						</a>
						<a
							href="https://www.instagram.com/komilff"
							target="_blank"
							className="btn person-btn text-center"
						>
							Написать на Instagram
						</a>
					</div>

					{/* EXPERIENCE */}
					<h2 className="text-center mb-[48px]">EXPERIENCE WITH</h2>

					<div className="experience-img flex flex-wrap justify-center items-center gap-4 md:gap-[60px] ">
						<img
							className=" person-skills object-cover h-14 w-14"
							src={HtmlIcon}
							alt="html"
						/>
						<img
							className="person-skills  object-cover h-14 w-14"
							src={Css}
							alt="css"
						/>
						<img
							className="person-skills  object-cover h-14 w-14"
							src={JS}
							alt="js"
						/>
						<img
							className="person-skills  object-cover h-14 w-14"
							src={react}
							alt="react"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default PersonPage;
