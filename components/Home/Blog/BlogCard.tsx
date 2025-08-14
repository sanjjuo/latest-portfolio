import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Timer } from "lucide-react";
import Image from "next/image";
import { blogData } from "./data";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      {blogData.map((item) => (
        <Card
          key={item.id}
          className="bg-transparent shadow-none border-none p-0 transition-transform duration-300 hover:-translate-y-2 cursor-default group"
        >
          <CardContent className="space-y-5 p-0">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                <Link
                  href=""
                  className="text-app-text font-medium text-2xl capitalize font-heading bg-white rounded-full w-24 h-24 flex items-center justify-center transition-all transform ease-in-out duration-200 hover:text-3xl"
                >
                  view
                </Link>
              </div>
              <Image
                src={item?.image}
                fill
                priority
                quality={100}
                alt={item.title.slice(0, 5)}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 transition-all duration-300 group-hover:translate-y-[-4px]">
              <div className="flex items-start justify-between">
                <h1 className="font-heading text-3xl max-w-[500px] min-w-[300px] line-clamp-2 text-app-text">
                  {item.title}
                </h1>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 rounded-full w-auto h-8 text-app-text"
                >
                  <Timer className="w-4 h-4" />
                  <span>{item.timeToRead}</span>
                </Badge>
              </div>

              <div className="flex items-center flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="rounded-full w-auto h-8 text-app-text hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default BlogCard;
