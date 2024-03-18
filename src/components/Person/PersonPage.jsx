import "./css/Person.css";
import HtmlIcon from "./img/html5.svg";
import Css from "./img/css.svg";
import JS from "./img/JS.svg";
import react from "./img/react.svg";
import { Button } from "@mui/material";
import { MailOutline, Instagram } from "@mui/icons-material";
const PersonPage = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					{/* PERSON */}

					<div className="img__content flex justify-center items-center">
						{/* <img
							src={KM}
							alt="km"
							className="object-cover h-[19em] w-[19em] avatar-wrapper"
						/> */}
					</div>
					<div className="text__content flex justify-center items-center flex-col flex-wrap rounded-md mb-[1.3em]">
						<h1
							aria-label="Заголовок Комил Муминов"
							className="sections-title person-title text-center text-2xl first-letter: md:text-6xl"
						>
							I&rsquo;M&nbsp;KOMIL&nbsp;MUMINOV.
						</h1>
						<p
							aria-label="Текст приветствие "
							className="sections__desc person-desc"
						>
							Саламалейкум, Добро пожаловать на&nbsp;мой сайт!
						</p>
						<small className="text-red-300"> 01.04 &infin;</small>
					</div>
					<div className="person__content flex justify-center items-center gap-3 mb-3 md:mb-5 md:flex-row">
						<Button variant="outlined" endIcon={<MailOutline />}>
							<a
								aria-label="Электроная почта"
								href="mailto:kmuminov0104@gmail.com"
								className="text-[10px] md:text-xl"
							>
								Написать &nbsp;
							</a>
						</Button>

						<Button variant="outlined" endIcon={<Instagram />}>
							<a
								aria-label="Ссылка на инстаграм"
								rel="noreferrer"
								href="https://www.instagram.com/komilff"
								target="_blank"
								className="text-[10px] md:text-xl"
							>
								Написать &nbsp;
							</a>
						</Button>
					</div>

					{/* EXPERIENCE */}
					<h2 className="sections-title text-center mb-3 md:mb-5 ">
						Мои навыки
					</h2>

					<div className="experience-img flex flex-wrap justify-center items-center gap-4 md:gap-[60px] ">
						<img
							className=" person-skills object-cover h-14 w-14 md:w-16 md:h-16"
							src={HtmlIcon}
							alt="html"
						/>
						<img
							className="person-skills  object-cover h-14 w-14 md:w-16 md:h-16"
							src={Css}
							alt="css"
						/>
						<img
							className="person-skills  object-cover h-14 w-14 md:w-16 md:h-16"
							src={JS}
							alt="js"
						/>
						<img
							className="person-skills  object-cover h-14 w-14 md:w-16 md:h-16"
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
