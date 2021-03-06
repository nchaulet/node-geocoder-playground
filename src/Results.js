import React, { Component } from 'react';
import JSONTree from 'react-json-tree'

const theme = {
  scheme: 'flat',
  author: 'chris kempson (http://chriskempson.com)',
  base00: '#2C3E50',
  base01: '#34495E',
  base02: '#7F8C8D',
  base03: '#95A5A6',
  base04: '#BDC3C7',
  base05: '#e0e0e0',
  base06: '#f5f5f5',
  base07: '#ECF0F1',
  base08: '#E74C3C',
  base09: '#E67E22',
  base0A: '#F1C40F',
  base0B: '#2ECC71',
  base0C: '#1ABC9C',
  base0D: '#3498DB',
  base0E: '#9B59B6',
  base0F: '#be643c'
};

class Results extends Component {
  render() {
    const {results} = this.props;
    const isEmpty = results.length === 0;

    return (
      <div className="Results container">
        {isEmpty ? (
          <div className="text-center">No results</div>
        ) : null}
        {results.map((result, idx) => {
          return (
            <div key={idx}>
              <JSONTree hideRoot={true} data={result} theme={theme}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Results;

