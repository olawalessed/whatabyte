import Image from "next/image";

export default function Features() {
    return (
      <div>
        <div className="w-screen py-5 px-20 overflow-hidden">
          <div className="flex justify-between gap-5">
            {/* Loop through here */}
                    {featureDetails.map((item) => {
                        return (
                          <div key={item.key} className="flex-col">
                            <div>
                              <Image
                                src={item.image}
                                width={313}
                                height={313}
                                layout="intrinsic"
                              />
                            </div>

                            <div>
                              <h3 className="text-3xl font-black">{item.title}</h3>
                            </div>
                            <div>
                              <p className="underline cursor-pointer text-lg">
                                {item.link}
                              </p>
                            </div>
                          </div>
                        );
            })}
                    
                    
          </div>
        </div>
      </div>
    );
}


export const featureDetails = [
  {
    key: 1,
    title: "Feed your co-workers",
    link: "Create an organization account",
    image:
      "https://res.cloudinary.com/qribcom/image/upload/v1632080011/Test-random/cute-astronaut-with-hot-dog.jpg",
  },
  {
    key: 2,
    title: "Your passion to business",
    link: "Register your restaurant",
    image:
      "https://res.cloudinary.com/qribcom/image/upload/v1632080765/Test-random/cooking-man.jpg",
  },
  {
    key: 3,
    title: "Deliver with whatabyte",
    link: "Start delivering food",
    image:
      "https://res.cloudinary.com/qribcom/image/upload/v1632080090/Test-random/delivery-service.jpg",
  },
];