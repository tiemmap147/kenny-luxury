import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Featured } from "./components/Featured";
import { Gallery } from "./components/Gallery";
import { Categories } from "./components/Categories";

const Home = () => {
	return (
		<div className='container'>
			<Header />
			<Featured />
			<Gallery />
			<Categories />
		</div>
	);
};

export default Home;
