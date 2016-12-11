import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form row">
        <form className="col-md-5 form-inline">
          <div className="form-group">
            <label for="exampleInputName2">Address</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="address" />
          </div>
          <button type="submit" className="btn btn-primary">Geocode</button>
        </form>
        <form className="col-md-7 form-inline">
          <div className="form-group">
            <label for="exampleInputName2">Lat</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="latitude" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail2">Lon</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="longitude" />
          </div>
          <button type="submit" className="btn btn-primary">Reverse geocode</button>
        </form>
      </div>
    );
  }
}

export default Form;

