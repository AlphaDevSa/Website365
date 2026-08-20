import Button from './Button';

const CTASection = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-blue-700 rounded-2xl shadow-2xl overflow-hidden">
      <div className="px-6 py-12 md:p-16 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-blue-100">
            {description}
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
          <Button to={buttonLink} className="px-8 py-4 text-lg bg-white/10 text-white hover:bg-white/20 border-white/20">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
