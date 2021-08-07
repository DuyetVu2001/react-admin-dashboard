import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import User from './pages/User';
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
							<Route path="/product/:id">
								<Product />
							</Route>
							<Route path="/products">
								<ProductList />
							</Route>

							<Route path="/new-user">
								<NewUser />
							</Route>
							<Route path="/user/:id">
								<User />
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
