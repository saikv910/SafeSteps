import { Clock, MessageSquare, TrendingUp, Users } from 'lucide-react';
import React from 'react';

function Analytics() {
  const engagementStats = {
    totalUsers: 1250,
    activeUsers: 890,
    messagesExchanged: 15670,
    avgResponseTime: '1.5m',
  };

  const weeklyActivity = [65, 72, 68, 80, 74, 85, 90];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Analytics Dashboard</h2>
        <p className="text-gray-600">Monitor user engagement and system performance.</p>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-pink-600" />
            <h3 className="font-medium">Total Users</h3>
          </div>
          <p className="text-2xl font-bold">{engagementStats.totalUsers}</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-green-600" />
            <h3 className="font-medium">Active Users</h3>
          </div>
          <p className="text-2xl font-bold">{engagementStats.activeUsers}</p>
          <p className="text-sm text-green-600">71% engagement rate</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="text-purple-600" />
            <h3 className="font-medium">Messages</h3>
          </div>
          <p className="text-2xl font-bold">{engagementStats.messagesExchanged}</p>
          <p className="text-sm text-green-600">+8% from last week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-orange-600" />
            <h3 className="font-medium">Avg Response Time</h3>
          </div>
          <p className="text-2xl font-bold">{engagementStats.avgResponseTime}</p>
          <p className="text-sm text-green-600">-0.5s improvement</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-medium mb-4">Weekly Activity</h3>
        <div className="h-64 flex items-end gap-2">
          {weeklyActivity.map((value, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-pink-600 rounded-t"
                style={{ height: `${value}%` }}
              ></div>
              <span className="text-sm text-gray-600 mt-2">{days[index]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Recent User Feedback</h3>
        <div className="space-y-4">
          {[
            { user: 'Achanya', rating: 5, comment: 'Very helpful for my daily routine!' },
            { user: 'Ashwathy', rating: 4, comment: 'Good advice, but could use more personalization.' },
            { user: 'Sai Krishna', rating: 5, comment: 'The WhatsApp integration is seamless!' },
          ].map((feedback, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{feedback.user}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
