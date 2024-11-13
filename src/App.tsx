import { Leaf, BarChart3, Brain, ArrowRight, Mail, Globe2 } from 'lucide-react';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Ocean Background */}
      <div className="relative bg-gradient-to-b from-green-900 to-green-700">

        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-20">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-400" />
            <span className="text-2xl font-bold text-white">ENVINTEL</span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-white hover:text-green-400 transition-colors">Home</a>
              <a href="/about" className="text-white hover:text-green-400 transition-colors">About</a>
              <a href="/blog" className="text-white hover:text-green-400 transition-colors">Blog</a>
              <a href="/weather-wizard" className="text-white hover:text-green-400 transition-colors">Weather Wizard</a>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <header className="container mx-auto px-6 py-16 md:py-24 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Environmental Intelligence for a 
              <span className="text-green-400"> Sustainable Future</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 leading-relaxed">
              Advanced environmental modeling and consulting services to help organizations make data-driven decisions for a greener tomorrow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-green-50 p-8 rounded-2xl">
              <Brain className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Intelligent Analysis</h3>
              <p className="text-gray-600">Advanced modeling techniques to analyze environmental impact and provide actionable insights.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data-Driven Solutions</h3>
              <p className="text-gray-600">Transform complex environmental data into clear, actionable strategies for your organization.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <Globe2 className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-600">Contributing to global sustainability goals through local environmental intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Make a Difference?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
