import clsx from 'clsx';
import Button from './Button';
import { Check } from 'lucide-react';

const Card = ({ title, description, icon: Icon, price, billingPeriod = '/mo', yearlyPrice, features = [], ctaText, ctaLink, ctaTarget, ctaOnClick, popular, className, center = false }) => {
  return (
    <div className={clsx(
      "relative bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full border",
      popular ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-100",
      center ? "items-center text-center" : "",
      className
    )}>
      {popular && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </div>
      )}
      
      {Icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
          <Icon className="w-6 h-6" />
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      {description && <p className="text-gray-500 mb-6">{description}</p>}

      {price && (
        <div className={clsx("mb-6", center && "w-full")}>
          <div className={clsx("flex", center ? "flex-col items-center justify-center" : "items-baseline")}>
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            <span className={clsx("text-base font-medium text-gray-500", center ? "mt-1" : "ml-1")}>{billingPeriod}</span>
          </div>
          {yearlyPrice && (
            <div className="text-sm text-green-600 mt-1 font-medium">
              {yearlyPrice}
            </div>
          )}
        </div>
      )}

      {features.length > 0 && (
        <ul className={clsx("mb-8 space-y-4 flex-1", center ? "w-full text-left" : "")}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {ctaText && (ctaLink || ctaOnClick) && (
        <Button 
          to={ctaLink} 
          target={ctaTarget} 
          onClick={ctaOnClick}
          variant={popular ? 'primary' : 'outline'} 
          className="w-full"
        >
          {ctaText}
        </Button>
      )}
    </div>
  );
};

export default Card;
