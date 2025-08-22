"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "./data";
import Link from "next/link";

const TestimonialCards = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper w-full"
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1 }, // mobile
        640: { slidesPerView: 1.5 }, // small tablets
        768: { slidesPerView: 2 }, // tablets
        1024: { slidesPerView: 3 }, // desktop
      }}
    >
      {testimonialData.map((item) => (
        <SwiperSlide key={item.id}>
          <Card className="p-10 w-auto relative overflow-hidden rounded-none">
            <CardContent>
              <div className="flex flex-col items-center">
                {item.avatar && (
                  <Image
                    src={item.avatar}
                    alt={item.client}
                    width={1000}
                    height={20}
                    priority
                    quality={100}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                )}
                <h1 className="text-3xl font-bold mt-5 font-heading">
                  {item.client}
                </h1>

                <h2 className="text-sm font-bold text-gray-500">
                  {item.role} ({item.company})
                </h2>

                {item.location && (
                  <p className="text-xs text-gray-400">{item.location}</p>
                )}

                {item.rating && (
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={idx < Math.round(item.rating) ? "gold" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={idx < Math.round(item.rating) ? "gold" : "gray"}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.5l2.68 5.43 5.99.87-4.33 4.22 1.02 5.93-5.36-2.82-5.36 2.82 1.02-5.93-4.33-4.22 5.99-.87 2.68-5.43z"
                        />
                      </svg>
                    ))}
                  </div>
                )}

                <p className="text-sm text-center mt-3 text-gray-600 line-clamp-4">
                  {item.comments}
                </p>

                <div className="flex gap-4 mt-4">
                  {item.linkedin && (
                    <Link
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      LinkedIn
                    </Link>
                  )}
                  {item.website && (
                    <Link
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Website
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCards;
