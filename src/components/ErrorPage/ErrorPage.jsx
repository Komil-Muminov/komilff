import { Instagram, Email, Google } from "@mui/icons-material";
import ErrorRobot from "./img/ErrorRobot.png";
const ErrorPage = () => {
	return (
		<>
			<section className="Error-section">
				<div className="container flex flex-col justify-center items-center">
					<img src={ErrorRobot} alt="Robot" className=" w-1/4 h-1/4" />
					<div className="text-wrapper flex flex-col justify-center items-center mb-[1.2em]">
						<h2 className="ErrorPage-title text-3xl text-center md:text-7xl text-red-400">
							Страница не&nbsp;найдена |
						</h2>
						<p>Проверьте адрес ссылки или напишите мне |</p>
						<h2 className="text-xl">Ба&nbsp;ман нависед</h2>
					</div>
					<div className="links-wrapper flex flex-col items-center justify-center ">
						<a
							rel="noreferrer"
							href="https://www.instagram.com/komilff/"
							className="error-Link"
							target="_blank"
						>
							<Instagram />{" "}
						</a>

						<a
							rel="noreferrer"
							href="mailto:kmuminov0104@gmail.com"
							className="error-Link"
							target="_blank"
						>
							<Email />{" "}
						</a>

						<a
							rel="noreferrer"
							href="https://docs.google.com/forms/d/1cM2UPm14NBZQb1yHDaP6KbOWIvEiE0gMrB5wAeww81M/edit"
							className="error-Link"
							target="_blank"
						>
							<Google />{" "}
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
