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
          annotations={this.props.annotations}
          currentUser={this.props.currentUser}
          token={this.props.token}/>
      </div>
    );
  }
}

Annotator.propTypes = {
  document: PropTypes.object,
  annotations: PropTypes.array,
  currentUser: PropTypes.object,
  token: PropTypes.string,
};
export default Annotator
