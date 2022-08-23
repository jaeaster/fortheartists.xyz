type ICTABannerProps = {
  title: string;
  description: string;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="text-center flex flex-col p-4 sm:p-12 bg-primary-100 rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <p className="mt-6 text-xl leading-9">{props.description}</p>
    </div>
  </div>
);

export { CTABanner };
