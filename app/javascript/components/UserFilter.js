import React from "react"
import PropTypes from "prop-types"
class UserFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: this.props.selected,
    }
  }
  clicked(e){
    this.setState({
      selected: !this.state.selected,
    });
    this.props.register(this.props.user);
  }
  render () {
    var styles = {marginBottom: '10px',
                  border: '1px solid #000000'};
    if (this.state.selected) {
      styles = {backgroundColor: '#ccffff',
                    marginBottom: '10px',
                    border: '1px solid #000000'};
    }
    
    return (
      <div>
        <div style={styles} onClick={this.clicked.bind(this)}>
          <span >{this.props.user.name}</span>
        </div>
      </div>
    );
  }
}

UserFilter.propTypes = {
  user: PropTypes.object,
  selected: PropTypes.bool,
  register: PropTypes.func,
};
export default UserFilter
