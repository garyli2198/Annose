import React from "react"
import PropTypes from "prop-types"
class Segment extends React.Component {
  render () {
    var styles = {
      backgroundColor: '#ccffff',
    };
    if (this.props.annotations.length) {
      return (
          <span style={styles}>
            {this.props.segmentString}
          </span>
      );
    }
    return (
      <span onClick = {this.props.select_handler(this)}>
          {this.props.segmentString}
      </span>
    );
    
  }
}

Segment.propTypes = {
  segmentString: PropTypes.string,
  annotations: PropTypes.array,
  start: PropTypes.number,
  end: PropTypes.number,
  select_handler: PropTypes.func,
};
export default Segment
