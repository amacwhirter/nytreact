// Include React
import React from "react";
import Helpers from "../../utils/helpers";

class Results extends React.Component {
  constructor(props) {
  super(props);
}

    getInitialState(){
        return {
            results: this.props.results
        };
    }
    handleOnClick(event){
        console.log(event.target.value);
        var i = event.target.value;

        var article = {
            id: this.props.results[i].articleID,
            title: this.props.results[i].title,
            url: this.props.results[i].url,
            data: this.props.results[i].date
        };

        console.log(article);
        this.props.articleSave(article);

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {this.props.results.map((res,index)=> {
                            return(
                                <div key={index} className="row">
                                    <div className="col-md-12">
                                        <h3><a target="_blank" href={res.url}>{res.title}</a></h3>
                                        <h4>{res.date}</h4>
                                        <button onClick={this.handleOnClick} className="btn" value={index}>Save</button>
                                        <hr />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default Results;
