import React from "react";

const Jumbotron = () => {
	return (
		<div className="p-2 mb-4 bg-body-secondary rounded-3">
			<div className="container-fluid pt-2 pb-5">
				<h1 className="display-2 fw-normal">A Warm Welcome!</h1>
				<p className="col-md-12 fs-4">
				"Lorem ipsum dolor sit amet, consectcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui m id est laborum."
				</p>
				<button className="btn btn-primary btn-lg" type="button">Call to action!</button>
			</div>
		</div>
	)
}
export default Jumbotron;