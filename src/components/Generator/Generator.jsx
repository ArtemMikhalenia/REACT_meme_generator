import { useState } from "react";
import { memesData } from "../../memesData.js";
import "./generator.css";

export default function Generator() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = useState(memesData);

	function getMemeImage(event) {
		event.preventDefault();
		const memesData = allMemeImages.data.memes;
		const randomNum = Math.floor(Math.random() * (memesData.length - 1));
		const url = memesData[randomNum].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	console.log(meme);

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return { ...prevMeme, [name]: value };
		});
	}

	return (
		<main className="main-container">
			<div className="generator">
				<div className="text-container">
					<div className="top-text-container">
						<label htmlFor="topText" className="top-text-label">
							Top text
						</label>
						<input
							type="text"
							name="topText"
							id="top-text"
							className="top-text-input input"
							onChange={handleChange}
							value={meme.topText}
						/>
					</div>
					<div className="bottom-text-container">
						<label htmlFor="bottom-text" className="bottom-text-label">
							Bottom text
						</label>
						<input
							type="text"
							name="bottomText"
							id="bottomText"
							className="bottom-text-input input"
							onChange={handleChange}
							value={meme.bottomText}
						/>
					</div>
				</div>
				<button className="button" type="button" onClick={getMemeImage}>
					Get a new meme image
				</button>
				<div className="meme">
					<img src={meme.randomImage} alt="meme-image" className="meme-image" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</div>
		</main>
	);
}
