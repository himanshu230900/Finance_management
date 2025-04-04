import { useNavigate } from "react-router-dom";

const AuthButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gradient-to-r from-blue-300 to-blue-700 text-white rounded-full font-semibold shadow-md border border-blue-800 w-auto">
      {/* Login Button (Left) */}
      <button
        onClick={() => navigate("/login")}
        className="w-1/2 px-4 py-2 rounded-l-full border-r border-white hover:bg-blue-400 transition-all"
      >
        Login
      </button>

      {/* Sign Up Button (Right) */}
      <button
        onClick={() => navigate("/signup")}
        className=" w-1/2 px-4 py-2 rounded-r-full hover:bg-blue-800 transition-all"
      >
        Signup
      </button>
    </div>
  );
};

export default AuthButton;
