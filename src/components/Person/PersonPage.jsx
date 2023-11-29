import "./css/Person.css";
import Person from "./img/person.png";
const PersonPage = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					{/* PERSON */}

					<div className="img-wrapper flex justify-center items-center">
						<img src={Person} alt="" className="avatar-wrapper" />
					</div>
					<div className="text-wrapper flex justify-center items-center flex-col flex-wrap">
						<h1 className="sections-title person-title ">I'M KOMIL MUMINOV.</h1>
						<p className="sections-desc person-desc px-4 ">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
							quisquam vel eius facere in, tempore adipisci expedita nihil.
							Similique, cumque. Delectus corrupti ut quas at impedit rem
							quibusdam, fugit quidem!
						</p>
					</div>
					<div className="person-btn-wrapper flex flex-col justify-center items-center gap-3 md:flex-row">
						<a href="#" className="btn person-btn text-center">
							GET IN TOUCH
						</a>
						<a href="#" className="btn person-btn text-center">
							GET IN TOUCH
						</a>
					</div>

					{/* EXPERIENCE */}
					<h2 className="text-center mb-[48px]">EXPERIENCE WITH</h2>

					<div className="experience-wrapper flex gap-4 md:gap-[60px] justify-center items-center">
						<svg
							width="38"
							height="42"
							viewBox="0 0 38 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.890625 0L4.26113 37.8L19.3864 42L34.551 37.7948L37.9268 0H0.89325H0.890625ZM30.5899 12.3638H12.8501L13.2727 17.1124H30.1699L28.8967 31.3451L19.3864 33.9806L9.88912 31.3451L9.24075 24.0634H13.8949L14.2256 27.7646L19.389 29.1559L19.3995 29.1532L24.5655 27.7594L25.101 21.7481H9.03337L7.78387 7.728H31.0072L30.5899 12.3638Z"
								fill="url(#paint0_linear_14_60)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_14_60"
									x1="19.4087"
									y1="0"
									x2="19.4087"
									y2="42"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#FDFDFD" />
									<stop offset="1" stop-color="white" stop-opacity="0.18" />
								</linearGradient>
							</defs>
						</svg>
						<svg
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M37.5 0H4.5C2.01562 0 0 2.01562 0 4.5V37.5C0 39.9844 2.01562 42 4.5 42H37.5C39.9844 42 42 39.9844 42 37.5V4.5C42 2.01562 39.9844 0 37.5 0ZM22.8562 32.7562C22.8562 36.8438 20.4562 38.7094 16.9594 38.7094C13.8 38.7094 11.9719 37.0781 11.0344 35.1L14.25 33.1594C14.8687 34.2562 15.4312 35.1844 16.7906 35.1844C18.0844 35.1844 18.9094 34.6781 18.9094 32.7V19.2844H22.8562V32.7562ZM32.1937 38.7094C28.5281 38.7094 26.1562 36.9656 25.0031 34.6781L28.2188 32.8219C29.0625 34.2 30.1687 35.2219 32.1094 35.2219C33.7406 35.2219 34.7906 34.4062 34.7906 33.2719C34.7906 31.9219 33.7219 31.4437 31.9125 30.6469L30.9281 30.225C28.0781 29.0156 26.1937 27.4875 26.1937 24.2719C26.1937 21.3094 28.4531 19.0594 31.9687 19.0594C34.4812 19.0594 36.2812 19.9312 37.575 22.2187L34.5 24.1875C33.825 22.9781 33.0938 22.5 31.9594 22.5C30.8062 22.5 30.075 23.2312 30.075 24.1875C30.075 25.3687 30.8062 25.8469 32.5031 26.5875L33.4875 27.0094C36.8438 28.4437 38.7281 29.9156 38.7281 33.2156C38.7281 36.7594 35.9344 38.7094 32.1937 38.7094Z"
								fill="url(#paint0_linear_14_58)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_14_58"
									x1="21"
									y1="0"
									x2="21"
									y2="42"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#FDFDFD" />
									<stop offset="1" stop-color="white" stop-opacity="0.18" />
								</linearGradient>
							</defs>
						</svg>
						<svg
							width="38"
							height="42"
							viewBox="0 0 38 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.372192 0L3.73812 37.7874L18.8512 42L34.0042 37.7727L37.3722 0H0.372192ZM30.3777 8.6583L29.2557 21.2457L29.2599 21.315L29.2557 21.4704L28.4573 30.2694L28.3712 31.0527L18.8722 33.6777L18.8638 33.6861L9.38372 31.0443L8.74079 23.7678H13.3884L13.7182 27.468L18.8722 28.8645L24.0429 27.4491L24.5892 21.4242H13.7813L13.6888 20.4057L13.4766 18.0201L13.3674 16.7391H25.0031L25.4276 12.0519H7.69865L7.60621 11.0334L7.3961 8.6457L7.28474 7.3647H30.4891L30.3777 8.6583Z"
								fill="url(#paint0_linear_14_61)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_14_61"
									x1="18.8722"
									y1="0"
									x2="18.8722"
									y2="42"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#FDFDFD" />
									<stop offset="1" stop-color="white" stop-opacity="0.18" />
								</linearGradient>
							</defs>
						</svg>
						<svg
							width="48"
							height="42"
							viewBox="0 0 48 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M24.3175 16.8729C26.5691 16.8729 28.4054 18.7072 28.4054 21C28.4054 23.1836 26.5691 25.0397 24.3175 25.0397C22.0659 25.0397 20.2296 23.1836 20.2296 21C20.2296 18.7072 22.0659 16.8729 24.3175 16.8729ZM14.1961 38.469C15.5733 39.2988 18.5901 38.0323 22.0659 34.7568C20.9291 33.4685 19.8142 32.071 18.7649 30.608C17.0033 30.4396 15.252 30.1771 13.5184 29.8218C12.4036 34.4948 12.8189 37.7047 14.1961 38.469ZM15.7482 25.935L15.1142 24.8213C14.8738 25.4546 14.6333 26.0878 14.4803 26.6993C15.0705 26.8303 15.7263 26.9395 16.404 27.0486L15.7482 25.935ZM30.0449 24.2754L31.8156 21L30.0449 17.7246C29.3891 16.5672 28.6896 15.5409 28.0556 14.5146C26.8752 14.4491 25.6291 14.4491 24.3175 14.4491C23.0059 14.4491 21.7598 14.4491 20.5794 14.5146C19.9454 15.5409 19.2459 16.5672 18.5901 17.7246L16.8194 21L18.5901 24.2754C19.2459 25.4328 19.9454 26.4591 20.5794 27.4854C21.7598 27.5509 23.0059 27.5509 24.3175 27.5509C25.6291 27.5509 26.8752 27.5509 28.0556 27.4854C28.6896 26.4591 29.3891 25.4328 30.0449 24.2754ZM24.3175 9.60147C23.9022 10.0819 23.4649 10.5841 23.0277 11.1737H25.6073C25.1701 10.5841 24.7329 10.0819 24.3175 9.60147ZM24.3175 32.3985C24.7329 31.9181 25.1701 31.4159 25.6073 30.8263H23.0277C23.4649 31.4159 23.9022 31.9181 24.3175 32.3985ZM34.417 3.53099C33.0617 2.70122 30.0449 3.96772 26.5691 7.24316C27.7059 8.5315 28.8208 9.92902 29.8701 11.392C31.6626 11.5667 33.4333 11.8288 35.1166 12.1782C36.2315 7.50519 35.8161 4.29526 34.417 3.53099ZM32.8868 16.065L33.5208 17.1787C33.7612 16.5454 34.0017 15.9122 34.1547 15.3007C33.5645 15.1697 32.9087 15.0605 32.231 14.9514L32.8868 16.065ZM36.0566 0.670445C39.2701 2.50469 39.6198 7.3305 38.2645 12.9643C43.817 14.602 47.8175 17.3097 47.8175 21C47.8175 24.6903 43.817 27.398 38.2645 29.0357C39.6198 34.6695 39.2701 39.4953 36.0566 41.3296C32.8649 43.1638 28.5147 41.0675 24.3175 37.0715C20.1203 41.0675 15.7701 43.1638 12.5566 41.3296C9.36495 39.4953 9.01518 34.6695 10.3705 29.0357C4.81797 27.398 0.817505 24.6903 0.817505 21C0.817505 17.3097 4.81797 14.602 10.3705 12.9643C9.01518 7.3305 9.36495 2.50469 12.5566 0.670445C15.7701 -1.1638 20.1203 0.93248 24.3175 4.92851C28.5147 0.93248 32.8649 -1.1638 36.0566 0.670445ZM35.4226 21C36.1659 22.6377 36.8217 24.2754 37.3682 25.935C41.9589 24.5593 44.5384 22.594 44.5384 21C44.5384 19.406 41.9589 17.4407 37.3682 16.065C36.8217 17.7246 36.1659 19.3623 35.4226 21ZM13.2124 21C12.4691 19.3623 11.8133 17.7246 11.2668 16.065C6.67611 17.4407 4.09657 19.406 4.09657 21C4.09657 22.594 6.67611 24.5593 11.2668 25.935C11.8133 24.2754 12.4691 22.6377 13.2124 21ZM32.8868 25.935L32.231 27.0486C32.9087 26.9395 33.5645 26.8303 34.1547 26.6993C34.0017 26.0878 33.7612 25.4546 33.5208 24.8213L32.8868 25.935ZM26.5691 34.7568C30.0449 38.0323 33.0617 39.2988 34.417 38.469C35.8161 37.7047 36.2315 34.4948 35.1166 29.8218C33.4333 30.1712 31.6626 30.4333 29.8701 30.608C28.8208 32.071 27.7059 33.4685 26.5691 34.7568ZM15.7482 16.065L16.404 14.9514C15.7263 15.0605 15.0705 15.1697 14.4803 15.3007C14.6333 15.9122 14.8738 16.5454 15.1142 17.1787L15.7482 16.065ZM22.0659 7.24316C18.5901 3.96772 15.5733 2.70122 14.1961 3.53099C12.8189 4.29526 12.4036 7.50519 13.5184 12.1782C15.252 11.8229 17.0033 11.5604 18.7649 11.392C19.8142 9.92902 20.9291 8.5315 22.0659 7.24316Z"
								fill="url(#paint0_linear_14_62)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_14_62"
									x1="24.3175"
									y1="0"
									x2="24.3175"
									y2="42"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#FDFDFD" />
									<stop offset="1" stop-color="white" stop-opacity="0.18" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</section>
		</>
	);
};

export default PersonPage;
