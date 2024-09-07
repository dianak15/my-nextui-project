import React from 'react';
import { Button, Card } from '@nextui-org/react';

const Features: React.FC = () => {
  return (
    <section id="/buy-guide" className="w-full max-w-6xl px-4 py-12 bg-white border-t border-gray-300">
      <div className="text-center mb-12">
        {/* Title with Tailwind CSS */}
        <h3 className="text-3xl font-bold">Our Features</h3>
        <p className="text-lg text-gray-700 mt-4">
          Discover the benefits of using our service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature Cards */}
        <Card isHoverable className="p-6">
          <h4 className="text-xl font-bold">Consultation</h4>
          <p>
            Schedule a one-on-one consultation to discuss your goals and needs.
          </p>
        </Card>
        <Card isHoverable className="p-6">
          <h4 className="text-xl font-bold">Email Support</h4>
          <p>
            Get timely responses and support via email to address your queries.
          </p>
        </Card>
        <Card isHoverable className="p-6">
          <h4 className="text-xl font-bold">Location</h4>
          <p>
            Find us easily and visit our office for personalized assistance.
          </p>
        </Card>
      </div>

      {/* Pricing Section */}
      <div className="text-center mt-12 mb-12">
        {/* Design-only Button */}
        <Button size="lg" disabled className="bg-gray-300 text-gray-700">
          Price
        </Button>
      </div>
      <div className="flex justify-center">
        <Card isHoverable className="p-6 max-w-xs">
          <h4 className="text-xl font-bold mb-4">Price</h4>
          <p className="text-lg mb-4">$39</p>
          <Button size="lg" color="primary">
            Get Started
          </Button>
        </Card>
      </div>
    </section>
  );
}

export default Features;