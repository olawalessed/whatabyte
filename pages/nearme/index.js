import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react'
import { Icon } from 'semantic-ui-react';
import Layout from '../../layout/Layout'
import Geocode from 'react-geocode';
import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import Image from 'next/image';
import snack from "@/public/static/snack.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import HomeFeed from '@/containers/feed/HomeFeed';
import { Map } from 'mapbox-gl';

export default function NearMeView() {

  const query = useRouter()
  console.log(query.query.lat, query.query.lng);
    
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: 400,
    latitude: query.query.lat,
    longitude: query.query.lng,
    zoom: 8,
  });
  const [lat, setLat] = useState( null)
  const [lng, setLng] = useState(null);


  // set Geocode API key
  
  // Use Effect to fetch initial location data from url params
  useEffect(() => {
    document.title = `Near Me | ${query.query.address}`
    let mounted = true;
    Geocode.fromAddress(query.query.address).then(
      (response) => {
        if (mounted) {
          const { lat, lng } = response.results[0].geometry.location;
          setLat(lat);
          setLng(lng);
          setViewport({ ...viewport, latitude: lat, longitude: lng });
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
      }
      );
      return function cleanup() {
        mounted = false;
      };
    }, []);
    
    
  Geocode.setApiKey(process.env.GOOGLE_MAP_API_KEY);
  

  // if (loading) return false;
    
    
    
  return (
    <div className="block w-screen max-h-screen sticky top-0">
      <div className="">
        <ReactMapGL
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          {...viewport}
          onViewportChange={(vp) => setViewport(vp)}
          mapStyle="mapbox://styles/olawalessed/cl1sbnupr000514n3jshwmstf"
        >
          
            <h1>Hello</h1>
          
        </ReactMapGL>
      </div>
      <div className="flex md:p-20 my-20 bg-slate-200">
        <div className="block">
          <HomeFeed />
        </div>
      </div>
    </div>
  );
    
    
}
