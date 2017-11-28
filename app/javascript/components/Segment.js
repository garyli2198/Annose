import React from "react"
import PropTypes from "prop-types"
class Segment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      styles: {backgroundColor: '#ccffff',},
    }
  }
  onClick(e) {
    e.preventDefault();
    if (this.state.styles.backgroundColor == '#ccffff') {
      this.setState({
        styles: {backgroundColor: 'yellow',},
      });
      this.props.selectHandler(this);
    } else {
      this.setState({
        styles: {backgroundColor: '#ccffff',},
      });
    }
    
  }
  render () {
    if (this.props.annotations.length) {
      return (
          <span style={this.state.styles} onClick = {this.onClick.bind(this)}>
            {this.props.segmentString}
          </span>
      );
    }
    return (
      <span>
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
  selectHandler: PropTypes.func,
};
export default Segment
