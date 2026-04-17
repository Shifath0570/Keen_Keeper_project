import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white px-4">
      
      <div className="text-center max-w-xl">
        
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-300 text-sm md:text-base">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/">
            <button className="px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition shadow-lg">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-lg border border-gray-400 hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
    </div>
    );
};

export default ErrorPage;