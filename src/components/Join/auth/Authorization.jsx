import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Authorization = () => {
	// const [isPost, setIsPost] = useState(false);
	const [userInp, setUserInp] = useState({
		username: "",
		password: "",
	});
	const handleSubmite = (e) => {
		e.preventDefault();
		// Ваш код здесь.
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
								required={"SSS"}
								id="outlined-required"
								helperText="Логин должен содержать минимум 5 символов"
								label="Логин"
								defaultValue="Hello World"
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
