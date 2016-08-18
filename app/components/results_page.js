import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectJob, fetchYelp, fetchTrains, fetchBus, fetchGyms, fetchParks, scrapDetail } from '../actions/index';
import { bindActionCreators } from 'redux';

import Banner from './banner_component';
import DataDiagram from './diagram_component';
import GMap from './google_map_component';
import JobList from '../containers/job_list_container';
import JobDetail from '../containers/job_detail_container';
import SearchBar from '../containers/search_bar_container';
import Footer from './footer_component';
import RetaurantList from '../containers/restaurant_list_container';
import TransportationList from '../containers/transportation_list_container';
import AmenetiesList from '../containers/ameneties_list_container';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';


export default class Results extends Component {
  constructor(props) {
    super(props);

    this.initJob = this.initJob.bind(this);
    // this.loading = true;
    this.setState({
      loading: true
    });
  }

  componentDidUpdate(nextProps) {
    if (this.props.jobs.length > 0) {
     this.initJob(this.props.jobs[0]);
    }
  }

  initJob(job) {
    let props = this.props;

    props.selectJob(job);
    props.fetchYelp(job.city, job.latitude, job.longitude);
    props.fetchTrains(job.latitude, job.longitude);
    props.fetchBus(job.latitude, job.longitude);
    props.fetchParks(job.latitude, job.longitude);
    props.fetchGyms(job.latitude, job.longitude);
  }

  render() {
    return (
      <div>
        <Banner />        

        <div id="jobMain">
          <div id="jobResultsPane">
            <div>
              <GMap />
            </div>
            <JobList />
          </div>
            
          <div id="jobInfoBody">           
            <JobDetail /> 
            <Tabs onSelect={this.handleSelect} >  
              <TabList>
                <Tab><i className="fa fa-bus" aria-hidden="true"></i> Transportation</Tab>
                <Tab><i className="fa fa-futbol-o" aria-hidden="true"></i> Ameneties</Tab>
                <Tab><i className="fa fa-yelp" aria-hidden="true"></i> Yelp</Tab>
              </TabList>
              <TabPanel>
                <TransportationList />
              </TabPanel>
              <TabPanel>
                <AmenetiesList />
              </TabPanel>
              <TabPanel>
                <RetaurantList />
              </TabPanel>
            </Tabs>
          </div>
        </div>

      </div>
    );
  }
};


let mapStateToProps = (state) => ({ 
  jobs: state.jobs 
});

let mapDispatchToProps = (dispatch) =>  { 
  return bindActionCreators({ 
    selectJob, 
    fetchYelp,
    fetchBus, 
    fetchTrains, 
    fetchParks, 
    fetchGyms,
    scrapDetail
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
