import "./css/Experience.css";
import Slider from "../Slider/Slider";

const Experience = () => {
	return (
		<>
			<section className="sections experience-section ">
				<div className="container">
					<h2 className="sections-title text-center">Обо мне</h2>
					<Slider />
					<div className="text__content flex flex-col justify-center items-center ">
						<p className="sections-desc about-desc text-red-500 mb-[1rem]">
							Я&nbsp;Комил Муминов, я&nbsp;родился 1&nbsp;апреля 1997&nbsp;года.
							Мой путь образования начался в&nbsp;средней школе &#8470;&nbsp;88,
							где я&nbsp;учился с&nbsp;2004 по 2015&nbsp;год. После завершения
							школы принял решение продолжить образование и&nbsp;поступил
							в&nbsp;Северо-Кавказский университет (СКФУ) в городе Пятигорске,
							Ставропольского края России. В&nbsp;СКФУ я&nbsp;выбрал инженерный
							факультет, специализируясь в&nbsp;области программирования. Этот
							период стал важным этапом в&nbsp;моей жизни. Время проведенное в
							Пятигорске запоминается как один из&nbsp;самых лучших
							и&nbsp;насыщенных периодов, который я&nbsp;всегда буду вспоминать
							с&nbsp;благодарностью.Я активно занимаюсь самостоятельными
							проектами. Я&nbsp;создаю веб-сайты и приложения для личного
							использования, используя технологии HTML5, CSS (включая фреймворки
							Tailwind и&nbsp;Material-UI), JavaScript и React.js (включая его
							фреймворки). Эти проекты не&nbsp;только демонстрируют мой интерес
							к&nbsp;современным технологиям, но&nbsp;и&nbsp;служат площадкой
							для постоянного совершенствования моих навыков и творческого
							выражения. С&nbsp;тех пор я&nbsp;постоянно стремлюсь к
							профессиональному и&nbsp;личному росту, а&nbsp;также
							к&nbsp;применению приобретенных знаний и&nbsp;навыков
							в&nbsp;реальной жизни.
						</p>
					</div>
					{/* <small className="text-red-100">
						*Данный текст написан исскуственным интелектом
					</small> */}
				</div>
			</section>
		</>
	);
};

export default Experience;
