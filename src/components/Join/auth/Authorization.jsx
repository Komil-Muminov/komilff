import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authorization = () => {
	const [userInp, setUserInp] = useState({
		username: "",
		password: "",
	});

	const [getResponse, setGetResponse] = useState([]);
	const navigate = useNavigate();

	const handleSubmite = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:3000/register");
			const responseReturn = await response.json();
			setGetResponse(responseReturn);
			handleDataCorrect();
		} catch (error) {
			console.log(error);
		}
	};

	const handleDataCorrect = () => {
		if (getResponse && getResponse?.length > 0) {
			const isValid = getResponse.some(
				(item) =>
					item.username === userInp.username &&
					item.password === userInp.password,
			);
			if (isValid) {
				// Уведомление об успешной авторизации
				toast.success("Йоу поздравляем ! вы успешно авторизовались ");
				navigate("/Home");
			} else {
				// Уведомление об ошибке при авторизации
				toast.error("Йоу сорян но вы  не юзерян");
			}
		} else {
			// Уведомление об ошибке при получении данных с сервера
			toast.error("Произошла ошибка при получении данных с сервера");
		}
	};

	return (
		<>
			<ToastContainer position="top-right" autoClose={2000} />
			<section className="sections ">
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
								className="reg_input "
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
								className="reg_input text-white"
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, password: e.target.value }))
								}
							/>
							<Button
								type="submit"
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
