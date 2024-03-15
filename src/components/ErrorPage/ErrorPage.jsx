import { Instagram, Email, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ErrorRobot from "./img/ErrorRobot.png";

const ErrorPage = () => {
	return (
		<>
			<section className="sections Error-section">
				<div className="container flex flex-col justify-center items-center">
					<img src={ErrorRobot} alt="Robot" className=" w-1/4 h-1/4" />
					<div className="text-wrapper flex flex-col justify-center items-center mb-[1.2em]">
						<p className="text-red-400 text-2xl mb-4">Упс 😅 </p>
						<h2 className="ErrorPage-title text-3xl text-center md:text-7xl text-red-400 mb-3">
							Страница не&nbsp;найдена
						</h2>
						<p>Вы можете авторизоваться или же зарегистрироваться на сайте</p>
						<Link className="text-red-500 outline border-red-200" to="/Join">
							Войти на сайт
						</Link>
						<p>Проверьте адрес ссылки или напишите мне</p>
						<h2 className="text-xl">Ба&nbsp;ман нависед</h2>
					</div>
					<div className="links_wrapper flex items-center justify-center gap-2 ">
						<a
							rel="noreferrer"
							href="https://www.instagram.com/komilff/"
							className="error-Link"
							target="_blank"
						>
							<Instagram sx={{ fontSize: "40px" }} />{" "}
						</a>

						<a
							rel="noreferrer"
							href="mailto:kmuminov0104@gmail.com"
							className="error-Link"
							target="_blank"
						>
							<Email sx={{ fontSize: "40px" }} />{" "}
						</a>

						<a
							rel="noreferrer"
							href="https://docs.google.com/forms/d/1cM2UPm14NBZQb1yHDaP6KbOWIvEiE0gMrB5wAeww81M/edit"
							className="error-Link"
							target="_blank"
						>
							<Google sx={{ fontSize: "40px" }} />{" "}
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
