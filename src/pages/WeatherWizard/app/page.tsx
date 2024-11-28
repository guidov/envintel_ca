'use client';

import { useState, useEffect } from 'react';
import { useGeolocation } from './hooks/useGeolocation';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Droplets, Thermometer, Wind, Send, Menu, MessageSquare, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Image from 'next/image'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import Link from 'next/link'
import ChatPanel from '@/components/ChatPanel'

export default function Component() {
  const { latitude, longitude, error } = useGeolocation();
  const [locationString, setLocationString] = useState<string>('');

  useEffect(() => {
    if (latitude && longitude) {
      setLocationString(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
    } else if (error) {
      setLocationString(`Error: ${error}`);
    } else {
      setLocationString('Fetching location...');
    }
  }, [latitude, longitude, error]);

  const [selectedMenu, setSelectedMenu] = useState('current')
  const [time, setTime] = useState(50)
  const [radius, setRadius] = useState(50)
  const [leftPanelOpen, setLeftPanelOpen] = useState(true)
  const [rightPanelOpen, setRightPanelOpen] = useState(true)

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex items-center space-x-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Weather_Wizard-B0u3GgUsztNqvDemxmwiviD3LeehEp.png"
            alt="WeatherWizard Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-white">WeatherWizard</span>
        </div>
      </header>
      <PanelGroup direction="horizontal" className="flex-1">
        {leftPanelOpen && (
          <Panel defaultSize={20} minSize={15}>
            <aside className="h-full border-r bg-gray-100 flex flex-col">
              <div className="p-6 overflow-y-auto flex-1">
                <nav className="space-y-2">
                  <Button
                    variant={selectedMenu === 'current' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedMenu('current')}
                  >
                    Current Conditions
                  </Button>
                  <Button
                    variant={selectedMenu === 'forecast' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedMenu('forecast')}
                  >
                    Long Term Forecast
                  </Button>
                  <Button
                    variant={selectedMenu === 'charts' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedMenu('charts')}
                  >
                    Charts
                  </Button>
                  <Link href="/settings" passHref>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      Settings
                    </Button>
                  </Link>
                </nav>
              </div>
            </aside>
          </Panel>
        )}
        {leftPanelOpen && <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-gray-400 transition-colors" />}
        <Panel minSize={30}>
          <main className="h-full overflow-y-auto p-6">
            <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                  <Thermometer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">72°F</div>
                  <p className="text-xs text-muted-foreground">Feels like 75°F</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                  <Droplets className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65%</div>
                  <p className="text-xs text-muted-foreground">Moderate humidity</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
                  <Wind className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8 mph</div>
                  <p className="text-xs text-muted-foreground">North-East</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Precipitation</CardTitle>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Weather_Wizard-B0u3GgUsztNqvDemxmwiviD3LeehEp.png"
                    alt="Precipitation Icon"
                    width={16}
                    height={16}
                    className="text-muted-foreground"
                  />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">20%</div>
                  <p className="text-xs text-muted-foreground">Chance of rain</p>
                </CardContent>
              </Card>
            </div>
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Location</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{locationString}</div>
              </CardContent>
            </Card>
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="time-slider">Time</Label>
                <Slider
                  id="time-slider"
                  max={100}
                  value={[time]}
                  onValueChange={(value) => setTime(value[0])}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="radius-slider">Location Radius</Label>
                <Slider
                  id="radius-slider"
                  max={100}
                  value={[radius]}
                  onValueChange={(value) => setRadius(value[0])}
                  className="mt-2"
                />
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>{selectedMenu === 'current' ? 'Current Conditions' : selectedMenu === 'forecast' ? 'Long Term Forecast' : 'Weather Charts'}</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMenu === 'current' && (
                  <p>Detailed current weather conditions will be displayed here.</p>
                )}
                {selectedMenu === 'forecast' && (
                  <p>Long term weather forecast information will be shown in this section.</p>
                )}
                {selectedMenu === 'charts' && (
                  <p>Various weather charts and graphs will be presented here.</p>
                )}
              </CardContent>
            </Card>
          </main>
        </Panel>
        {rightPanelOpen && <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-gray-400 transition-colors" />}
        {rightPanelOpen && (
          <Panel defaultSize={20} minSize={15}>
            <ChatPanel />
          </Panel>
        )}
      </PanelGroup>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={() => setLeftPanelOpen(!leftPanelOpen)}
      >
        {leftPanelOpen ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={() => setRightPanelOpen(!rightPanelOpen)}
      >
        {rightPanelOpen ? <ChevronRight className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
      </Button>
    </div>
  )
}
