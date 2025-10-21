"use client";

import { useEffect, useState } from "react";

export function Race() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 5) % 100);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gray-200 rounded-md overflow-hidden">
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded"
        style={{ left: `${position}%` }}
      >
        Car
      </div>
    </div>
  );
}
