import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	LineStyle,
	MailOutline,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './style.scss';

const SideBar = () => {
	return (
		<div className="side-bar">
			<div className="side-bar__wrapper">
				<div className="side-bar__menu">
					<h3>Dashboard</h3>
					<ul className="side-bar__list">
						<Link to="/" className="link">
							<li className="side-bar__item active">
								<LineStyle className="side-bar__icon" />
								Home
							</li>
						</Link>
						<li className="side-bar__item">
							<Timeline className="side-bar__icon" />
							Analytics
						</li>
						<li className="side-bar__item">
							<TrendingUp className="side-bar__icon" />
							Sales
						</li>
					</ul>
				</div>

				<div className="side-bar__menu">
					<h3>Quick Menu</h3>
					<ul className="side-bar__list">
						<Link to="/users" className="link">
							<li className="side-bar__item">
								<PermIdentity className="side-bar__icon" />
								Users
							</li>
						</Link>
						<li className="side-bar__item">
							<Storefront className="side-bar__icon" />
							Products
						</li>
						<li className="side-bar__item">
							<AttachMoney className="side-bar__icon" />
							Transactions
						</li>
						<li className="side-bar__item">
							<BarChart className="side-bar__icon" />
							Reports
						</li>
					</ul>
				</div>

				<div className="side-bar__menu">
					<h3>Notifications</h3>
					<ul className="side-bar__list">
						<li className="side-bar__item">
							<MailOutline className="side-bar__icon" />
							Mail
						</li>
						<li className="side-bar__item">
							<DynamicFeed className="side-bar__icon" />
							Feedback
						</li>
						<li className="side-bar__item">
							<ChatBubbleOutline className="side-bar__icon" />
							Messages
						</li>
					</ul>
				</div>

				<div className="side-bar__menu">
					<h3>Staff</h3>
					<ul className="side-bar__list">
						<li className="side-bar__item">
							<WorkOutline className="side-bar__icon" />
							Manage
						</li>
						<li className="side-bar__item">
							<Timeline className="side-bar__icon" />
							Analytics
						</li>
						<li className="side-bar__item">
							<Report className="side-bar__icon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
