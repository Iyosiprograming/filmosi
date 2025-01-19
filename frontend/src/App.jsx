import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="bg-blue-500 w-full py-4 text-white text-center">
        <h1 className="text-3xl font-bold">Fimosi Movie App</h1>
        <p className="mt-2 text-lg">AI-Powered Movie Recommendations</p>
      </header>
      
      <main className="flex flex-col justify-center items-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Fimosi!</h2>
          <p className="mb-6">Find your next favorite movie with AI-powered recommendations.</p>
          
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Get Movie Recommendations
          </button>
        </div>
      </main>

      <footer className="bg-blue-500 w-full py-4 text-white text-center mt-auto">
        <p>&copy; 2025 Fimosi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
