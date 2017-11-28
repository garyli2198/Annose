import React from "react"
import PropTypes from "prop-types"
import Segment from "./segment"
import Annotation from "./annotation"
import Word from "./word"

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
        last[2].push(intervals[i][2][0]);
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
    this.state = {
      selected: null,
      annotating: false,
      words: [],
      num_marks: 0,
      marks: [],
    }
    this.select_handler = this.select_handler.bind(this);
    this.newAnnotationClick = this.newAnnotationClick.bind(this);
    this.registerWord = this.registerWord.bind(this);
    this.registerMark = this.registerMark.bind(this);
    this.clearMarks = this.clearMarks.bind(this);
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
                                  selectCallBack={this.select_handler}/>);
    }
    console.log(this.segments);
  }

  newAnnotationClick(e) {
    this.setState({
      annotating: true,
      num_marks: 0,
    });
  }
  registerWord(word) {
    this.state.words.push(word);
    this.state.marks.push(false);
    console.log(this.state.words);
  }
  registerMark(index) {
    console.log(this.state.words[0]);
    this.state.marks[index] = true;
    if (this.state.num_marks > 0) {
      var i = 0;
      while(!this.state.marks[i]) {
        i = i + 1;
      }
      var e = this.state.marks.length - 1;
      while(!this.state.marks[e]) {
        e = e - 1;
      }
      console.log(i);
      console.log(!this.state.marks[i + 1]);
      for (var k = i; k < e; k++) {
        this.state.words[k+1].setState({
          marked: true,
        });
      }
    }
    this.setState({num_marks: this.state.num_marks + 1});

  }
  clearMarks() {
    for (var i = 0; i < this.state.words.length; i++) {
      this.state.words[i].setState({
        marked: false,
      });
      this.state.marks[i] = false;
    }
  }
  select_handler(segment, select=true) {
    console.log(this.state.selected);
    if (this.state.selected) {
      this.state.selected.setState({
        styles: {backgroundColor: '#ccffff',},
      });
    }
    if (select) {
      this.setState({
        selected: segment,
      });
    } else {
      this.setState({
        selected: null,
      });
    }
  }
  render () {
    var annotations = []
    var space = function(s) { return s.concat(' ') };
    var words = this.props.document.body.split(" ");
    this.words_c = [];
    words = this.props.document.body.split(" ").map(space);
    if (this.state.annotating) {
      for (var i = 0; i < words.length; i++) {
        this.words_c.push(<Word body={words[i]} index={i} marked={false} registerWord={this.registerWord}
                                registerMark={this.registerMark} clearMarks={this.clearMarks}/>);
      }
    }
    if (this.state.selected) {
      for (var i = 0; i < this.state.selected.props.annotations.length; i++) {
        var a = this.state.selected.props.annotations[i];
        var str = words.slice(a.start_index, a.end_index+1).map(space);
        annotations.push(
          <Annotation annotation={a} quote={str}/>)
      }
    }
    
    return (
      <div data-equalizer>
        <div className="large-8 columns white-panel" data-equalizer-watch>
          <center> <h1>{this.props.document.name}</h1> </center>
          <center>
            <font size='4'>{!this.state.annotating && this.segments}</font>
            <font size='4'>{this.state.annotating && this.words_c}</font>

          </center>
        </div>
        <div className="large-4 columns white-panel" data-equalizer-watch>
          <center> <h3>Annotations</h3></center>
          <center>
            <button className="button small" onClick={this.newAnnotationClick}>
              {!this.state.annotating && "New Annotation"}{this.state.annotating && "Cancel"}
            </button>
          </center>
          {!this.state.annotating && annotations}
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
