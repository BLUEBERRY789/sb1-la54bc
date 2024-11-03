import { useState } from 'react';

export default function OrderSummary() {
  const [orderDetails] = useState({
    items: [
      {
        name: "Fresh Organic Tomatoes",
        quantity: 2,
        price: 4.99,
        farmer: "Green Valley Farm"
      },
      {
        name: "Local Honey",
        quantity: 1,
        price: 12.99,
        farmer: "Sunny Bee Apiaries"
      }
    ],
    subtotal: 22.97,
    shipping: 5.99,
    total: 28.96
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        {orderDetails.items.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <div>
              <p className="font-medium text-gray-900">
                {item.quantity}x {item.name}
              </p>
              <p className="text-gray-500">from {item.farmer}</p>
            </div>
            <span className="font-medium text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${orderDetails.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">${orderDetails.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4">
            <span>Total</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}