import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShippingForm from './checkout/ShippingForm';
import PaymentForm from './checkout/PaymentForm';
import OrderSummary from './checkout/OrderSummary';

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState(null);

  const handleShippingSubmit = (details) => {
    setShippingDetails(details);
    setStep(2);
  };

  const handlePaymentSubmit = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                  step >= 1 ? 'border-green-600 bg-green-50' : 'border-gray-300'
                }`}>
                  1
                </span>
                <span className="ml-2">Shipping</span>
              </div>
              <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-green-600' : 'bg-gray-300'}`} />
              <div className={`flex items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                  step >= 2 ? 'border-green-600 bg-green-50' : 'border-gray-300'
                }`}>
                  2
                </span>
                <span className="ml-2">Payment</span>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {step === 1 && (
              <ShippingForm onSubmit={handleShippingSubmit} />
            )}
            {step === 2 && (
              <div className="space-y-8">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-900">Shipping Details</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>{shippingDetails.fullName}</p>
                    <p>{shippingDetails.address}</p>
                    <p>{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}</p>
                    <p>{shippingDetails.phone}</p>
                  </div>
                </div>
                <PaymentForm onSubmit={handlePaymentSubmit} />
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="mt-8">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}