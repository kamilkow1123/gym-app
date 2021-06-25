import React, { useEffect } from 'react';
// import useResults from '../hooks/useResults';
import { connect } from 'react-redux';
import { logout, loadUser } from '../actions/auth';
import '../style/user.css';

function UserPage({ user, loadUser, logout }) {
	// const addresses = useResults('Address');
	// const trainer1hours = useResults('Trainer1');
	// const trainer2hours = useResults('Trainer2');
	// const shopproducts = useResults('ShopProducts1');

	// useEffect(
	// 	() => {
	// 		loadUser();
	// 	},
	// 	[ user ]
	// );
	// const user = props.user.details;

	// const renderedAddresses = addresses.map((address) => {
	// 	return <div key={address.address_id}>{address.city}</div>;
	// });

	// const renderedTrainer1Hours = trainer1hours.map((record) => {
	// 	return (
	// 		<div key={record.working_start}>
	// 			{record.working_start} {record.working_finish}
	// 		</div>
	// 	);
	// });

	// const renderedTrainer2Hours = trainer2hours.map((record) => {
	// 	return (
	// 		<div key={record.working_start}>
	// 			{record.working_start} {record.working_finish}
	// 		</div>
	// 	);
	// });

	// const renderedShopProducts = shopproducts.map((product) => {
	// 	return (
	// 		<div className="list-item" key={product.product_name}>
	// 			{product.product_name}
	// 		</div>
	// 	);
	// });

	return (
		<div className="userpage">
			<div className="welcome">
				<h2>{/* Welcome, <span>{user.name}</span> */}</h2>
				<button onClick={logout} className="logout-button">
					Logout
				</button>
			</div>
			<div className="products-image" />
			<div className="products">
				<h2>Wanna buy some drugs?</h2>
				{/* <div className="list">{renderedShopProducts}</div> */}
			</div>
			{/* <div className="list">{renderedAddresses}</div>
			<br />
			<div className="list">{renderedTrainer1Hours}</div>
			<br />
			<div className="list">{renderedTrainer2Hours}</div> */}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { user: state.auth.user };
};

export default connect(mapStateToProps, { logout, loadUser })(UserPage);
