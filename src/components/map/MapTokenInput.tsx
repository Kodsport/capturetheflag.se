
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MapTokenInputProps {
  onTokenSubmit: (token: string) => void;
}

const MapTokenInput: React.FC<MapTokenInputProps> = ({ onTokenSubmit }) => {
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('mapboxToken') as HTMLInputElement;
    
    if (input.value) {
      onTokenSubmit(input.value);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardContent className="pt-6">
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Mapbox Token Required</h3>
            <p className="text-sm text-gray-500">
              To view the interactive map, please enter your Mapbox public token. 
              You can get one for free at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-ctf-teal hover:underline">mapbox.com</a>.
            </p>
            <input
              type="text"
              name="mapboxToken"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your Mapbox public token"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-ctf-blue text-white py-2 rounded-md hover:bg-ctf-blue/90 transition-colors"
          >
            Submit Token
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MapTokenInput;
