import { Link } from 'react-router-dom';
import { FaLeaf, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-green-600">
            <FaLeaf className="text-2xl" />
            <span>FarmDirect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-600 hover:text-green-600 font-medium">
              Marketplace
            </Link>
            <Link to="/farmers" className="text-gray-600 hover:text-green-600 font-medium">
              Farmers
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="p-2 text-gray-600 hover:text-green-600">
              <FaShoppingCart className="text-xl" />
            </Link>
            <Link
              to="/signin"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaUser />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}