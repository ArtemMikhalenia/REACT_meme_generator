import "./generator.css";

export default function Generator() {
	return (
		<div className="form-container">
			<form action="#" className="form-generator">
				<div className="text-container">
					<div className="top-text-container">
						<label htmlFor="top-text">Top text</label>
						<input type="text" name="top-text" id="top-text" />
					</div>
					<div className="bottom-text-container">
						<label htmlFor="bottom-text">Bottom text</label>
						<input type="text" name="bottom-text" id="bottom-text" />
					</div>
				</div>
				<input type="submit" value="Get a new meme image" />
			</form>
		</div>
	);
}
