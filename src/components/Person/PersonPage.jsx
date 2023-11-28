import "./css/Person.css";
const PersonPage = () => {
	return (
		<>
			<section className="sections">
				<div className="container flex justify-center items-center   gap-64">
					<div className="img-wrapper">
						<img
							src="src\components\Person\img\person.png"
							alt=""
							className="avatar-wrapper"
						/>
					</div>
				</div>
				<div className="container flex flex-col items-center justify-center">
					<h2 className="sections-title person-title">
						I do code and make content about it!
					</h2>
					<p className="sections-desc person-desc">
						I am a seasoned full-stack software engineer with over 8 years of
						professional experience, specializing in backend development. My
						expertise lies in crafting robust and scalable SaaS-based
						architectures on the Amazon AWS platform.
					</p>
				</div>
				<div className="container">
					<div className="container flex flex-col pl-[112px] md:flex-row  gap-4 items-center justify-center">
						<button className="btn person-btn">НАПИСАТЬ МНЕ</button>
						<button className="btn person-btn">СКАЧАТЬ CV</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default PersonPage;
