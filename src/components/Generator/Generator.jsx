import "./generator.css";

export default function Generator() {
	return (
		<div className="form-container">
			<form action="#" className="form-generator">
				<div className="text-container">
					<div className="top-text-container">
						<label htmlFor="top-text" className="top-text-label">
							Top text
						</label>
						<input
							type="text"
							name="top-text"
							id="top-text"
							className="top-text-input"
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
							className="bottom-text-input"
						/>
					</div>
				</div>
				<input
					className="form-button"
					type="button"
					value="Get a new meme image"
				/>
			</form>
		</div>
	);
}
