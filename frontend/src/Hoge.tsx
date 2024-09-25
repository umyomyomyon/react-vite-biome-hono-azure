import { useState } from "react";
import { fetchApi } from "./api";

export const Hoge: React.FC = () => {
	const [res, setRes] = useState<string>("");
	const handleClick = async () => {
		const data = await fetchApi();
		console.log(data);
		setRes(data);
	};

	return (
		<div>
			<div>
				<h2>結果</h2>
				<p>{res}</p>
			</div>
			<button type="button" onClick={handleClick}>
				Click
			</button>
		</div>
	);
};
