import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
var mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  handerSearchInputChange: query => (handleSearchChange(query)(dispatch))
});
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
