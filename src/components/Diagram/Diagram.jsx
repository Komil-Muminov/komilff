// import React, { useState, useEffect } from "react";
// import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

// const Diagram = () => {
// 	const [percent, setPercent] = useState(25);

// 	const getData = (percent) => [
// 		{ x: 1, y: percent },
// 		{ x: 2, y: 100 - percent },
// 	];

// 	const [data, setData] = useState(getData(0));

// 	useEffect(() => {
// 		const setStateInterval = setInterval(() => {
// 			let newPercent = percent + Math.random() * 25;
// 			newPercent = newPercent > 100 ? 80 : newPercent;
// 			setPercent(newPercent);
// 			setData(getData(newPercent));
// 		}, 900);

// 		return () => clearInterval(setStateInterval);
// 	}, [percent]);

// 	return (
// 		<>
// 			<section className="sections">
// 				<div className="diagram__content flex justify-center items-center m-0 text-center w-1/2 h-1/2">
// 					<svg viewBox="0 0 400 400" width="100%" height="100%">
// 						<VictoryPie
// 							standalone={false}
// 							animate={{ duration: 1000 }}
// 							width={400}
// 							height={400}
// 							data={data}
// 							innerRadius={120}
// 							cornerRadius={25}
// 							labels={() => null}
// 							style={{
// 								data: {
// 									fill: ({ datum }) => {
// 										const color = datum.y > 30 ? "green" : "red";
// 										return datum.x === 1 ? color : "transparent";
// 									},
// 								},
// 							}}
// 						/>
// 						<VictoryAnimation duration={1000} data={{ percent }}>
// 							{(newProps) => (
// 								<VictoryLabel
// 									textAnchor="middle"
// 									verticalAnchor="middle"
// 									x={200}
// 									y={200}
// 									text={`${Math.round(newProps.percent)}%`}
// 									style={{ fontSize: 45 }}
// 								/>
// 							)}
// 						</VictoryAnimation>
// 					</svg>
// 				</div>
// 			</section>
// 		</>
// 	);
// };
// export default Diagram;
