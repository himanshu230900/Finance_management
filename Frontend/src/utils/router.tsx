import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../modules/home/pages/Home";
import { Protected } from "../modules/auth/components";
import Login from "../modules/auth/pages/login";
import SignUp from "../modules/auth/pages/signUp";
import Dashboard from "../modules/dashboard/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        )
      },
      {
        path: '/dashboard',
        element: (
          <Protected authentication={true}>
            <Dashboard />
          </Protected>
        )
      },
      {
        path: '/transactions',
        element: (
          <Protected authentication={true}>
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Transactions</h1>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-6xl mb-4">🚧</div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-gray-600">Transaction management features will be available here.</p>
                </div>
              </div>
            </div>
          </Protected>
        )
      },
      {
        path: '/goals',
        element: (
          <Protected authentication={true}>
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Financial Goals</h1>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-gray-600">Goal tracking and management features will be available here.</p>
                </div>
              </div>
            </div>
          </Protected>
        )
      },
      {
        path: '/investments',
        element: (
          <Protected authentication={true}>
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Investments</h1>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-gray-600">Investment tracking and portfolio management features will be available here.</p>
                </div>
              </div>
            </div>
          </Protected>
        )
      },
      {
        path: '/profile',
        element: (
          <Protected authentication={true}>
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile Settings</h1>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-gray-600">Profile management features will be available here.</p>
                </div>
              </div>
            </div>
          </Protected>
        )
      },
      {
        path: '/billing',
        element: (
          <Protected authentication={true}>
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Billing & Subscription</h1>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-6xl mb-4">💳</div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
                  <p className="text-gray-600">Billing and subscription management features will be available here.</p>
                </div>
              </div>
            </div>
          </Protected>
        )
      },
      {
        path: '/help',
        element: (
          <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Help & Support</h1>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">❓</div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
                <p className="text-gray-600 mb-6">We're here to help you with any questions or issues.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 border border-gray-200 rounded-xl">
                    <div className="text-3xl mb-4">📧</div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 text-sm">support@fint.com</p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-xl">
                    <div className="text-3xl mb-4">💬</div>
                    <h3 className="font-semibold mb-2">Live Chat</h3>
                    <p className="text-gray-600 text-sm">Available 24/7</p>
                  </div>
                  <div className="p-6 border border-gray-200 rounded-xl">
                    <div className="text-3xl mb-4">📚</div>
                    <h3 className="font-semibold mb-2">Documentation</h3>
                    <p className="text-gray-600 text-sm">Comprehensive guides</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  }
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
