export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-900 min-h-screen text-gray-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-800 w-full">
        <h1 className="text-5xl font-bold text-gold mb-4">Explore Historical Stock Data</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Analyze past stock performance, simulate investments, and gain insights for smarter decisions.
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="/stock-data"
            className="px-6 py-3 border-2 border-gold text-gold font-bold rounded-md hover:bg-gold hover:text-black transition"
          >
            Stock Lookup
          </a>
          <a
            href="/simulator"
            className="px-6 py-3 bg-gold text-black font-bold rounded-md hover:bg-yellow-600 transition"
          >
            Try the Simulator
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 w-full">
        <h2 className="text-3xl font-bold text-center text-gold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-xl font-bold text-gold">Stock Lookup</h3>
            <p className="text-gray-300 mt-2">
              Search historical stock prices, trends, and insights for smarter investment decisions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-xl font-bold text-gold">Investment Simulator</h3>
            <p className="text-gray-300 mt-2">
              Simulate trades and portfolio performance based on historical market data.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-xl font-bold text-gold">Market Insights</h3>
            <p className="text-gray-300 mt-2">
              Gain AI-generated summaries on stock movements and financial trends.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
