import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'
import { Icon } from "semantic-ui-react";
import snack from '../../public/static/snack.svg'


  const navControlStyle = {
    right: 10,
    top: 10,
};
  
const geolocateControlStyle = {
  left: 10,
  top: 10
}

export default function Features() {

  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewport, setViewport] = useState({
    width: 1024,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });


  useEffect(() => {
    let mounted = true
    Geocode.fromAddress("Lagos, Nigeria").then(
      (response) => {
        if (mounted) {
          const { lat, lng } = response.results[0].geometry.location;
          setLat(lat)
          setLng(lng)
          setViewport({ ...viewport, latitude: lat, longitude: lng })
          setLoading(false)
        }
      },
      (error) => {
        console.error(error);
      }
    );
    return function cleanup() {
      mounted = false
    }
  }, [])

  Geocode.setApiKey(process.env.GOOGLE_MAP_API_KEY);
  
  if (loading) return false

  
  


    return (
      <div>
        <div className="w-screen py-5 px-20 overflow-hidden">
          <h1>Outlets near me</h1>
          <div className="flex justify-between gap-3">
            <div
            // className="w-full h-96 bg-blue-300"
            >
              {/* Map Space */}
              <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.MAPBOX_API_TOKEN}
                onViewportChange={(vp) => setViewport(vp)}
              >
                 <GeolocateControl
                  style={geolocateControlStyle}
                  positionOptions={{ enableHighAccuracy: true }}
                  trackUserLocation={true}
                  auto
                />
                <Marker latitude={6.55} longitude={3.34}>
                  <Image src={snack} width={30} height={30} />
                </Marker>
                <Marker latitude={6.75} longitude={3.84}>
                  <Image src={snack} width={30} height={30} />
                </Marker>
                <Marker latitude={6.55} longitude={3.75}>
                  <Image src={snack} width={30} height={30} />
                </Marker>
                <NavigationControl style={navControlStyle} />
              </ReactMapGl>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-4 gap-y-2 ">
              {locations.map((location) => (
                <div className="p-3 col-span-1 ">
                  <p className="text-xl text-black font-medium py-2">
                    {location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export const locations =
  [
    "Akwa Ibom",
    "Anambra",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Imo",
    "Kwara",
    "Lagos",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
  ]