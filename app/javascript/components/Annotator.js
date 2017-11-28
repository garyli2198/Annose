import React from "react"
import PropTypes from "prop-types"
import Document from './document'
class Annotator extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Document document={this.props.document} 
          annotations={this.props.annotations}/>
      </div>
    );
  }
}

Annotator.propTypes = {
  document: PropTypes.object,
  annotations: PropTypes.array,
};
export default Annotator
