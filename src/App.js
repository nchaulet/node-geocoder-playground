import React, { Component } from 'react';
import Form from './Form';
import Results from './Results';
import './App.css';
import {geocode} from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      loading: false
    };
  }
  render() {
    const {results, loading} = this.state;
    return (
      <div className="App container">
        <h1>node-geocoder playground</h1>
        <Form
          submitGeocode={this.submitGeocodeForm.bind(this)}
          loading={loading}
        />
        {results ? <Results results={results} /> : null}
      </div>
    );
  }

  submitGeocodeForm(value, provider) {
    this.setState({loading: true});
    geocode(value, provider)
      .then(res => {
        this.setState({
          loading: false,
          results: res.data
        });
      })
      .catch(() => this.setState({loading: false, results: null}));
  }
}

export default App;
