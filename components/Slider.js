import { Carousel } from "flowbite-react";
import Image from "next/image";

const Slider = () => {
  const imageUrls = ["1", "2", "3", "4", "5"];
  return (
    <div dir="ltr" className="h-screen w-full">
      <Carousel>
        {imageUrls.map((url) => (
          <img
            className="object-cover object-center"
            src={`/images/${url}.jpg`}
            alt="..."
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
