import React from 'react';


var debounceTimeout = null;
class Search extends React.Component {
  intermediateFunction(e) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(this.props.handleSearchInputChange.bind(this, e.target.value), 2000);
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          // value={this.state.value}
          onChange={this.intermediateFunction.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
