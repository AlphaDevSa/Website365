import clsx from 'clsx';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({
  title,
  description,
  icon: Icon,
  price,
  billingPeriod = '/mo',
  yearlyPrice,
  features = [],
  ctaText,
  ctaLink,
  ctaTarget,
  ctaOnClick,
  popular,
  className,
  center = false,
  accentColor,
}) => {
  const accent = accentColor || (popular ? 'blue' : 'slate');

  const accentGradients = {
    blue:   'from-blue-500 to-blue-700',
    teal:   'from-teal-400 to-teal-600',
    purple: 'from-purple-500 to-purple-700',
    green:  'from-green-500 to-green-700',
    orange: 'from-orange-400 to-orange-600',
    slate:  'from-slate-400 to-slate-600',
  };

  const btnPopular = {
    bg: 'bg-gradient-to-r from-blue-600 to-blue-700',
    hover: 'hover:from-blue-500 hover:to-blue-600',
    text: 'text-white',
    shadow: 'shadow-lg shadow-blue-500/30',
  };

  const btnDefault = {
    bg: 'bg-white',
    hover: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
    text: 'text-blue-600',
    border: 'border-2 border-blue-200',
    shadow: '',
  };

  const gradient = accentGradients[accent] || accentGradients.slate;
  const btn = popular ? btnPopular : btnDefault;

  const ctaEl = ctaText && (ctaLink || ctaOnClick) && (
    <div className="mt-auto pt-6">
      {ctaLink ? (
        ctaLink.startsWith('http') ? (
          <a
            href={ctaLink}
            target={ctaTarget}
            rel="noreferrer"
            className={clsx(
              'group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200',
              btn.bg, btn.hover, btn.text, btn.shadow, btn.border
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        ) : (
          <Link
            to={ctaLink}
            className={clsx(
              'group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200',
              btn.bg, btn.hover, btn.text, btn.shadow, btn.border
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )
      ) : (
        <button
          type="button"
          onClick={ctaOnClick}
          className={clsx(
            'group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200',
            btn.bg, btn.hover, btn.text, btn.shadow, btn.border
          )}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        'relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300',
        popular
          ? 'bg-white border-2 border-blue-500 shadow-2xl shadow-blue-500/15 scale-[1.02]'
          : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1',
        center ? 'items-center text-center' : '',
        className
      )}
    >
      {/* Gradient top bar */}
      <div className={clsx('h-1.5 w-full bg-gradient-to-r', gradient)} />

      {/* Popular badge */}
      {popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
          Most Popular
        </div>
      )}

      <div className={clsx('flex flex-col flex-1 p-7', center ? 'items-center' : '')}>
        {/* Icon */}
        {Icon && (
          <div className={clsx('w-11 h-11 rounded-xl flex items-center justify-center mb-5',
            popular ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
          )}>
            <Icon className="w-5 h-5" />
          </div>
        )}

        {/* Title + description */}
        <h3 className={clsx('font-extrabold mb-1.5 leading-tight',
          popular ? 'text-blue-900 text-lg' : 'text-gray-900 text-lg'
        )}>
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">{description}</p>
        )}

        {/* Price */}
        {price && (
          <div className={clsx('mb-5', center ? 'w-full text-center' : '')}>
            <div className={clsx('flex', center ? 'flex-col items-center' : 'items-end gap-1')}>
              <span className={clsx(
                'font-black tracking-tight leading-none',
                popular ? 'text-5xl text-blue-700' : 'text-5xl text-gray-900'
              )}>
                {price}
              </span>
              <span className="text-sm font-semibold text-gray-400 mb-1">{billingPeriod}</span>
            </div>
            {yearlyPrice && (
              <p className="text-xs font-semibold text-emerald-600 mt-2 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {yearlyPrice}
              </p>
            )}
          </div>
        )}

        {/* Divider */}
        {features.length > 0 && price && (
          <div className="border-t border-dashed border-gray-200 mb-5" />
        )}

        {/* Features */}
        {features.length > 0 && (
          <ul className={clsx('space-y-2.5 flex-1', center ? 'w-full text-left' : '')}>
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className={clsx(
                  'flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center mt-0.5',
                  popular ? 'text-blue-500' : 'text-emerald-500'
                )}>
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <span className="text-gray-600 text-sm leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {ctaEl}
      </div>
    </div>
  );
};

export default Card;
