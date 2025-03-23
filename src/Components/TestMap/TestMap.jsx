import { useState } from 'react'
// import './App.css'
import React from 'react';
import {createRoot} from 'react-dom/client';
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const TestMap = () => (
  <APIProvider apiKey="AIzaSyBXhUHBxDJbcQ2jIqirwuHVHMG5ms8bMWo">
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
);

export default TestMap;