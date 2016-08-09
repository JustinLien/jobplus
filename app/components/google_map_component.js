import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from 'react-google-maps';
import { default as InfoBox } from 'react-google-maps/lib/addons/InfoBox';
import Modal from 'react-modal';
import mapStylesObject from '../constants/google_map_styles.json';


const customStyles = {
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(41, 37, 37, 0.59)'
  },
  content: {
    minWidth: '90vw',
    minHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '8px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '200'
  }
};


export default class GMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      center: {
        lat: 37.745951, 
        lng: -122.439421
      },

      // Dummy Data: Array of objects of markers
      markers: [{
        position: new google.maps.LatLng(37.745, -122.439421),
        showInfo: false,
      }, {
        position: new google.maps.LatLng(37.743, -122.419421),
        showInfo: false,
      }]
    }
  }


  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        return marker === targetMarker ? { marker, showInfo: true } : marker;
      })
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        return marker === targetMarker ? { marker, showInfo: false } : marker;
      })
    });
  }


  // Modal controls:
  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  handleClickOutside(evt) {
    this.closeModal();
  }

  clickAction() {
    this.openModal();
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={ 
          <div id="mapsContainer" onClick={() => this.clickAction()} /> 
        }   
        googleMapElement={
          <GoogleMap 
            defaultZoom={13} 
            defaultCenter={{ lat: 37.745951, lng: -122.439421 }}
            maxZoom={14}
            defaultOptions={{styles: mapStylesObject}}
            scrollwheel={false}
            ref="map" >

            <Modal
              isOpen={this.state.isModalOpen}
              onClose={() => this.closeModal()}
              style={customStyles} >

              <GoogleMapLoader
                containerElement={
                  <div {...this.props} className="GMap_Modal" style={{height: "90vh", width: "90vw"}} />
                }
                googleMapElement={
                  <GoogleMap 
                    defaultZoom={13} 
                    defaultCenter={{ lat: 37.745951, lng: -122.439421 }}
                    maxZoom={14}
                    defaultOptions={{styles: mapStylesObject}}
                    scrollwheel={false}
                    ref="map" >

                    {this.state.markers.map((marker, index) => {
                      const ref = `marker_${index}`;
                      const onClick = () => this.handleMarkerClick(marker);

                      return (
                        <Marker
                          key={index}
                          ref={ref}
                          position={marker.position}
                          onClick={onClick} >
                        </Marker>
                      );
                    })}
                  </GoogleMap>
                }
              />

              <i className="fa fa-times-circle XButton" onClick={() => this.closeModal()}></i>
            </Modal>
          </GoogleMap>
        } 
      />
    );
  }
}