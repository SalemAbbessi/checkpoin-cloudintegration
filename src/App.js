import React from 'react';
import './App.css';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { Container, Typography, Link } from '@mui/material';

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      center={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

function App() {
  return (
    <Container>
      <header>
        <Typography variant="h1">Welcome to My Landing Page</Typography>
        <Typography variant="body1">
          This is a simple example of a landing page with a Google Map using React and Material-UI.
        </Typography>
        <div style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center' }}>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%', width: '80%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <Link
          href="https://github.com/your-username/your-landing-page-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </Link>
      </header>
    </Container>
  );
}

export default App;

