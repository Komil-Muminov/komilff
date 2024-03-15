import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Products = () => {
	const [userInput, setUserInput] = useState("");
	const [inputObj, setInputObj] = useState([]);

	const handleSubmite = (e) => {
		e.preventDefault();
		// Ваш код здесь.

		setInputObj((prev) => [
			...prev,
			{ id: uuidv4(), todo: userInput.trim(), isEdit: false },
		]);
		setUserInput("");
	};

	const handleEdit = (itemId) => {
		if (inputObj?.length > 0 && inputObj !== null && inputObj !== undefined) {
			setInputObj((prev) =>
				prev.map((item) =>
					item.id === itemId ? { ...item, isEdit: !item.isEdit } : "",
				),
			);
		}
	};

	const handleIsEditingSave = (itemId, userInput) => {
		// Ваш код здесь.
		if (inputObj?.length > 0 && inputObj !== null && inputObj !== undefined) {
			setInputObj((prev) =>
				prev.map((item) =>
					itemId === item.id
						? { ...item, todo: userInput, isEdit: !item.isEdit }
						: item,
				),
			);
		}
	};
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="content">
						<form action="#" className="flex gap-3">
							<input
								type="text"
								value={userInput}
								className="userInput text-red-500"
								onChange={(e) => setUserInput(e.target.value.trim())}
							/>
							<button
								className="submite__btn bg-red-400"
								onClick={handleSubmite}
							>
								Отправить{" "}
							</button>
						</form>

						{inputObj?.length > 0 &&
						inputObj !== null &&
						inputObj !== undefined ? (
							<div className="form__items">
								{inputObj?.map((item) => (
									<ul className="list" key={item.id}>
										<li className="item" key={item.id}>
											<p className="item__title">{item.todo}</p>
											<button
												onClick={() =>
													setInputObj((prev) =>
														prev.filter((itemId) => itemId.id !== item.id),
													)
												}
											>
												Удалить
											</button>
										</li>

										{item.isEdit ? (
											<div className="editing__mode">
												<input
													onChange={(e) => setUserInput(e.target.value)}
													type="text"
													placeholder={item.todo}
													className="text-black bg-red-600"
												/>
												<button
													onClick={() =>
														handleIsEditingSave(item.id, userInput)
													}
													className="save__btn"
												>
													Сохранить
												</button>
											</div>
										) : (
											<div className="enable__editing">
												<button onClick={() => handleEdit(item.id)}>
													Редактировать
												</button>
											</div>
										)}
									</ul>
								))}
							</div>
						) : (
							<h2 className="form__empty">ПУСТО !!!</h2>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Products;
