import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import UserList from './pages/UserList';

function App() {
	return (
		<Router>
			<div className="app">
				<TopBar />

				<div className="app__container">
					{/* Left side bar */}
					<div className="app__side-bar">
						<SideBar />
					</div>

					{/* Pages */}
					<div className="app__pages">
						<Switch>
							<Route path="/products">
								<ProductList />
							</Route>
							<Route path="/users">
								<UserList />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
