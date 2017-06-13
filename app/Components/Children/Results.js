// Include React
import React from "react";
import Helpers from "../../utils/helpers";

class Results extends React.Component {

  saveArticle(url, main){
		this.props.setArticle(url, main);
	}

	// Here we render the component
	render(){
		var that = this;

		return(

			<div className="container">

					<div className="row">

						<div className="col-lg-12">

							<div className="panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Results</h3>
								</div>
								<div className="panel-body">
									{this.props.results.map(function(search, i)
										{
											console.log(search.web_url);
											return <div><span>{i + 1}. </span><a key={i} href={search.web_url}>{search.headline.main}</a> <button className="btn btn-primary" article_url={search.web_url} article_title={search.headline.main} onClick={that.saveArticle.bind(null, search.web_url, search.headline.main)}>Save</button><br /><br /></div>
										})}
								</div>
							</div>

						</div>

					</div>
				</div>
		)
	}
};

export default Results;
