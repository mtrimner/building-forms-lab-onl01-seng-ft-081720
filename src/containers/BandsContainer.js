import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import ShowBands from '../components/ShowBands';


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ShowBands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({bands})

const mapDispatchToProps = dispatch => ({ 
  addBand: band => dispatch({ type : "ADD_BAND", band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
