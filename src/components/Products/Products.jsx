import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import "./css/isEditing.css";
import { v4 as uuidv4 } from "uuid";
const Products = () => {
	const [userInput, setUserInput] = useState("");
	const [userInputObj, setUserInputObj] = useState([]);

	const hanldeSubmit = (e) => {
		e.preventDefault();
		setUserInputObj((prev) => [
			...prev,
			{ id: uuidv4(), task: userInput, isEditing: false },
		]);
		setUserInput("");
		console.log(userInputObj);
	};

	const handleIsEditing = (itemId) => {
		setUserInputObj((prev) =>
			prev.map((item) =>
				item.id === itemId ? { ...item, isEditing: !item.isEditing } : item,
			),
		);
	};

	const handleisEditingSave = (itemId, userInput) => {
		setUserInputObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? { ...item, task: userInput, isEditing: !item.isEditing }
					: item,
			),
		);
		// Ваш код здесь.
	};

	return (
		<>
			<section className="sections">
				<div className="container products-container">
					<h2 className="sections-title">Продукты</h2>
					<div className="product-content">
						<form
							action=""
							onSubmit={hanldeSubmit}
							className="product-form flex gap-4"
						>
							<TextField
								type="search"
								value={userInput}
								onChange={(e) => setUserInput(e.target.value)}
								className="product-input bg-slate-50 rounded-lg h-15"
							/>
							<button className="btn product-btn">Отправить</button>
						</form>

						{userInputObj?.length > 0 ? (
							<>
								{userInputObj?.map((item) => (
									<ul className="product-list">
										<li className="product-item">
											Наименование - {item.task}{" "}
											{item.isEditing ? (
												<>
													<div className="isEditing-content">
														<TextField
															type="search"
															className="product-input bg-slate-50 rounded-lg h-15 text-red-500"
															value={userInput}
															onChange={(e) => setUserInput(e.target.value)}
														/>
														<button
															className="text-black"
															onClick={() =>
																handleisEditingSave(item.id, userInput)
															}
														>
															Сохранить
														</button>
													</div>
												</>
											) : (
												<>
													<button onClick={() => handleIsEditing(item.id)}>
														Редактировать
													</button>
												</>
											)}
										</li>
									</ul>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Products;
