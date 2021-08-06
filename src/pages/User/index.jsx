import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './style.scss';

const User = () => {
	return (
		<div className="user">
			<div className="user__header">
				<h4>Edit User</h4>
				<Link to="/new-user">
					<button>Create</button>
				</Link>
			</div>

			<div className="user__container">
				<div className="user__info">
					<div className="user__info-top">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
						<div>
							<span>Vu Ngoc Duyet</span>
							<p>Developer</p>
						</div>
					</div>

					<div className="user__info-list">
						<h6>Account Details</h6>
						<div className="user__info-item">
							<PermIdentity className="icon" />
							<span>DuyetVu2001</span>
						</div>
						<div className="user__info-item">
							<CalendarToday className="icon" />
							<span>01.03.2001</span>
						</div>
					</div>

					<div className="user__info-list">
						<h6>Contact Details</h6>
						<div className="user__info-item">
							<PhoneAndroid className="icon" />
							<span>037944ETHAN</span>
						</div>
						<div className="user__info-item">
							<MailOutline className="icon" />
							<span>vungocduyet24@gmail.com</span>
						</div>
						<div className="user__info-item">
							<LocationSearching className="icon" />
							<span>Viet Nam | Hung Yen</span>
						</div>
					</div>
				</div>
				<div className="user__update">
					<h5>Edit</h5>

					<form className="user__form-update">
						<div className="user__form-left">
							<div className="user__form-item">
								<label>Username</label>
								<input type="text" placeholder="duyetvu" />
							</div>

							<div className="user__form-item">
								<label>Full name</label>
								<input type="text" placeholder="Vu Ngoc Duyet" />
							</div>

							<div className="user__form-item">
								<label>Email</label>
								<input type="text" placeholder="vungocduyet24@gmail.com" />
							</div>

							<div className="user__form-item">
								<label>Phone</label>
								<input type="text" placeholder="037944abc" />
							</div>

							<div className="user__form-item">
								<label>Address</label>
								<input type="text" placeholder="Viet Nam | Hung Yen" />
							</div>
						</div>

						<div className="user__form-right">
							<div className="form-right__container">
								<img
									src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt=""
								/>
								<label htmlFor="file">
									<Publish className="icon" />
								</label>
								<input type="file" id="file" style={{ display: 'none' }} />
							</div>

							<button className="user__update-btn">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
