import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Featured } from "./components/Featured";

import { Categories } from "./components/Categories";
import { Title } from "./components/Title";
import { Hot } from "./components/Hot";

const Home = () => {
	return (
		<div className='container'>
			<Header />
			<Featured />
			<Categories />
			<Hot />
		</div>
	);
};

export default Home;
