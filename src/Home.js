import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Featured } from "./components/Featured";

import { Categories } from "./components/Categories";
import { Title } from "./components/Title";
import { Hot } from "./components/Hot";
import { Brand } from "./components/Brand";
import { News } from "./components/News";
import { Footer } from "./components/Footer";
import { Helper } from "./components/helper";

const Home = () => {
	return (
		<div className='container relative'>
			<Header />
			<Featured />
			<Categories />
			<Hot />
			<Brand />
			<News />
			<Footer />
			<Helper />
		</div>
	);
};

export default Home;
