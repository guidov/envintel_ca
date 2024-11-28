import { ArrowRight } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About ENVINTEL</h1>
      
      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          ENVINTEL is at the forefront of environmental intelligence, combining cutting-edge technology 
          with environmental expertise to create sustainable solutions for our planet's future.
        </p>

        <div className="bg-green-50 p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To provide organizations with actionable environmental intelligence that drives sustainable 
            decision-making and positive environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Expertise</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Environmental Data Analysis</li>
              <li>Sustainability Consulting</li>
              <li>Climate Impact Assessment</li>
              <li>Green Technology Integration</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Environmental Stewardship</li>
              <li>Scientific Integrity</li>
              <li>Innovation</li>
              <li>Global Responsibility</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Ready to Make an Impact?</h2>
          <p className="mb-6">
            Join us in creating a more sustainable future through data-driven environmental solutions.
          </p>
          <button className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center space-x-2">
            <span>Contact Us Today</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
