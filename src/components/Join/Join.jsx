import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Authorization from "./auth/Authorization";
import Registration from "./registration/Registration";
import { Alert } from "@mui/material";
// import { Tabs, Tab } from "@mui/material";

const Join = () => {
	// ------------------------------------------------------------------
	const errorsObj = {
		authText: "Авторизуйтесь пожалуйста",
		registText: "Зарегистрируйтесь пожалуйста",
		minLengthLog: "Логин должен содержать минимум 5 символов",
		maxLengthPass: "Пароль должен содержать минимум 5 символов",
	};

	// -------------------------------------------------------------------

	const [value, setValue] = React.useState("1");
	const handleChangee = (e, newValue) => {
		console.log(newValue);
		if (newValue === "1") {
			console.log("Авторизация");
		} else {
			console.log("Регистрация");
		}
		setValue(newValue);
	};

	// -------------------------------------------------------------------------------------
	React.useEffect(() => {
		const showError = document.querySelector(".join_desc");
	}, [value]);

	// -------------------------------------------------------------------
	return (
		<>
			<section className="sections">
				<div className="container">
					<h2 className="sections__title join_title">Добро пожаловать !</h2>
					<p className="sections__desc join_desc"></p>
					<div className="join__content bg-white">
						<Box sx={{ width: "100%", typography: "body1" }}>
							<TabContext value={value}>
								<Box
									sx={{
										borderBottom: 1,
										borderColor: "divider",
									}}
								>
									<TabList
										onChange={handleChangee}
										aria-label="lab API tabs example"
									>
										<Tab
											sx={{ fontSize: "24px" }}
											label="Авторизация"
											value="1"
										/>
										<Tab
											sx={{ fontSize: "24px" }}
											label="Регистрация"
											value="2"
										/>
									</TabList>
								</Box>
								<TabPanel value="1">
									<Alert sx={{ fontSize: "22px" }} severity="success">
										Авторизуйтесь пожалуйста
									</Alert>
									<Authorization />
								</TabPanel>
								<TabPanel value="2">
									<Alert sx={{ fontSize: "22px" }} severity="error">
										Зарегистрируйтесь пожалуйста
									</Alert>
									<Registration />
								</TabPanel>
							</TabContext>
						</Box>
					</div>
				</div>
			</section>
		</>
	);
};

export default Join;
