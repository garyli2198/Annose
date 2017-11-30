import React from "react"
import PropTypes from "prop-types"
import Document from './Document'

class Annotator extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.currentUser);
  }
  render () {
    return (
      <div>
        <Document document={this.props.document} 
          annotations={this.props.annotations}
          currentUser={this.props.currentUser}
          token={this.props.token}
          users={this.props.users}/>
      </div>
    );
  }
}

Annotator.propTypes = {
  document: PropTypes.object,
  annotations: PropTypes.array,
  currentUser: PropTypes.object,
  token: PropTypes.string,
  users: PropTypes.array,
};
export default Annotator
