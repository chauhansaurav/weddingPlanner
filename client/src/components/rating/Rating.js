import React from "react";
import StarRatings from "react-star-ratings";

import {setRating} from '../../service/api.js';

class Rating extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            part:props.part,
            type:props.type
        };
  this.changeRating = (newRating) => {
    const state = {
      rating: newRating,
      part:props.part,
      type:props.type
  };
    let nrating = newRating;
    this.setState({rating:nrating});
    setRating(state);
  };
}

  render() {
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="deeppink"
        starDimension="30px"
        starSpacing="15px"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

export default Rating;