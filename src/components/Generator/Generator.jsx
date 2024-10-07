import { memesData } from "../../memesData.js";
import "./generator.css";

export default function Generator() {
	let url = "";

	function clickHandler() {
		const memesDataLength = memesData.data.memes.length;
		let randomNum = Math.floor(Math.random() * (memesDataLength - 1));

		url = memesData.data.memes[randomNum].url;
		console.log(url);
	}

	return (
		<main className="main-container">
			<div className="generator">
				<div className="text-container">
					<div className="top-text-container">
						<label htmlFor="top-text" className="top-text-label">
							Top text
						</label>
						<input
							type="text"
							name="top-text"
							id="top-text"
							className="top-text-input input"
						/>
					</div>
					<div className="bottom-text-container">
						<label htmlFor="bottom-text" className="bottom-text-label">
							Bottom text
						</label>
						<input
							type="text"
							name="bottom-text"
							id="bottom-text"
							className="bottom-text-input input"
						/>
					</div>
				</div>
				<button className="button" onClick={clickHandler}>
					Get a new meme image
				</button>
			</div>
		</main>
	);
}
