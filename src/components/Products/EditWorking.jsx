import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const Edit = () => {
	const [userInput, setUserInput] = useState("");

	const [userInputObj, setUserInputObj] = useState([]);

	const hanldeSubmit = (e) => {
		e.preventDefault();
		setUserInputObj((prev) => [
			...prev,
			{ id: uuidv4(), todo: userInput, isEditing: false },
		]);
		setUserInput("");
	};

	const handleIsEditing = (itemId) => {
		setUserInputObj((prev) =>
			prev.map((item) =>
				item.id === itemId ? { ...item, isEditing: !item.isEditing } : item,
			),
		);
	};

	const handleIsEditingSave = (itemId, userInput) => {
		setUserInputObj((prev) =>
			prev.map((item) =>
				item.id === itemId
					? {
							...item,
							todo: userInput,
							isEditing: !item.isEditing,
					  }
					: item,
			),
		);
		// Ваш код здесь.
	};

	return (
		<>
			<div className="container">
				<form onSubmit={hanldeSubmit}>
					<input type="text" onChange={(e) => setUserInput(e.target.value)} />
					<button>Сохранить</button>
				</form>
				{userInputObj.map((item) => (
					<>
						<li className="text-orange-300">{item.todo}</li>
						{item.isEditing ? (
							<>
								<input
									type="text"
									value={userInput}
									onChange={(e) => setUserInput(e.target.value)}
									placeholder={item.todo}
								/>
								<button
									onClick={() => {
										handleIsEditingSave(item.id, userInput);
									}}
								>
									Сохранить
								</button>
							</>
						) : (
							<>
								<button onClick={() => handleIsEditing(item.id)}>
									Редактировать
								</button>
							</>
						)}
					</>
				))}
			</div>
		</>
	);
};

export default Edit;
