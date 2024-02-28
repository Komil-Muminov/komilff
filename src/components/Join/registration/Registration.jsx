import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Join from "../Join";
// import Authorization from "../auth/Authorization";

const Registration = () => {
	const [isPost, setIsPost] = useState(false);
	const [userInp, setUserInp] = useState({
		username: "",
		password: "",
	});
	// const [userObj, setUserObj] = useState([]);

	const handleSubmite = async (e) => {
		e.preventDefault();
	};
	return (
		<>
			<section className={isPost ? `hidden` : `sections`}>
				<div className="container">
					<div className="reg__content">
						<form onSubmit={handleSubmite} className="reg_form flex gap-3">
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
								name="password"
								value={userInp.password}
								helperText="Пароль должен содержать минимум 5 символов"
								className="reg_input  text-white"
								onChange={(e) =>
									setUserInp((prev) => ({ ...prev, password: e.target.value }))
								}
							/>

							<Button
								sx={{ maxWidth: "180px" }}
								variant="contained"
								onClick={handleSubmite}
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
