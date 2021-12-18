import { useRouter } from "next/router";
import { useState, useReducer } from "react";
import OrderSettingsModal from "./OrderSettingsModal";
import ChangeDeliveryLocation from "./order_options/ChangeDeliveryLocation";
import ChangeSchedule from "./order_options/ChangeSchedule";
import InitialOrderDetails from "./order_options/IntialOrderDetails";


export default function Order(modalState) {
    
  const router = useRouter()

      // set useReducer to switch details of the modal      
          
    return (
      <div>
        
      </div>
    );
}
