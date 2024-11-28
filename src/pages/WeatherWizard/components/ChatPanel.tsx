'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatPanel: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello! How can I help you with weather information today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { role: 'user', content: inputMessage }]);
      // Simulated LLM response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { role: 'assistant', content: `I've received your message: "${inputMessage}". How else can I assist you with weather-related queries?` }]);
      }, 1000);
      setInputMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <aside className="h-full border-l bg-gray-100 flex flex-col">
      <div className="p-6 flex flex-col flex-1 overflow-hidden">
        <h2 className="text-xl font-semibold mb-4">Chat with Weather Assistant</h2>
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {chatMessages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-2 max-w-[80%] ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 mr-2"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default ChatPanel;
