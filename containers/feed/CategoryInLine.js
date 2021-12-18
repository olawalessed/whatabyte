import Image from "next/image"



export default function CategoryInLine() {
    return (
      <div className="my-12 z-0 overflow-hidden">
        <div className="grid grid-cols-12 justify-center items-center gap-1.5 pl-10 pr-20 mx-auto">
          {counter.map((item, i) => {
            return (
              <div key={i} className="flex-col text-center">
                <Image
                  src={item.avatar}
                  width={45} 
                  height={45}
                  layout="intrinsic"
                  // className="bg-gray-500"
                />
                <p className="tracking-tighter text-black whitespace-nowrap font-medium">{item.name}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="my-3">
          <div className="px-28 w-xl h-1 bg-gray-400 filter drop-shadow-sm" />
        </div> */}
      </div>
    );
}


export const counter = [
  {
    name: "Finger Foods",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274538/Test-random/category/2836607_tuy2cb.png",
  },
  {
    name: "Small Chops",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274192/Test-random/category/3075946_wpqkww.png",
  },
  {
    name: "Confectioneries",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274204/Test-random/category/3075951_fv0p32.png",
  },
  {
    name: "Barbecue",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274182/Test-random/category/3075937_igmpsy.png",
  },
  {
    name: "Whole Meal",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274157/Test-random/category/3075931_f3bqkp.png",
  },
  {
    name: "Organic Drinks",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274355/Test-random/category/3076149_bpjfg0.png",
  },
  {
    name: "Cocktail/Mocktails",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274294/Test-random/category/3075980_olnvry.png",
  },
  {
    name: "Fruit Juices",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274318/Test-random/category/3075990_xmv6jv.png",
  },
  {
    name: "Smoothies",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274237/Test-random/category/3075977_gevxjf.png",
  },
  {
    name: "Local Drink",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274216/Test-random/category/3075962_fdawux.png",
  },
  {
    name: "Bakery",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274668/Test-random/category/3076083_wfky8g.png",
  },
  {
    name: "Food Bags",
    avatar:
      "https://res.cloudinary.com/qribcom/image/upload/v1633274722/Test-random/category/3076125_uze6fb.png",
  }
];