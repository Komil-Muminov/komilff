import { useState } from "react";
// import Authorization from "../auth/Authorization";

const Registration = () => {
	const [isPost, setIsPost] = useState(false);
	const [userInp, setUserInp] = useState({
		username: "",
		password: 0,
	});
	// const [userObj, setUserObj] = useState([]);

	const handleSubmite = async (e) => {
		e.preventDefault();
		// const { name, value } = e.target;
		// setUserInp((prev) => ({
		// 	...prev,
		// 	[name]: value,
		// }));
		try {
			const response = await fetch("http://localhost:3000/register", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInp),
			});

			if (response.ok) {
				setIsPost((prev) => setIsPost(!prev));
				console.log(`Пользователь успешно зарегистрирован: ${response}`);
				setUserInp((prev) => ({
					...prev,
					username: "",
					password: "",
				}));
			} else {
				console.log("Ошибка");
				setUserInp({
					username: "",
					password: "",
				});
			}
		} catch (error) {
			setUserInp({
				username: "",
				password: "",
			});
			console.log("Ошибка");
		}
	};
	return (
		<>
			<section className={isPost ? `hidden` : `sections`}>
				<div className="container">
					<h1 className="sections__title registration_title">Регистрация</h1>
					<div className="reg__content">
						<form onSubmit={handleSubmite} className="reg_form flex gap-3">
							<input
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, username: e.target.value }))
								}
								type="text"
								name="username"
								value={userInp.username}
								className="reg_input bg-red-200 text-white"
							/>
							<input
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, password: e.target.value }))
								}
								name="password"
								value={userInp.password}
								type="password"
								className="reg_input bg-red-400 text-white"
							/>

							<button>Зарегистрироваться</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Registration;
