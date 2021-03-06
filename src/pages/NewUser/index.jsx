import './style.scss';

const NewUser = () => {
	return (
		<div className="new-user">
			<h4>New User</h4>

			<form className="new-user__form">
				<div className="new-user__item">
					<label>Username</label>
					<input type="text" placeholder="john" />
				</div>

				<div className="new-user__item">
					<label>Full Name</label>
					<input type="text" placeholder="John Smith" />
				</div>

				<div className="new-user__item">
					<label>Email</label>
					<input type="email" placeholder="john@gmail.com" />
				</div>

				<div className="new-user__item">
					<label>Password</label>
					<input type="password" placeholder="password" />
				</div>

				<div className="new-user__item">
					<label>Phone</label>
					<input type="text" placeholder="+1 123 456 78" />
				</div>

				<div className="new-user__item">
					<label>Address</label>
					<input type="text" placeholder="New York | USA" />
				</div>

				<div className="new-user__item">
					<label>Gender</label>
					<div className="new-user__genre">
						<input type="radio" name="gender" id="male" value="male" />
						<label for="male">Male</label>

						<input type="radio" name="gender" id="female" value="female" />
						<label for="female">Female</label>

						<input type="radio" name="gender" id="other" value="other" />
						<label for="other">Other</label>
					</div>
				</div>

				<div className="new-user__item">
					<label>Active</label>
					<select className="new-user__select" name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>

				<button className="new-user__create-btn">Create</button>
			</form>
		</div>
	);
};

export default NewUser;
