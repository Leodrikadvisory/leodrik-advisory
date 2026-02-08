export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-bold mb-6">Leodrik Advisory</h1>
      <p className="text-xl text-gray-300 mb-8">
        Strategy • Consulting • Systems • Growth
      </p>

      <div className="space-x-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
          Get Started
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black">
          Contact
        </button>
      </div>
    </div>
  );
}

