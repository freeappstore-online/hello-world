import { Shell } from "./components/Shell";

export default function App() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Hello World
        </h1>
        <p className="text-lg md:text-xl max-w-md" style={{ color: "var(--muted)" }}>
          Welcome to Hello World — a simple app on FreeAppStore. 👋
        </p>
      </div>
    </Shell>
  );
}
