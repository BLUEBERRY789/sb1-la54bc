import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FarmDirect</h3>
            <p className="text-green-200">
              Connecting farmers directly with consumers for fresher produce and better prices.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-green-200 hover:text-white">About Us</a></li>
              <li><a href="/farmers" className="text-green-200 hover:text-white">Our Farmers</a></li>
              <li><a href="/how-it-works" className="text-green-200 hover:text-white">How It Works</a></li>
              <li><a href="/contact" className="text-green-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-green-200">
              <li>Email: info@farmdirect.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Farm Road</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-green-200 hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-green-200 hover:text-white"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; 2024 FarmDirect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}