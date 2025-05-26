import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.displayName || 'User'}!
          </h1>
          <p className="text-gray-600">Here's your financial overview for today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Balance"
            value="$24,580.50"
            change="+12.5%"
            changeType="positive"
            icon="💰"
          />
          <StatCard
            title="Monthly Income"
            value="$8,500.00"
            change="+5.2%"
            changeType="positive"
            icon="📈"
          />
          <StatCard
            title="Monthly Expenses"
            value="$5,200.00"
            change="-8.1%"
            changeType="negative"
            icon="💸"
          />
          <StatCard
            title="Savings Rate"
            value="38.8%"
            change="+2.3%"
            changeType="positive"
            icon="🎯"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Spending Overview */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Spending Overview</h2>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
              </select>
            </div>
            <SpendingChart />
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <QuickActionButton
                icon="➕"
                title="Add Transaction"
                description="Record a new expense or income"
                color="blue"
              />
              <QuickActionButton
                icon="🎯"
                title="Set Goal"
                description="Create a new financial goal"
                color="green"
              />
              <QuickActionButton
                icon="📊"
                title="View Reports"
                description="Detailed financial analysis"
                color="purple"
              />
              <QuickActionButton
                icon="🔗"
                title="Connect Account"
                description="Link a new bank account"
                color="orange"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
            </div>
            <div className="space-y-4">
              <TransactionItem
                name="Grocery Store"
                category="Food & Dining"
                amount="-$85.50"
                date="Today"
                icon="🛒"
              />
              <TransactionItem
                name="Salary Deposit"
                category="Income"
                amount="+$4,250.00"
                date="Yesterday"
                icon="💼"
              />
              <TransactionItem
                name="Netflix Subscription"
                category="Entertainment"
                amount="-$15.99"
                date="2 days ago"
                icon="📺"
              />
              <TransactionItem
                name="Gas Station"
                category="Transportation"
                amount="-$45.20"
                date="3 days ago"
                icon="⛽"
              />
            </div>
          </div>

          {/* Financial Goals */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Financial Goals</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Manage</button>
            </div>
            <div className="space-y-6">
              <GoalItem
                title="Emergency Fund"
                current={8500}
                target={10000}
                color="blue"
              />
              <GoalItem
                title="Vacation Fund"
                current={2800}
                target={5000}
                color="green"
              />
              <GoalItem
                title="New Car"
                current={12000}
                target={25000}
                color="purple"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// Component interfaces and implementations
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          changeType === 'positive' 
            ? 'text-green-600 bg-green-100' 
            : 'text-red-600 bg-red-100'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

const SpendingChart: React.FC = () => {
  return (
    <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">📊</div>
        <p className="text-gray-600">Interactive spending chart will be here</p>
        <p className="text-sm text-gray-500 mt-2">Integration with charting library needed</p>
      </div>
    </div>
  );
};

interface QuickActionButtonProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: 'hover:bg-blue-50 border-blue-200',
    green: 'hover:bg-green-50 border-green-200',
    purple: 'hover:bg-purple-50 border-purple-200',
    orange: 'hover:bg-orange-50 border-orange-200',
  };

  return (
    <button className={`w-full p-4 border-2 border-gray-200 rounded-xl text-left transition-all duration-200 ${colorClasses[color]}`}>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </button>
  );
};

interface TransactionItemProps {
  name: string;
  category: string;
  amount: string;
  date: string;
  icon: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ name, category, amount, date, icon }) => {
  const isPositive = amount.startsWith('+');
  
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${isPositive ? 'text-green-600' : 'text-gray-800'}`}>
          {amount}
        </p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

interface GoalItemProps {
  title: string;
  current: number;
  target: number;
  color: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, current, target, color }) => {
  const percentage = (current / target) * 100;
  
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <span className="text-sm text-gray-600">
          ${current.toLocaleString()} / ${target.toLocaleString()}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full transition-all duration-300 ${colorClasses[color]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{percentage.toFixed(1)}% complete</p>
    </div>
  );
}; 