import { Calendar, DollarSign, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';

const initialSubscriptions = [
  {
    id: 1,
    user: 'Anima Paul',
    plan: 'Premium',
    status: 'active',
    startDate: '2024-02-01',
    nextBilling: '2024-03-01',
    amount: 29.99,
  },
  {
    id: 2,
    user: 'Abhiramy AS',
    plan: 'Basic',
    status: 'expired',
    startDate: '2024-01-01',
    nextBilling: '2024-02-01',
    amount: 19.99,
  },
];

function SubscriptionDetails() {
  const [subscriptions] = useState(initialSubscriptions);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredSubscriptions = selectedStatus === 'all'
    ? subscriptions
    : subscriptions.filter(sub => sub.status === selectedStatus);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscription Details</h2>
        <p className="text-gray-600">Monitor and manage user subscriptions.</p>
      </div>
      
      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-green-600" />
            <h3 className="font-medium">Total Revenue</h3>
          </div>
          <p className="text-2xl font-bold">$2,499.99</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <RefreshCw className="text-blue-600" />
            <h3 className="font-medium">Active Subscriptions</h3>
          </div>
          <p className="text-2xl font-bold">127</p>
          <p className="text-sm text-gray-500">Current period</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="text-purple-600" />
            <h3 className="font-medium">Renewals Due</h3>
          </div>
          <p className="text-2xl font-bold">23</p>
          <p className="text-sm text-gray-500">Next 7 days</p>
        </div>
      </div>
      
      <div className="flex gap-4 mb-6">
        {["all", "active", "expired"].map(status => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-md ${
              selectedStatus === status
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Next Billing</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredSubscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.plan}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    subscription.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {subscription.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.nextBilling}</td>
                <td className="px-6 py-4 whitespace-nowrap">${subscription.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubscriptionDetails;