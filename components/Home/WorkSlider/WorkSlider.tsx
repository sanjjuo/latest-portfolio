"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { workSliderData } from "./data";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <section className="space-y-20">
      <h1 className="app-heading">I'm worked with</h1>
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
      >
        <CarouselContent>
          {workSliderData.map((data) => (
            <CarouselItem
              key={data.id}
              className="flex justify-center basis-1/3"
            >
              <Link
                href=""
                className="relative w-40 h-16 hover:scale-105 duration-200 ease-in-out transition transform"
              >
                <Image
                  src={data.image}
                  alt={data.label}
                  fill
                  className="object-contain rounded-lg"
                  quality={100}
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
