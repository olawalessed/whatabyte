import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch () {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-gray-200" : "bg-gray-200"
      } relative inline-flex items-center h-12 w-40 rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <button type="button"
        className={`${
          enabled ? "translate-x-14" : "translate-x-1"
        } inline-block px-5 h-10 transform bg-white rounded-full`}
      >{enabled ? `Delivery` : `Pickup`} </button>
      </Switch>
      </div>
  );
}
