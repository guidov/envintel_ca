'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react'; // Make sure to install lucide-react

const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    // Retrieve the API key from localStorage when the component mounts
    const storedApiKey = localStorage.getItem('openaiApiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleSave = () => {
    // Save the API key to localStorage
    localStorage.setItem('openaiApiKey', apiKey);
    console.log('API key saved');
  };

  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="mb-4">
        <Label htmlFor="api-key">OpenAI API Key</Label>
        <div className="relative">
          <Input
            id="api-key"
            type={showApiKey ? "text" : "password"}
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="mt-1 pr-10"
          />
          <button
            type="button"
            onClick={toggleApiKeyVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showApiKey ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>
      <Button onClick={handleSave} className="mr-2">Save</Button>
      <Link href="/" passHref>
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Settings;
