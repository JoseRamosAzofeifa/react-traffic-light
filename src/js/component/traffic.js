import React, { useState } from "react";

export function Traffic() {
	const [light, setLight] = useState("");

	function changeLight(color) {
		setLight(color);
	}

	return (
		<div className="conteiner-traffic">
			<div className="rope"></div>
			<div className="traffic">
				<div>
					<button
						className={"red " + (light == "red" ? "selected" : "")}
						onClick={() => changeLight("red")}></button>
				</div>
				<div>
					<button
						className={
							"orange " + (light == "orange" ? "selected" : "")
						}
						onClick={() => changeLight("orange")}></button>
				</div>
				<div>
					<button
						className={
							"green " + (light == "green" ? "selected" : "")
						}
						onClick={() => changeLight("green")}></button>
				</div>
			</div>
		</div>
	);
}
