import { useState } from "react";
import { Shell } from "./components/Shell";

export default function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
        <div
          className="text-7xl select-none animate-bounce"
          role="img"
          aria-label="waving hand"
        >
          👋
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
        >
          Hello, World!
        </h1>

        <p
          className="text-lg max-w-md"
          style={{ color: "var(--muted)" }}
        >
          A friendly little app that says hello. Tap the button below and watch the counter go!
        </p>

        <button
          onClick={() => setClicks((c) => c + 1)}
          className="px-8 py-3 text-lg font-semibold text-white transition-transform active:scale-95 hover:opacity-90 cursor-pointer"
          style={{
            background: "var(--accent)",
            borderRadius: "0.75rem",
          }}
        >
          Say Hello! 🎉
        </button>

        {clicks > 0 && (
          <div
            className="px-6 py-4"
            style={{
              background: "var(--panel)",
              borderRadius: "1.25rem",
              border: "1px solid var(--line)",
            }}
          >
            <p className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
              {clicks === 1
                ? "Hello! 🌍"
                : clicks < 5
                ? `${clicks} hellos and counting! 🌍`
                : clicks < 10
                ? `${clicks} hellos! You're on a roll! 🚀`
                : `${clicks} hellos! You're unstoppable! 🔥`}
            </p>
          </div>
        )}
      </div>
    </Shell>
  );
}
