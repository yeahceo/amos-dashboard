import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import data from './data/amos-data.json';
import './App.css';

function StatCard({ label, value, unit = '', color = 'blue' }) {
  const bgColors = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50'
  };

  const textColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600'
  };

  return (
    <div className={`${bgColors[color]} rounded-lg p-6 border border-gray-200`}>
      <p className="text-sm text-gray-600 mb-2">{label}</p>
      <p className={`text-3xl font-bold ${textColors[color]}`}>
        {value}{unit}
      </p>
    </div>
  );
}

function App() {
  const businessData = [
    { name: 'B2B (Salon Professional)', value: data.business_model.b2b_percentage },
    { name: 'B2C (Direct Consumer)', value: data.business_model.b2c_percentage }
  ];

  const COLORS = ['#3b82f6', '#ef4444'];

  const marketTrendData = [
    { name: 'Skinification', impact: 85 },
    { name: 'K-Beauty Global', impact: 80 },
    { name: 'Professional Market', impact: 90 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AMOS Professional</h1>
          <h2 className="text-xl text-gray-600">Brand Analysis Dashboard 2024-2025</h2>
          <p className="text-sm text-gray-500 mt-2">Korean Professional Haircare Leader | Market Share: #1</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard label="2024 Revenue" value={data.financial.revenue_2024} unit=" 억원" color="blue" />
          <StatCard label="Market Share" value={data.financial.market_share} unit="%" color="green" />
          <StatCard label="Employees" value={data.company.employees} color="purple" />
          <StatCard label="Founded" value={data.company.founded} color="orange" />
        </div>

        {/* Business Model & Market Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Business Model */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Model</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={businessData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {businessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Market Trends */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Trend Impact</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impact" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Products */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.products.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
                <p className="text-sm text-gray-600 mb-3">{product.features}</p>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                  {product.target}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Channels & Competitors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Marketing Channels */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing Channels</h3>
            <div className="space-y-4">
              {data.marketing_channels.map((channel, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold text-gray-900">{channel.channel}</p>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {channel.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitors */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitors Analysis</h3>
            <div className="space-y-4">
              {data.competitors.map((competitor, idx) => (
                <div key={idx} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">{competitor.name}</p>
                    <p className="text-sm text-gray-600">{competitor.category}</p>
                  </div>
                  <p className="text-xs text-gray-600 max-w-xs text-right">
                    {competitor.market_position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Trends Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Market Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.market_trends.map((trend, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{trend.trend}</h4>
                <p className="text-sm text-gray-700 mb-4">{trend.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600">AMOS Strategy</span>
                  <span className="text-xs bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-semibold">
                    {trend.relevance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>AMOS Professional Brand Analysis Dashboard | Data as of 2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;
