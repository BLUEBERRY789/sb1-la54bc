import { FaLeaf, FaHandshake, FaTruck } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Sustainable Farming",
      description: "Supporting eco-friendly farming practices that protect our environment for future generations."
    },
    {
      icon: <FaHandshake className="text-4xl text-green-600" />,
      title: "Fair Partnerships",
      description: "Building lasting relationships with farmers based on trust, respect, and fair compensation."
    },
    {
      icon: <FaTruck className="text-4xl text-green-600" />,
      title: "Local Distribution",
      description: "Minimizing food miles by connecting you with nearby farmers and producers."
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="object-cover object-center"
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1000"
                  alt="Farmers in field"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  At FarmDirect, we're revolutionizing the way food gets from farm to table. Our platform connects local farmers directly with consumers, eliminating unnecessary middlemen and ensuring both better prices for farmers and fresher produce for customers.
                </p>
                <p className="text-lg">
                  We believe in supporting local agriculture while providing consumers with access to the freshest, highest-quality produce available. Every purchase you make helps sustain local farming communities and promotes sustainable agricultural practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're guided by principles that put farmers and consumers first, ensuring a sustainable and fair food system for everyone.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {value.icon}
                  </div>
                  <dt className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </dt>
                  <dd className="text-base text-gray-600">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}