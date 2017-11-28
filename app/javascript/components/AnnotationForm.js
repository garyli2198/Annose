import React from "react"
import PropTypes from "prop-types"
import axios from 'axios';

class AnnotationForm extends React.Component {
  constructor (props) {
    super(props);
    this.createAnnotation = this.createAnnotation.bind(this);
    this.state = {
      quote: "",
      start: -1,
      end: -1,
      body: "",
    }
    this.props.register(this);
  }
  updateInput(e){
    this.setState({
      body: e.target.value,
    });
  }
  createAnnotation(e) {
    e.preventDefault();
    if (this.state.body.length && this.state.start >= 0  && this.state.end >= 0) {
      console.log(this.props.token);
      axios.post('/annotations', {
        body: this.state.body,
        user_id: this.props.user.id,
        document_id: this.props.document.id,
        start_index: this.state.start,
        end_index: this.state.end,
        authenticity_token: this.props.token,
      });
      var a = {
        body: this.state.body,
        user_id: this.props.user.id,
        document_id: this.props.document.id,
        start_index: this.state.start,
        end_index: this.state.end,
      };
      this.props.handleCreate(a);
    }
  }

  render () {
    return (
      <div className="panel callout radius">
        <strong>Quote:</strong> "{this.state.quote} "<br/>
        <form id='annotation'> <br/>
        <strong>Annotation:</strong>
        <textarea rows="4" cols="50" name="body" placeholder="Enter text here..." 
                  value={this.state.body} onChange={evt => this.updateInput(evt)}></textarea>
          <button className="button tiny" onClick={this.createAnnotation}>Confirm</button>
        </form>
      </div>
    );
  }
}

AnnotationForm.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  quote: PropTypes.string,
  user: PropTypes.object,
  document: PropTypes.object,
  register: PropTypes.func,
  handleCreate: PropTypes.func,
  token: PropTypes.string,
};
export default AnnotationForm
