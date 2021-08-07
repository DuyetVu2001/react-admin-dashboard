import './style.scss';

const NewProduct = () => {
	return (
		<div className="new-product">
			<h4>New Product</h4>

			<form className="new-product__form">
				<div className="new-product__item">
					<label>Image</label>
					<input type="file" id="file" />
				</div>

				<div className="new-product__item">
					<label>Name</label>
					<input type="text" placeholder="Apple Airpods" />
				</div>

				<div className="new-product__item">
					<label>Stock</label>
					<input type="text" placeholder="312" />
				</div>

				<div className="new-product__item">
					<label>Active</label>
					<select className="new-product__select" name="active" id="active">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>

				<button className="new-product__create-btn">Create</button>
			</form>
		</div>
	);
};

export default NewProduct;
