import React, { Component } from 'react';
import './Form.css';

const PROVIDERS = [
  'google',
  'openstreetmap',
  'freegeoip',
  'datasciencetoolkit',
  'here',
  'yandex',
  'opendatafrance'
];

class Form extends Component {
  render() {
    const {loading} = this.props;

    return (
      <div className="Form row">
        <form className="col-md-12 form-inline">
          <div className="form-group">
            <label htmlFor="exampleInputName2">Geocoder</label>
            <select className="form-control" ref="provider">
              {PROVIDERS.map(provider => {
                return (<option key={provider} value={provider}>{provider}</option>);
              })}
            </select>
          </div>
        </form>
        <form className="col-md-5 form-inline">
          <div className="form-group">
            <label htmlFor="exampleInputName2">Address</label>
            <input type="text" className="form-control" ref="address" placeholder="address" />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary" onClick={(e) => this.handleSubmitGeocode(e)}>Geocode</button>
        </form>
        <form className="col-md-7 form-inline hidden">
          <div className="form-group">
            <label htmlFor="exampleInputName2">Lat</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="latitude" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Lon</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="longitude" />
          </div>
          <button type="submit" className="btn btn-primary">Reverse geocode</button>
        </form>
      </div>
    );
  }

  handleSubmitGeocode(e) {
    e.preventDefault();
    return this.props.submitGeocode(this.refs.address.value, this.refs.provider.value);
  }
}

export default Form;

