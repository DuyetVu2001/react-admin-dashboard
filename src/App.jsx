import TopBar from './components/TopBar';
import './App.scss';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
	return (
		<div className="app">
			<TopBar />
			<div className="container">
				<SideBar />
				<Home />
			</div>
		</div>
	);
}

export default App;
