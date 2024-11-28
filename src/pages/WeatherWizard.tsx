import { useState, useEffect } from 'react';
import { Cloud, Thermometer, Wind, Droplets, Send, Menu, MessageSquare, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useGeolocation } from './WeatherWizard/app/hooks/useGeolocation';
import ChatPanel from './WeatherWizard/components/ChatPanel';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export default function WeatherWizard() {
  const { latitude, longitude, error: geoError } = useGeolocation();
  const [locationString, setLocationString] = useState<string>('');
  const [selectedMenu, setSelectedMenu] = useState('current');
  const [time, setTime] = useState(50);
  const [radius, setRadius] = useState(50);
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [location, setLocation] = useState('');
  interface WeatherData {
    temperature: number;
    conditions: string;
    windSpeed: number;
    humidity: number;
  }

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      if (!apiKey) {
        throw new Error('Weather API key is not configured');
      }
      
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`
      );
      
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      
      const data = await response.json();
      
      setWeatherData({
        temperature: data.current.temp_c,
        conditions: data.current.condition.text,
        windSpeed: data.current.wind_kph,
        humidity: data.current.humidity
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
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

          {loading ? (
            <div className="text-center text-white">
              <p>Loading weather data...</p>
            </div>
          ) : error ? (
            <div className="text-center text-white">
              <p className="text-red-400">{error}</p>
            </div>
          ) : weatherData ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Thermometer className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="text-xl font-bold">{weatherData.temperature}°C</p>
                </div>
                <div className="text-center">
                  <Cloud className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Conditions</p>
                  <p className="text-xl font-bold">{weatherData.conditions}</p>
                </div>
                <div className="text-center">
                  <Wind className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Wind Speed</p>
                  <p className="text-xl font-bold">{weatherData.windSpeed} km/h</p>
                </div>
                <div className="text-center">
                  <Droplets className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Humidity</p>
                  <p className="text-xl font-bold">{weatherData.humidity}%</p>
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
