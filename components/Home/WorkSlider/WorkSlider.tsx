"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { workSliderData } from "./data";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-5 app-padding overflow-hidden">
      <h1 className="text-2xl lg:text-base font-bold lg:font-medium font-heading">
        I'm worked with
      </h1>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        className="lg:flex-1"
      >
        <CarouselContent>
          {workSliderData.map((data) => (
            <CarouselItem
              key={data.id}
              className="flex justify-center basis-1/3"
            >
              <Link
                href={data.href}
                className="relative w-40 h-40 hover:scale-105 duration-200 ease-in-out transition transform"
              >
                <Image
                  src={data.image}
                  alt={data.label}
                  fill
                  priority
                  quality={100}
                  className="object-contain rounded-lg w-full h-full"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default WorkSlider;
