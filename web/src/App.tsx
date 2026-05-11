import { useState, useEffect } from "react";
import { Shell } from "./components/Shell";

export default function App() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("helloworld_name") || "";
  });
  const [greeting, setGreeting] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (name) {
      localStorage.setItem("helloworld_name", name);
    }
  }, [name]);

  const handleGreet = () => {
    const target = name.trim() || "World";
    setGreeting(`Hello, ${target}! 👋`);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600);
  };

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <Shell>
      <div className="max-w-lg mx-auto flex flex-col items-center justify-center min-h-[70vh] gap-8">
        {/* Hero */}
        <div className="text-center">
          <div
            className="text-7xl mb-4 transition-transform duration-300"
            style={{ transform: animate ? "scale(1.3) rotate(10deg)" : "scale(1)" }}
          >
            🌍
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
          >
            Hello World
          </h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            {getTimeGreeting()}! Type your name and say hello.
          </p>
        </div>

        {/* Input card */}
        <div
          className="w-full p-6 border"
          style={{
            borderRadius: "1.25rem",
            borderColor: "var(--line)",
            background: "var(--panel)",
          }}
        >
          <label
            className="block text-sm font-semibold mb-2"
            style={{ color: "var(--ink)" }}
          >
            What's your name?
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGreet()}
              placeholder="e.g. Ada"
              className="flex-1 px-4 py-3 border text-base outline-none transition-colors"
              style={{
                borderRadius: "0.75rem",
                borderColor: "var(--line)",
                background: "var(--paper)",
                color: "var(--ink)",
              }}
            />
            <button
              onClick={handleGreet}
              className="px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 active:scale-95 cursor-pointer"
              style={{
                borderRadius: "0.75rem",
                background: "var(--accent)",
              }}
            >
              Say Hi
            </button>
          </div>
        </div>

        {/* Greeting output */}
        {greeting && (
          <div
            className="w-full text-center p-8 border"
            style={{
              borderRadius: "1.25rem",
              borderColor: "var(--line)",
              background: "var(--panel)",
              animation: "fadeIn 0.4s ease-out",
            }}
          >
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
            >
              {greeting}
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              Welcome to FreeAppStore ✨
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Shell>
  );
}
