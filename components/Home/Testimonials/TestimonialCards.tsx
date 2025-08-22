"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { testimonialData } from "./data";
import Star from "@/components/svg/Star";

const TestimonialCards = () => {
  return (
    <>
      {testimonialData.map((item) => (
        <Card
          key={item.id}
          className="p-5 w-auto relative overflow-hidden rounded-lg flex flex-col"
        >
          <CardContent className="flex-1 p-0">
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
                    <Star
                      key={idx}
                      fill={idx < Math.round(item.rating) ? "gold" : "none"}
                      stroke={idx < Math.round(item.rating) ? "gold" : "gray"}
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              )}

              <p className="text-sm text-center mt-3 text-gray-600 line-clamp-4">
                {item.comments}
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-0">
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
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default TestimonialCards;
