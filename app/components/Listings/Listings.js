import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchListings} from '../../actions/actions_listings';
class Listings extends Component {
  constructor(props){
    super(props)
    this.props.fetchListings();
  }
  renderListing(listing, index) {
    console.log(this.props.listings);
    return (
      <div key={listing+index}>
        <h1>Details:</h1>
          <div class="descriptionHeader"><h2>Description:</h2></div>
          <div class="description">{listing.details.description}</div>
          <img src={listing.details.img} />
          <div class="priceHeader"><h2>Price:</h2></div>
          <div class="price">{listing.details.price}</div>
      </div>
    )
  }
  render() {
    if (this.props.listings.length < 1) {
      return (<div>Loading...</div>)
    }
    return (
      <div>
        {this.props.listings.map(this.renderListing.bind(this))}
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchListings}, dispatch)
}
function mapStateToProps({listings}) {
  return {listings};
}
export default connect(mapStateToProps, mapDispatchToProps)(Listings)
