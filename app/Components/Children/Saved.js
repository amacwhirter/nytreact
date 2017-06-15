// Include React
import React from "react";

class Saved extends React.Component {

  getInitialState() {
 return {
   saved: []
 };
}

	// Here we describe this component's render method
	render(){
		return(
			<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Saved Articles</h3>
								</div>
								<div className="panel-body">

								</div>
							</div>

						</div>

					</div>
				</div>
		)
	}
}

// Export the component back for use in other files
export default Saved;
