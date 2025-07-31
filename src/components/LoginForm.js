import React, { useState } from "react";

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Sign Up Data:", formData);
      // Handle sign up logic here
    } else {
      console.log("Sign In Data:", {
        email: formData.email,
        password: formData.password,
      });
      // Handle sign in logic here
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setShowPassword(false);
    setFormData({ name: "", email: "", password: "" });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-xs">
        <div className="glass rounded-2xl shadow-2xl p-4 transform transition-all duration-500 hover:scale-105">
          {/* Logo/Brand */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-blue-600 mb-0.5">Shopper</h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 mb-0.5">
              {isSignUp ? "Join Shopper Today" : "Welcome Back to Shopper"}
            </h2>
            <p className="text-xs text-gray-800 font-medium">
              {isSignUp
                ? "Create your account to start shopping"
                : "Sign in to continue your shopping journey"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Field (Sign Up Only) */}
            {isSignUp && (
              <div className="transform transition-all duration-300">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-gray-900 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div className="transform transition-all duration-300">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-gray-900 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="transform transition-all duration-300">
              <label
                htmlFor="password"
                className="block text-xs font-bold text-gray-900 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-field pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.641 6.641m3.237 3.237L12 12m0 0l2.122 2.122M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password (Sign In Only) */}
            {!isSignUp && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn-primary">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-3 flex items-center">
            <div className="flex-1 border-t border-gray-400"></div>
            <span className="px-3 text-xs text-gray-800 font-semibold">or</span>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-3">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg font-bold text-blue-600">f</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>

          {/* Toggle Link */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-800 font-medium">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={toggleForm}
                className="ml-2 text-blue-600 hover:text-blue-800 font-bold transition-colors duration-300 hover:underline"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-3">
          <p className="text-white/80 text-xs">
            © 2025 Shopper. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
