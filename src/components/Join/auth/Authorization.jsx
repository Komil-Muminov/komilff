import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Authorization = () => {
	// Значение из input-ов
	const [userInp, setUserInp] = useState([
		{
			username: "",
			password: "",
		},
	]);

	// Запрос на сервер и хранение данных из сервера локально
	const [getResponse, setGetResponse] = useState([]);
	const handleSubmite = async (e) => {
		e.preventDefault();

		// Запрос на сервер
		try {
			const response = await fetch("http://localhost:3000/register");
			const responseReturn = await response.json();
			console.log(responseReturn);
			// хранение локально
			setGetResponse(responseReturn);
			handleDataCorrect();
		} catch (error) {
			console.log(error);
		}
	};

	// Проверка валидности данных для авторизации
	const handleDataCorrect = () => {
		if (getResponse && getResponse?.length > 0) {
			const isValid = getResponse.some(
				(item) =>
					item.username == userInp.username &&
					item.password == userInp.password,
			);
			console.log("Данные совпадают");
		} else {
			console.log("Данные не совпадают");
		}
	};

	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="auth__content">
						<form onSubmit={handleSubmite} className="reg_form flex gap-3">
							<TextField
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, username: e.target.value }))
								}
								required
								id="outlined-required"
								helperText="Логин должен содержать минимум 5 символов"
								label="Логин"
								type="text"
								name="username"
								value={userInp.username}
								className="reg_input  text-white"
							/>
							<TextField
								required
								id="outlined-password-input"
								helperText="Пароль должен содержать минимум 5 символов"
								label="Пароль"
								type="password"
								autoComplete="current-password"
								name="password"
								value={userInp.password}
								className="reg_input  text-white"
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, password: e.target.value }))
								}
							/>
							<Button
								onClick={handleSubmite}
								sx={{ maxWidth: "180px" }}
								variant="contained"
								color="success"
							>
								Авторизоваться
							</Button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Authorization;
