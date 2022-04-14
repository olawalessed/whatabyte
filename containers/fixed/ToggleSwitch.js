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
        enabled ? "bg-teal-500" : "bg-cyan-500"
      } relative inline-flex items-center w-[152px] px-1 py-1.5 rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <button type="button"
        className={`${
          enabled ? "translate-x-16 text-teal-700" : "translate-x-1 text-cyan-700"
        } inline-block px-5 py-1.5 transform bg-white rounded-full`}
      >{enabled ? `Delivery` : `Pickup`} </button>
      </Switch>
      </div>
  );
}
