import "./css/Projects.css";
const Projects = () => {
	return (
		<>
			<section className="sections projects-section">
				<div className="container flex justify-center items-center flex-col mb-[27px]">
					<h2 className="sections-title block">Project</h2>
					<div className="projects-wrapper flex flex-wrap  gap-[30px]">
						<article className="project-items w-full">
							<a
								href="https://komilff.vercel.app/"
								className="project-item-link"
								target="_blank"
							>
								Нажми на меня
							</a>
							<h3>Название: </h3>
						</article>
						<article className="project-items ">
							<a
								href="https://academy-tea.vercel.app"
								className="project-item-link"
								target="_blank"
							>
								Нажми на меня
							</a>
							<h3>Название: </h3>
						</article>
						<article className="project-items  ">
							<a
								href="https://academy-tea.vercel.app"
								className="project-item-link "
								target="_blank"
							>
								Нажми на меня
							</a>
							<h3>Название:</h3>
						</article>
						<article className="project-items">
							<a href="#" className="project-item-link" target="_blank">
								Нажми на меня
							</a>
							<h3>Название: </h3>
						</article>
					</div>
				</div>
			</section>
		</>
	);
};

export default Projects;
