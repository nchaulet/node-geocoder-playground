import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Results from './Results';
import RawResults from './components/RawResults';
import './App.css';
import {geocode} from './api';
import Loader from './components/Loader';

const TABS = {
  RESULTS: 'results',
  RAW: 'raw'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      raw_results: null,
      loading: false,
      tab: TABS.RESULTS
    };
  }
  render() {
    const {results, loading} = this.state;
    return (
      <div className="App container">
        <h1>node-geocoder playground</h1>
        <SearchBar
          submitGeocode={this.submitGeocodeForm.bind(this)}
          loading={loading}
        />

        {loading ? <Loader /> : (results ? this.renderResults() : null)}
      </div>
    );
  }

  renderResults() {
    const {results, raw_results} = this.state;

    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className={this.state.tab === TABS.RESULTS ? "active" : null}>
            <a  onClick={() => this.switchTab(TABS.RESULTS)} role="tab" data-toggle="tab">Results ({results.length})</a>
          </li>
          <li role="presentation" className={this.state.tab === TABS.RAW ? "active" : null}>
            <a onClick={() => this.switchTab(TABS.RAW)} role="tab" data-toggle="tab">Raw Provider results</a>
          </li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active">
            {this.state.tab === TABS.RESULTS ? <Results results={results} /> : <RawResults results={raw_results} />}
          </div>
        </div>
      </div>
    );
  }

  switchTab(tab) {
    this.setState({tab});
  }

  submitGeocodeForm(value, provider) {
    this.setState({loading: true});
    geocode(value, provider)
      .then(res => {
        this.setState({
          loading: false,
          results: res.data,
          raw_results: res.raw,
          tab: TABS.RESULTS
        });
      })
      .catch(() => this.setState({loading: false, results: null}));
  }
}

export default App;
