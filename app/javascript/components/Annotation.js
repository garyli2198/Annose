import React from "react"
import PropTypes from "prop-types"
import axios from 'axios';

class Annotation extends React.Component {

  render () {
    return (
      <div className="panel callout radius">
        <strong> Quote: </strong>"{this.props.quote}" <br/>
        <strong> Notes: </strong>
        {this.props.annotation.body}<br/>
        By: {this.props.author.name}
      </div>
    );
  }
}

Annotation.propTypes = {
  annotation: PropTypes.object,
  quote: PropTypes.string,
  author: PropTypes.object
};
export default Annotation
