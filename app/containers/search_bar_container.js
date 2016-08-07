import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchJobs } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTerm: '',
      locationTerm: ''
     };

    this.onJobTitleInputChange = this.onJobTitleInputChange.bind(this);
    this.onLocationInputChange = this.onLocationInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onJobTitleInputChange(event) {
    this.setState({jobTerm: event.target.value});
  }

  onLocationInputChange(event) {
    this.setState({locationTerm: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchJobs(this.state.jobTerm, this.state.locationTerm);
    this.setState({ jobTerm: '' });
    this.setState({ locationTerm: '' });
  }

  render() {
    return (
      <form id="searchForm" onSubmit={this.onFormSubmit}>
        <div className="row">
          <div className="six columns">
            <input 
              id="search" 
              className="u-full-width"
              type="search" 
              results="4" 
              autoSave="Developer Jobs" 
              placeholder="Job"
              value={this.state.jobTerm}
              onChange={this.onJobTitleInputChange} />
          </div>
          <div className="six columns">
            <input 
              id="searchLocation"
              className="u-full-width"
              type="search"
              results="4"
              placeholder="City"
              autoSave="San Francisco"
              value={this.state.locationTerm}
              onChange={this.onLocationInputChange} />
          </div>
          <button id="jobSearchSubmitBtn" className="button-primary" type="submit">Submit</button>
        </div>
      </form>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchJobs }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
