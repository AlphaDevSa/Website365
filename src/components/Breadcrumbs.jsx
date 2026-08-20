import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {item.link ? (
                <Link to={item.link} className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  {item.name}
                </Link>
              ) : (
                <span className="text-sm font-medium text-gray-500">{item.name}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
