import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Chart from '../../components/Chart';
import { productData } from '../../dummyData';
import './style.scss';

const Product = () => {
	return (
		<div className="product">
			<div className="product__header">
				<h4>Product</h4>
				<Link to="/new-product">
					<button>Create</button>
				</Link>
			</div>

			<div className="product__info">
				<div className="product__chart">
					<Chart data={productData} title="Sale Performance" dataKey="Sales" />
				</div>
				<div className="product__detail">
					<div className="product__detail-top">
						<img
							src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tiny
							&__chart {
								height: 100%;
							}srgb&dpr=2&w=500"
							alt=""
						/>
						<span>Apple Airpods</span>
					</div>

					<div className="product__detail-bottom">
						<div className="product__detail-item">
							<span className="key">id:</span>
							<span className="value">123</span>
						</div>

						<div className="product__detail-item">
							<span className="key">sales:</span>
							<span className="value">1233</span>
						</div>

						<div className="product__detail-item">
							<span className="key">active:</span>
							<span className="value">yes</span>
						</div>

						<div className="product__detail-item">
							<span className="key">in stock:</span>
							<span className="value">no</span>
						</div>
					</div>
				</div>
			</div>
			<div className="product__update">
				<form className="product__update-form">
					<div className="product__form-left">
						<label>Product Name</label>
						<input type="text" placeholder="Apple AirPod" />
						<label>In Stock</label>
						<select name="inStock" id="idStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="product__form-right">
						<div className="upload">
							<img
								src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt=""
							/>
							<label for="file">
								<Publish className="icon" />
							</label>
							<input type="file" id="file" style={{ display: 'none' }} />
						</div>
						<button className="product__update-btn">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Product;
