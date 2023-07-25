import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    
    <div id="cont">
        <img className="logo-change" src="assets/images/logo-2.png" width='120' alt="logo" />
        <p style={{color: '#333', fontSize: '16px' }}>Koramangala, Banglore<br />
        Karnataka, INDIA</p>
        {text}
    </div>
              
  );

const GoogleMap = () => {

      const defaultProps = {
        center: {lat: 12.9346661, lng: 77.6229708},
        zoom: 11
      };
      
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD5u8QmAP6DxLCQrbI5QnH9Y4n6xLBV2V0' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
            <AnyReactComponent 
                text={'Koramangala, Banglore'} 
            />
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap
