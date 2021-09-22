import Image from "next/image";

export default function Features() {
    return (
      <div>
        <div className="w-screen py-5 px-20 overflow-hidden">
          <h1>Outlets near me</h1>
          <div className="flex justify-between gap-3">
            <div className="w-full h-96 bg-blue-300"></div>
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