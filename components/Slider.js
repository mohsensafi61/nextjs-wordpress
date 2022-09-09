import { Carousel } from "flowbite-react";

const Slider = () => {
  return (
    <div dir="ltr" className="h-screen w-full">
      <Carousel>

        <img className="object-cover" src="/images/1.jpg" alt="..." />
        <img className="object-cover" src="/images/2.jpg" alt="..." />
        <img className="object-cover" src="/images/3.jpg" alt="..." />
        <img className="object-cover" src="/images/4.jpg" alt="..." />
        
      </Carousel>
    </div>
  );
};

export default Slider;
