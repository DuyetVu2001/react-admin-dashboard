import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';
import './style.scss';

const ProductList = () => {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 100 },
		{
			field: 'product',
			headerName: 'Product',
			width: 320,
			renderCell: (params) => (
				<div className="products__product-list">
					<img src={params.row.img} alt={params.row.name} />
					{params.row.name}
				</div>
			),
		},
		{
			field: 'stock',
			headerName: 'Stock',
			width: 190,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 190,
		},
		{
			field: 'price',
			headerName: 'Price',
			sortable: true,
			width: 190,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 140,
			renderCell: (params) => (
				<div className="products__edit-product">
					<Link to={'/product/' + params.row.id}>
						<button>Edit</button>
					</Link>
					<DeleteOutline
						className="icon"
						onClick={() => handleDelete(params.row.id)}
					/>
				</div>
			),
		},
	];

	return (
		<div className="products">
			<DataGrid
				style={{ fontSize: '1.8rem', outline: 'none' }}
				rows={data}
				columns={columns}
				disableSelectionOnClick
				autoHeight
				rowsPerPageOptions={[10]}
				pageSize={10}
			/>
		</div>
	);
};

export default ProductList;
