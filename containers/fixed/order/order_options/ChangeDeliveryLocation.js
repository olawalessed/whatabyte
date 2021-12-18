import axios from "axios";
import { Two } from "pages/nearme";
import { useEffect, useLayoutEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";
import { Icon } from "semantic-ui-react";


// "https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN";


export default function ChangeDeliveryLocation() {

  const access_token = process.env.MAPBOX_API_TOKEN;
  
  
  const [state, setState] = useState({
    search_text: "",
    search_result: [],
    loading: false
  })

  useEffect( async () => {
    let controller = new AbortController()
    try {
      if (state.search_text.length > 4) {
        setState({loading: true})
        const res = await axios(`${api(state.search_text)}`, {
          signal: controller.signal,
        });
        if (res.status === 200) {
          // console.log(res);
          setState({loading: false})
          setState(
            {search_result: res.data}
          );
        }
        // console.log("Browser is connected with text of", state.search_text )
      }
    } catch (err) {
      // console.log(err)
    }
  
    return () => {
      return controller.abort()
    }
  }, [state.search_text])

  // Mapbox GL endpoint
  const api = (search_text) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=${access_token}`;
  }

  const handleChange = async (e) => {
    setState({ search_text: e.target.value })
    // console.log(state.search_text)
    // const res = await axios(`${api(state.search_text)}`)
    // console.table(res)
    // setState({
    //   search_result: {...res.data.features}
    // })
  }

  // console.log("State value should be here", state.search_result)
  const { features } = state.search_result || ""
  
  // console.log(features)
  
  
  // const res = await axios(api,)

  return (
    <div>
      <h4 className="text-4xl py-2">Delivery Details</h4>
      <input
        type="search"
        placeholder="Enter a location"
        name="search"
        className="pt-5 border-b-2 text-xl focus:border-b-2 focus:border-black focus:outline-none w-full placeholder-gray-400"
        value={state.search_text}
        onChange={handleChange}
      />

      <div className="w-full block space-y-3 divide-y divide-gray-300 mt-2">
        {features !== undefined && features !== null ? (
          features.map((place, index) => (
            <div key={index} className="w-full">
              {/* Loading state display */}
              {state.loading ? (
                <div className="my-3">
                  <LoadingIcons.Puff stroke="#A50104" />
                </div>
              ) : (
                <p className="text-lg font-bold text-black font-sans">
                  {place.place_name}
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="my-5 w-full block space-y-2 text-center">
            <Icon name="map outline" size="huge" className="text-gray-400" />
            <p className="text-lg font-bold text-gray-400 font-sans">
              No results yet! Type a location
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
