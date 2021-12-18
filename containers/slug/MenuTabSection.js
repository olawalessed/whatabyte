

export default function MenuTabSection() {
    return (
      <div className="my-16">
        <div className="flex justify-start items-start px-10 gap-5">
          <div className="flex items-baseline gap-4 w-9/12 pr-20">
            <p className="border-b-2 border-gray-500 py-6 text-left">
              Menu One
            </p>
            <p className="border-b-2 border-gray-500 py-6 text-left">
              Menu Two
            </p>
            <p className="border-b-2 border-gray-500 py-6 text-left">
              Menu Three
            </p>
            <p className="border-b-2 border-gray-500 py-6 text-left">
              Menu Four
            </p>
          </div>
        </div>

        {/* Item Card Group */}
        <div className="my-4">
          <div className="flex-col">
            <h1 className="px-10">Good Calorie Options</h1>
            <div className="flex items-start justify-between">
              <div className="grid grid-cols-4 gap-4 px-10">
                {feely.map((item, i) => (
                  <div key={i} className="border p-5 hover:bg-indigo-600 hover:text-white">
                    <div className="flex-col">
                      <h3>Egg and Bacon Cheese</h3>
                      <p>The best choice for the morning taste. with Baily</p>
                      <p>$11.20</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export const feely = [1,2,3,4,5,6]