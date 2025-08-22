import AppButton from "@/components/common/AppButton/AppButton";
import { Separator } from "@/components/ui/separator";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="app-padding">
      <div className="flex items-center justify-between">
        <h1 className="heading-text">what&apos;s new</h1>
        <AppButton name="explore more thoughts" href="" style="blog-btn" />
      </div>
      <Separator
        orientation="horizontal"
        className="w-full h-px bg-app-text my-5"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
