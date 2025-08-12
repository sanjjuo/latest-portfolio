import AppButton from "@/components/common/AppButton/AppButton";

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between app-padding">
      <p className="text-app-text w-full text-lg lg:text-xl font-light max-w-sm mt-5 lg:m-0">
        I make designs and develop websites for people and help them to grow
        their business.
      </p>
      <div className="space-y-5 max-w-3xl">
        <h1 className="text-5xl lg:text-7xl capitalize font-bold">
          frontend development & web development
        </h1>
        <div className="flex items-center gap-2">
          <AppButton name="My story" href="" style="normal-btn" />
          <AppButton name="My services" href="" style="services-btn" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
