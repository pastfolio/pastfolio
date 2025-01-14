"use client"; // ✅ Ensures this file runs on the client

import { useState } from "react";

export default function StockDataPage() {
  const [symbol, setSymbol] = useState("");
  const [date, setDate] = useState("");
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState("");

  const fetchStockData = async () => {
    if (!symbol || !date) {
      setError("Please enter a stock symbol and date.");
      return;
    }

    setError(""); // Reset previous errors
    setStockData(null); // Clear previous results

    try {
      const response = await fetch(`/api/stock?symbol=${symbol}&date=${date}`);
      const data = await response.json();

      if (response.ok) {
        setStockData(data);
      } else {
        setError(data.error || "Failed to fetch stock data.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Stock Data Lookup</h1>

      {/* Input Fields */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          className="p-2 border rounded-md"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-md"
        />

        <button
          onClick={fetchStockData}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Stock Data Display */}
      {stockData && (
        <div className="mt-6 p-4 border rounded-md shadow-md bg-white w-96">
          <h2 className="text-xl font-semibold">Stock Data for {symbol}</h2>
          <p>
            <strong>Date:</strong> {new Date(stockData.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Open:</strong> {stockData.open}
          </p>
          <p>
            <strong>High:</strong> {stockData.high}
          </p>
          <p>
            <strong>Low:</strong> {stockData.low}
          </p>
          <p>
            <strong>Close:</strong> {stockData.close}
          </p>
          <p>
            <strong>Volume:</strong> {stockData.volume.toLocaleString()}
          </p>
        </div>
      )}
    </main>
  );
}
