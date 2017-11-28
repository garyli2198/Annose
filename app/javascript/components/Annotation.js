import React from "react"
import PropTypes from "prop-types"
import axios from 'axios';

class Annotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: ''
    };
  }

  setAuthor(response) {
    console.log(response);
    this.setState({
      author: response.data.name,
    });
  }

  componentDidMount() {
    axios.get('/users/' + String(this.props.annotation.user_id) + '?format=json').then(
      this.setAuthor.bind(this));
  }
  render () {
    
    return (
      <div className="panel callout radius">
        <strong> Quote: </strong>"{this.props.quote}" <br/>
        <strong> Notes: </strong>
        {this.props.annotation.body}<br/>
        By: {this.state.author}
      </div>
    );
  }
}

Annotation.propTypes = {
  annotation: PropTypes.object,
  quote: PropTypes.string,
};
export default Annotation
