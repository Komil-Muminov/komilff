import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const ToDo = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	const [product, setProduct] = useState([]);
	const onSubmit = (data) => {
		setProduct((prev) => [
			...prev,
			{ id: uuidv4(), task: data.text, isEditing: false },
		]);
		console.log(product);
		reset();
	};

	const handleDelete = (id) => {
		setProduct((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<>
			<section className="sections">
				<div className="container todo-container">
					<div className="task-content flex flex-col justify-center items-center ">
						<h2 className="sections-title todo-title mb-4 text-center">
							СПИСОК ЗАДАЧ:
						</h2>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="todo-form flex gap-4 mb-5  "
						>
							<TextField
								className="bg-white rounded-lg h-[3.4em]"
								id="outlined-search"
								type="search"
								{...register("text", {
									minLength: 2,
								})}
							/>
							<button className="btn form-submit">Отправить</button>
						</form>

						<div className="task-item mb-5">
							<h3>Задачи:</h3>
							{product.map((item) => (
								<li className="item">{item.task}</li>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ToDo;
