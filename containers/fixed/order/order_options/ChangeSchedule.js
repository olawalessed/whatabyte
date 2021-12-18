


export default function ChangeSchedule() {
    return (
      <div>
        <h2>Order Schedule</h2>
        <div className="w-full my-2">
          <input type="date" className="w-full py-5 outline-none" />
        </div>
        <div className="w-full my-2">
          <input type="time" className="w-full py-5 outline-none" />
        </div>
        <button
          type="button"
          className="w-full px-5 py-6 bg-gray-900 text-white mt-4"
        >
          Schedule
        </button>
        <button
          type="button"
          className="w-full px-5 py-6 bg-gray-200 text-black mt-4"
        >
          Deliver Now
        </button>
      </div>
    );
}
