import React, { Component } from 'react';
import ReviewItem from '../reviewItem/reviewItem.js';

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewList: this.props.reviews
    }
  }

  submitReview = (e) => {
    e.preventDefault();

    // grab form variables
    const rating = e.target.elements.rating.value;
    const body = e.target.elements.body.value;
    const author = e.target.elements.author.value;

    const newReview = {
      id: Number(new Date()),
      createDate: new Date(),
      rating,
      body,
      author
    };

    rating && body && author ? this.addReview(newReview) : alert("Invalid Review");
  }

  addReview = (review) => {
    let reviews = this.state.reviewList;
    reviews.push(review);

    this.setState({ reviewList: reviews });
  }

  render() {
    return (
      <div className="ReviewList">
      {
        this.props.reviews.map(
          (review, key) => <ReviewItem key={key} review={review} />
        )
      }

      {/* form for new review */}
      <h5>Submit a Review</h5>
        <form onSubmit={this.submitReview}>
          <div className="form-group">
            <select className="form-control" name="rating">
              <option disabled value="Rate this product!"></option>
              <option value="1">&#9733;</option>
              <option value="2">&#9733;&#9733;</option>
              <option value="3">&#9733;&#9733;&#9733;</option>
              <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
              <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="body" rows="5" placeholder="Write a brief review..."></textarea>
          </div>
          <div className="form-group">
            <input type="input" className="form-control" name="author" placeholder="Name" />
          </div>
          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewList;
