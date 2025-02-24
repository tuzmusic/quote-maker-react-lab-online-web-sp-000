import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  onRemove={this.props.removeQuote}
                  onUpvote={this.props.upvoteQuote}
                  onDownvote={this.props.downvoteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ quotes: state.quotes }),
  { removeQuote, upvoteQuote, downvoteQuote }
)(Quotes);
