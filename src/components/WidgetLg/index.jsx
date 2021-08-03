import './style.scss';

const WidgetLg = () => {
	const Button = ({ type }) => {
		return <button className={'widgetLgButton ' + type}>{type}</button>;
	};

	return (
		<div className="widget-lg">
			<h4>Latest transactions</h4>

			<table className="widget-lg__table">
				<tr className="widget-lg__title">
					<th>Custom</th>
					<th>Data</th>
					<th>Amount</th>
					<th>Status</th>
				</tr>

				<tr className="widget-lg__item">
					<td className="widget-lg__user">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
						<span>Hai Ho ThikPro</span>
					</td>
					<td>2 Jun 2021</td>
					<td>$122.00</td>
					<td className="widget-lg__status">
						<Button type="Declined" />
					</td>
				</tr>

				<tr className="widget-lg__item">
					<td className="widget-lg__user">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
						<span>Hai Ho ThikPro</span>
					</td>
					<td>2 Jun 2021</td>
					<td>$122.00</td>
					<td className="widget-lg__status">
						<Button type="Pending" />
					</td>
				</tr>

				<tr className="widget-lg__item">
					<td className="widget-lg__user">
						<img
							src="https://lh3.googleusercontent.com/ogw/ADea4I77NRrzbK7xNy7sVcgEb5g__S1_Z8IeO2NEJQWr=s32-c-mo"
							alt=""
						/>
						<span>Hai Ho ThikPro</span>
					</td>
					<td>2 Jun 2021</td>
					<td>$122.00</td>
					<td className="widget-lg__status">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetLg;
