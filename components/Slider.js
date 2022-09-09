import { Carousel } from "flowbite-react";
import Image from "next/image";

const Slider = () => {
  return (
    <div dir="ltr" className="h-screen w-full">
      <Carousel>
        <Image
          layout="fill"
          blurDataURL="/images/1.jpg"
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center -translate-x-0 -translate-y-0 "
          src="/images/1.jpg"
          alt="..."
        />
        <Image
          layout="fill"
          blurDataURL="/images/2.jpg"
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center -translate-x-0 -translate-y-0 "
          src="/images/2.jpg"
          alt="..."
        />
        <Image
          layout="fill"
          blurDataURL="/images/3.jpg"
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center -translate-x-0 -translate-y-0 "
          src="/images/3.jpg"
          alt="..."
        />
        <Image
          layout="fill"
          blurDataURL="/images/4.jpg"
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center -translate-x-0 -translate-y-0 "
          src="/images/4.jpg"
          alt="..."
        />
        <Image
          layout="fill"
          blurDataURL="/images/5.jpg"
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center -translate-x-0 -translate-y-0 "
          src="/images/5.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Slider;
