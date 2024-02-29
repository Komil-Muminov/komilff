import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
	const [userInp, setUserInp] = useState({
		username: "",
		password: "",
	});
	// const [userObj, setUserObj] = useState([]);

	const handleSubmite = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/register", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userInp),
			});

			if (response.ok) {
				console.log(`Пользователь успешно зарегистрирован: ${response}`);
				setUserInp((prev) => ({
					...prev,
					username: "",
					password: "",
				}));

				// Notify
				toast.success("Йоу вы успешно зарегистрировались");
			} else {
				console.log("Ошибка");
				setUserInp({
					username: "",
					password: "",
				});
				toast.error("Йоу произошла ошибка при регистрации");
			}
		} catch (error) {
			setUserInp({
				username: "",
				password: "",
			});
			console.log(`Ошибка:${error}`);
			toast.error("Ошибка сервера. Подробнее в clg");
		}
	};
	return (
		<>
			<ToastContainer position="top-right" autoClose={2000} />
			<section className="sections">
				<div className="container">
					<div className="reg__content">
						<form className="reg_form flex gap-3">
							<TextField
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, username: e.target.value }))
								}
								required
								id="outlined-required"
								label="Логин"
								defaultValue="Hello World"
								type="text"
								name="username"
								value={userInp.username}
								helperText="Логин должен содержать минимум 5 символов"
								className="reg_input  text-white"
							/>
							<TextField
								required
								id="outlined-password-input"
								label="Пароль"
								type="password"
								autoComplete="current-password"
								name="Пароль"
								value={userInp.password}
								helperText="Пароль должен содержать минимум 5 символов"
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
								Зарегистрироваться
							</Button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Registration;
