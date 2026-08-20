import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Button = ({ children, to, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary: "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500",
    outline: "text-blue-400 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 focus:ring-blue-400",
    ghost: "text-slate-300 bg-transparent border-slate-700/50 hover:bg-slate-800/50 hover:text-white hover:border-slate-600 focus:ring-slate-500",
    whatsapp: "text-green-500 bg-transparent border-green-500/50 hover:bg-green-500/10 hover:text-green-400 hover:border-green-500 focus:ring-green-500",
  };

  const styles = clsx(baseStyles, variants[variant], className);

  if (to) {
    if (to.startsWith('http')) {
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
