import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Button = ({ children, to, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 text-center px-6 py-3 text-sm font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:   "text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25 focus:ring-blue-500",
    secondary: "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500",
    outline:   "text-blue-600 bg-white border-2 border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 focus:ring-blue-400 shadow-sm",
    ghost:     "text-slate-300 bg-transparent border border-slate-700/50 hover:bg-slate-800/50 hover:text-white hover:border-slate-600 focus:ring-slate-500",
    whatsapp:  "text-green-500 bg-transparent border border-green-500/50 hover:bg-green-500/10 hover:text-green-400 hover:border-green-500 focus:ring-green-500",
    danger:    "text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/25 focus:ring-red-500",
  };

  const styles = clsx(baseStyles, variants[variant] ?? variants.primary, className);

  if (to) {
    if (to.startsWith('http') || to.startsWith('mailto') || to.startsWith('tel')) {
      return (
        <a href={to} className={styles} {...props}>
          {children}
        </a>
      );
    }
    if (to.startsWith('#')) {
      return (
        <a href={to} className={styles} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
