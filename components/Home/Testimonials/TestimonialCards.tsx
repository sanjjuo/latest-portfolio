import { Card, CardContent } from "@/components/ui/card";
import { testimonialData } from "./data";

const TestimonialCards = () => {
  return (
    <>
      {testimonialData.map((item) => (
        <Card key={item.id} className="w-[450px] p-10 rotate-6">
          <CardContent className="p-0">
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-20">{item.icon}</div>
              <h1 className="text-3xl font-bold capitalize font-heading mt-5">
                {item.client}
              </h1>
              <h2 className="text-sm font-bold capitalize">
                {item.role} ({item.company})
              </h2>
              <p className="text-app-inputBg text-sm text-center mt-3 line-clamp-4">
                {item.comments}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TestimonialCards;
