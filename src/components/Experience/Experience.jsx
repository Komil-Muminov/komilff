import "./css/Experience.css";
import Slider from "../Slider/Slider";

const Experience = () => {
	return (
		<>
			<section className="sections experience-section ">
				<div className="container">
					<h2 className="sections-title text-center">Обо мне</h2>
					<Slider />
					<div className="text__content flex flex-col flex-wrap md:flex-nowrap gap-4 justify-center items-center ">
						<div className="experience__card flex flex-col">
							<h3
								aria-label="Загаловок"
								className="card__title text-white text-center mb-3"
							>
								Образование и университет:
							</h3>
							<p
								aria-label="Образование и университет:"
								className="w-full about__desc text-white max-w-3xl select-none "
							>
								Я&nbsp;Комил Муминов, родившийся 1&nbsp;апреля 1997&nbsp;года,
								начал свой путь образования в&nbsp;средней школе
								&#8470;&nbsp;88, где учился с&nbsp;2004 по&nbsp;2015&nbsp;год.
								После окончания школы я&nbsp;принял решение продолжить
								образование и&nbsp;поступил в&nbsp;Северо-Кавказский университет
								(СКФУ) в&nbsp;городе Пятигорске, Ставропольского края России.
								Я&nbsp;выбрал инженерный факультет, специализируясь
								в&nbsp;области программирования. Этот период стал важным этапом
								в&nbsp;моей жизни, запоминается как один из&nbsp;самых лучших
								и&nbsp;насыщенных периодов, которые я&nbsp;всегда буду
								вспоминать с&nbsp;благодарностью.
							</p>
						</div>

						<div className="experience__card flex flex-col">
							<h3 className="card__title text-white text-center mb-3">
								Самостоятельные проекты:
							</h3>
							<p className="w-full about__desc text-white max-w-3xl select-none ">
								Я&nbsp;активно занимаюсь самостоятельными проектами, создавая
								веб-сайты и&nbsp;приложения для личного использования.
								Я&nbsp;использую технологии HTML5, CSS (включая фреймворки
								Tailwind и&nbsp;Material-UI), JavaScript и&nbsp;React.js
								(включая его фреймворки). Эти проекты не&nbsp;только
								демонстрируют мой интерес к&nbsp;современным технологиям,
								но&nbsp;и&nbsp;служат площадкой для постоянного
								совершенствования моих навыков и&nbsp;творческого выражения.
							</p>
						</div>

						<div className="experience__card flex flex-col">
							<h3 className="card__title text-white text-center mb-3">
								Стремление к росту:
							</h3>
							<p className="w-full about__desc text-white max-w-3xl select-none">
								&nbsp;Я&nbsp;постоянно стремлюсь к&nbsp;профессиональному
								и&nbsp;личному росту, а&nbsp;также к&nbsp;применению
								приобретенных знаний и&nbsp;навыков в&nbsp;реальной жизни.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Experience;
