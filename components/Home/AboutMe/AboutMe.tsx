import AppButton from "@/components/common/AppButton/AppButton";

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between app-padding">
      <p className="text-app-text w-full text-lg font-light max-w-lg mt-5 lg:m-0">
        I create stunning designs and build powerful websites that help people
        and businesses stand out online. My work focuses on driving growth by
        making their brands more visible, engaging, and successful.
      </p>
      <div className="space-y-5 max-w-3xl">
        <h1 className="heading-text">frontend development & web development</h1>
        <div className="flex items-center gap-2">
          <AppButton name="My story" href="" style="normal-btn" />
          <AppButton name="My services" href="" style="services-btn" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
