import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-center mb-6">
              <FaCheckCircle className="text-6xl text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Order!
            </h1>
            
            <p className="text-gray-600 mb-8">
              Your order has been successfully placed. We've sent a confirmation email with your order details.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
              <div className="text-left space-y-2">
                <p><span className="font-medium">Order Number:</span> #12345</p>
                <p><span className="font-medium">Estimated Delivery:</span> 2-3 business days</p>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/marketplace"
                className="block w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/account/orders"
                className="block w-full bg-white text-green-600 py-3 px-4 rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                View Order Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}