import Button from './Button';

const Hero = ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink, backgroundImage, align = 'center' }) => {
  return (
    <div className={`relative bg-slate-900 overflow-hidden ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className="absolute inset-0">
        {backgroundImage && (
          <img
            className="w-full h-full object-cover opacity-20"
            src={backgroundImage}
            alt="Abstract background image" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 opacity-90" />
      </div>
      <div className="relative max-w-7xl mx-auto py-16 px-4 lg:py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          {title}
        </h1>
        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className={`mt-10 flex gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {ctaText && ctaLink && (
            <Button to={ctaLink} variant="primary" className="text-lg px-8 py-4">
              {ctaText}
            </Button>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Button to={secondaryCtaLink} variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
