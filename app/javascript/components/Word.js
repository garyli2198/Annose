import React from "react"
import PropTypes from "prop-types"
class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'marked': this.props.marked,
    };
    this.props.registerWord(this);
  }
  mark(e){
    this.setState({
      'marked': !this.state.marked,
    });
    if (!this.state.marked) {
      this.props.registerMark(this.props.index);
    } else {
      this.props.clearMarks();
    }
    
    

  }
  render () {
    if (this.state.marked) {
      var styles = {backgroundColor: '#ccffff',};
      return (
        <span style={styles} onClick={this.mark.bind(this)}>{this.props.body}</span>
      );
    }
    return (
      <span onClick={this.mark.bind(this)}>{this.props.body}</span>
    );
  }
}

Word.propTypes = {
  body: PropTypes.string,
  index: PropTypes.number,
  marked: PropTypes.bool,
  registerWord: PropTypes.func,
  registerMark: PropTypes.func,
  clearMarks: PropTypes.func,


};
export default Word
