




import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { BsMap, BsPinMapFill } from 'react-icons/bs';
import LoadingIcons from 'react-loading-icons';
import { Icon } from 'semantic-ui-react';

export default function SearchBox(props) {
  const access_token = process.env.MAPBOX_API_TOKEN;

// history
    const history = useRouter()
    
    
    // ref
    const searchRef = useRef(null);

    
  const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false)
    const [pushId, setPushId] = useState(null)

  useEffect(async () => {
    let controller = new AbortController();
      
      searchRef.current.addEventListener('keyup', async (e) => {
          
          try {
            
          if (searchText.length > 4) {
              setLoading(true);
              setShowResult(true)
            const res = await axios(`${api(searchText)}`, {
              signal: controller.signal,
            });
            if (res.status === 200) {
              // console.log(res);
              setLoading(false);
              setSearchResult(res.data);
            }
            // console.log("Browser is connected with text of", state.search_text )
          }
        } catch (err) {
          console.log(err)
        }
      })

    return () => {
        setShowResult(false)
        return controller.abort();
    };
  }, [searchText]);

  // Mapbox GL endpoint
  const api = (search_text) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=${access_token}`;
  };

    
    // Handle change
  const handleChange = async (e) => {
    setSearchText(e.target.value);
  };
  
  // handle click
  const handleResultClick = (place, id) => {
        console.log(place)
        setSearchText( place.place_name)
        setPushId(id)
      setShowResult(false)
    }
    
    // take user to the map page on click
    const handleSubmit = (place) => {
        console.log(place)
        history.push({
                pathname: '/nearme',
            query: {
                    lat: place.geometry.coordinates[0],
                    lng: place.geometry.coordinates[1],
                    address: place.place_name,
                    id: place.id,
                }
            })
    }
    const { features } = searchResult || "";
    
    console.log(features)
    console.log("current push id", pushId)
    console.log("current search result", searchResult)
    
    
    return (
      <div>
        <div className="flex items-center">
          <div className="flex items-center py-2 relative">
            <input
              type="text"
              value={searchText}
              className="md:py-5 px-14  filter drop-shadow-lg focus:border-b-2 md:w-[500px] focus:outline-none"
              placeholder="Enter your location..."
              onChange={handleChange}
              ref={searchRef}
            />
            <BsPinMapFill name="map marker" className="absolute left-3" />

            {/* Location finder */}
            {showResult && (
              <div className="absolute left-0 top-16 mt-2 md:w-[500px]">
                <div
                  className={`rounded-lg ${
                    showResult ? "bg-white" : null
                  } px-2 py-1 drop-shadow-lg`}
                >
                  {features !== undefined &&
                    features !== null &&
                    features.map((place, index) => (
                      <div key={index} className="w-full my-1">
                        {/* Loading state display */}
                        {loading ? (
                          <div className="my-3">
                            <LoadingIcons.Puff stroke="#003A55" />
                          </div>
                        ) : (
                          <a
                            className="flex items-center py-2 hover:bg-gray-200 text-black"
                            onClick={() => {
                              handleResultClick(place, index);
                            }}
                          >
                            <div className="flex items-center">
                              <BsMap className="w-4 h-4 mr-2" />
                              <p className="text-xl">{place.place_name}</p>
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
          {/* Select delivery option */}
          <div className="px-2 overflow-hidden w-max">
            <select
              name="delivery"
              id="delivery"
              className="px-5 py-5 border-0 appearance-none w-56 font-bold block"
            >
              {options.map((element) => {
                return (
                  <option
                    key={element.key}
                    value={element.value}
                    className="font-bold py-5 space-y-5"
                  >
                    {element.text}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Button */}
          <div className="px-0">
            <button
              type="submit"
              className="px-10 py-5 bg-black text-white"
              onClick={() => handleSubmit(searchResult.features[pushId])}
            >
              Find Dishes
            </button>
          </div>
        </div>
      </div>
    );
}

export const options = [
  { key: 1, text: "Pick Delivery", value: 1, icon: "map marker" },
  { key: 2, text: "Deliver Now", value: 1, icon: "map marker" },
  { key: 3, text: "Schedule for later", value: 2, icon: "map marker" },
];