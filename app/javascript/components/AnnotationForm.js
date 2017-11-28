import React from "react"
import PropTypes from "prop-types"
class AnnotationForm extends React.Component {
  render () {
    return (
      <div className="panel callout radius">
        <strong>Quote:</strong> {this.props.quote} <br/>
        <form>
          <text_area type="text" name="body"> </text_area>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

AnnotationForm.propTypes = {
  quote: PropTypes.string,
  user: PropTypes.object,
  document: PropTypes.object
};
export default AnnotationForm
