import { useEffect, useReducer, useState } from 'react'
import { Icon } from 'semantic-ui-react';
import Layout from '../layout/Layout'


export default function NearMeView() {

    const actionType = {
        INITIAL: 'INITIAL',
        CHANGE: 'CHANGE',
        SCHEDULE: 'SCHEDULE'
    }


    
    const reducer = (state, action) => {
        switch (action.type) {
            case actionType.INITIAL:
                return 'Initial'
            case actionType.CHANGE:
                return 'Change'
            case actionType.SCHEDULE:
                return 'Schedule'
            default:
                state 
        }
    }

    const [modalState, dispatch] = useReducer(reducer, 'Initial')
    
    // const [items, dispatch] = useReducer(reducer, [
    //     {
    //         name: "Lagos",
    //         title: "Delivery Detials",
    //         dispatchType: 'ADD'
    //     }
    // ])
    
    console.log(modalState)
    
    
    const handleInitialModalDispatch = (action) => {
        dispatch({
            type: action.type
        });
    }
    
    
    
    
    
    
    return (
      <div className="items-center mx-auto">
        <div className="w-64 h-32 bg-yellow-100">
          <h1>Welome</h1>
          <button
          className="px-3 py-2 bg-blue-900 text-white w-1/3"
            onClick={() =>
              handleInitialModalDispatch({ type: actionType.INITIAL })
            }
          >
            Intial
          </button>
          <button
          className="px-3 py-2 bg-red-900 text-white w-1/3"
            onClick={() =>
              handleInitialModalDispatch({ type: actionType.CHANGE })
            }
          >
            Change
          </button>
                <button
                    
                    className="px-3 py-2 bg-gray-900 text-white w-1/3"
            onClick={() =>
              handleInitialModalDispatch({ type: actionType.SCHEDULE })
            }
          >
            Schedule
          </button>
            </div>
            {modalState === 'Change' ? <One /> : null}
            {modalState === 'Schedule' ? <Two /> : null}
            {modalState === 'Initial' && null}
      </div>
    );
    
    
}


export const One = () => {
    return (
      <div>
        <h2>Hello One</h2>
      </div>
    );

}


export const Two = () => {
    return (
      <div>
        <h3>Hello Two</h3>
      </div>
    );
}









// const reducer = (state, action) => {
//     switch (action.type) {
//         case actionType.ADD:
//             return [
//               {
//                 name: "Lagos",
//                 title: "Delivery Detials",
//                 dispatchType: actionType.CHANGE,
//               },
//               {
//                 name: "Ibadan",
//                 title: "Groom Foods",
//                 dispatchType: actionType.SUBSCRIBE,
//               },
//             ];        
//         case 'REMOVE':
//             return state
//         case actionType.CHANGE:
//             return [
//               {
//                 name: "Ilorin",
//                 title: "Enter Delivery Location",
//                 dispatchType: actionType.CHANGE,
//               }
//             ];
//         case actionType.SUBSCRIBE:
//             return [
//               {
//                 name: "Time",
//                 title: "Schedule Delivery",
//                 dispatchType: actionType.CHANGE,
//               },
//             ];
//         default:
//             return state
//     }
// }










{
  /* <div> */
}
{
  /* {items.map((item, index) => (
                    <div key={index} className="w-52 h-32 bg-yellow-100">
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                        <button onClick={() => handleInitialModalDispatch({type: item.dispatchType})} className="px-2 py-3 bg-blue-700 text-white w-full">{item.dispatchType}</button>
                    </div>
                ))} */
}
{
  /* </div> */
}
{
  /* <button onClick={() => handleInitialModalDispatch('ADD')} className="border-2 bg-green-500 w-52 py-3 text-white">Update Data</button> */
}