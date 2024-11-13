import { useState } from 'react';
import { Cloud, Thermometer, Wind, Droplets } from 'lucide-react';

export default function WeatherWizard() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement weather API integration
    console.log('Searching for weather in:', location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Weather Wizard</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                placeholder="Enter location..."
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {weatherData ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Thermometer className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="text-xl font-bold">24°C</p>
                </div>
                <div className="text-center">
                  <Cloud className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Conditions</p>
                  <p className="text-xl font-bold">Cloudy</p>
                </div>
                <div className="text-center">
                  <Wind className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Wind Speed</p>
                  <p className="text-xl font-bold">15 km/h</p>
                </div>
                <div className="text-center">
                  <Droplets className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Humidity</p>
                  <p className="text-xl font-bold">65%</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-white">
              <p>Enter a location to see weather information</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
