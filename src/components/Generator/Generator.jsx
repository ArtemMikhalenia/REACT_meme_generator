import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
// import { memesData } from "../../memesData.js";
import "./generator.css";

export default function Generator() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemes, setAllMemes] = useState([]);

	function getMemeImage(event) {
		event.preventDefault();
		setMeme({
			topText: "",
			bottomText: "",
			randomImage: "",
		});
		const randomNum = Math.floor(Math.random() * (allMemes.length - 1));
		const url = allMemes[randomNum].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return { ...prevMeme, [name]: value };
		});
	}

	const captureRef = useRef(); //creating reference for capture element

	const downloadMeme = () => {
		if (captureRef.current) {
			html2canvas(captureRef.current, {
				useCORS: true, //allows to capture images from other domains
				allowTaint: true, //allows to get text
			}).then((canvas) => {
				const link = document.createElement("a");
				link.href = canvas.toDataURL("image/png"); // getting canvas image
				link.download = "meme.png"; // name of the file
				document.body.appendChild(link);
				link.click(); // initialize download
				document.body.removeChild(link); // remove link
			});
		} else {
			console.error("Capture reference is not set");
		}
	};

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
				<div className="buttons-block">
					<button className="button" type="button" onClick={getMemeImage}>
						Get a new meme image
					</button>
					<button onClick={downloadMeme} className="download-btn button">
						Download meme
					</button>
				</div>
				<div className="meme" ref={captureRef}>
					<img src={meme.randomImage} alt="meme-image" className="meme-image" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</div>
		</main>
	);
}
