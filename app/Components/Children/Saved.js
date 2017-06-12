// Include React
import React from "react";
import Helpers from "../../utils/helpers";

class Saved extends React.Component {
  constructor(props) {
  super(props);
}

    getInitialState () {
        return {
            savedResults: this.props.saved
        };
    }
    componentDidMount () {
        this.props.articleRetrieve();
    }
    deleteArticle(article) {
        var promise = new Promise((resolve, reject) => {
            resolve(Helpers.deleteDbArticles(article));
        }).then((res) => {
            this.props.articleRetrieve();
        });
    }
    handleOnclick(event) {
        var i = event.target.value;
        var article = {
            id: this.props.saved[i].articleID
        };
        this.deleteArticle(article);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.saved.map((res, index) => {
                        return (
                            <div key={index} className="row">
                                <div className="col-md-12">
                                    <h3><a target="_blank" href={res.url}>{res.title}</a></h3>
                                    <h4>{res.date}</h4>
                                    <button onClick={this.handleOnclick} className="btn" value={index}>Delete</button>
                                    <hr />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        );
    }
};

export default Saved;
