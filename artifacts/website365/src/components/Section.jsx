import clsx from 'clsx';

const Section = ({ children, className, id, background = 'white' }) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    blue: 'bg-blue-600',
    dark: 'bg-slate-900',
  };

  return (
    <section id={id} className={clsx('py-16 md:py-24', backgrounds[background], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
