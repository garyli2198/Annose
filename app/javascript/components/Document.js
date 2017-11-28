import React from "react"
import PropTypes from "prop-types"
import Segment from "./segment"

function mergeIntervals(intervals, length)
{
    if (intervals.length <= 0)
      return;
    var stack = [], last;
    intervals.sort(function(a,b) {
      return a[0] - b[0];
    });
    if (intervals[0][0]) {
      stack.push([0, intervals[0][0] - 1, []]);
    }
    stack.push(intervals[0]);
    for (var i = 1, len = intervals.length ; i < len; i++ ) {
      last = stack[stack.length - 1];
      if (last[1] <= intervals[i][0]) {
        stack.push( [last[1] + 1, intervals[i][0] - 1, []]);
        stack.push( intervals[i] );
      }
      else if (last[1] < intervals[i][1]) {
        last[1] = intervals[i][1]; 
        last[2].concat(intervals[i][2]);
        stack.pop();
        stack.push(last);
      }
    }
    last = stack[stack.length - 1];
    if (last[1] < length - 1) {
      stack.push([last[1] + 1, length - 1, []])
    }
    return stack;
}

class Document extends React.Component {
  constructor(props) {
    super(props);
    this.select_handler = this.select_handler.bind(this);
    var segments = [];
    for (var i = 0; i < this.props.annotations.length; i++) {
      var a = this.props.annotations[i];
      segments.push([a.start_index, a.end_index, [a]]);
    }
    var words = this.props.document.body.split(" ");
    segments = mergeIntervals(segments, words.length);
    var space = function(s) { return s.concat(' ') };
    this.segments = [];
    for (var i = 0; i < segments.length; i++) {
      var str = words.slice(segments[i][0], segments[i][1]).map(space);
      this.segments.push(<Segment segmentString={str.join("")} annotations={segments[i][2]}
                                  start={segments[i][0]} end={segments[i][1]}
                                  select_handler={this.select_handler}/>);
    }
    this.state = {
      selected: this.segments[0],
    }

  }
  select_handler(segment) {
    var handler = function(e) {
      e.preventDefault();
      this.setState({
        selected: segment,
      });
    };
    return handler;
  }
  render () {
    return (
      <div>
        <div className="large-9 columns">
          <center> <h1>{this.props.document.name}</h1> </center>
          <center>
            <font size='4'>{this.segments}</font>
          </center>
        </div>
      </div>
    );
  }
}

Document.propTypes = {
  document: PropTypes.object,
  annotations: PropTypes.array
};
export default Document
