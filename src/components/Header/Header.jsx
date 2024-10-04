import trollface from "../../assets/troll-face.svg";
import "./header.css";

export default function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<img src={trollface} alt="trollface" />
				<h2 className="header-title">Meme Generator</h2>
			</nav>
			<p className="header-text">React project</p>
		</header>
	);
}
