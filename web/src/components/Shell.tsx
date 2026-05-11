import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <>
      {/* Desktop layout */}
      <div className="hidden md:flex h-screen">
        <aside
          className="flex flex-col border-r h-full shrink-0"
          style={{ width: "17rem", borderColor: "var(--line)", background: "var(--panel)" }}
        >
          <div className="p-6 font-bold text-lg" style={{ fontFamily: "Fraunces, serif" }}>
            Hello World
          </div>
          <nav className="flex-1 px-4">
            <div
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium"
              style={{
                color: "var(--accent)",
                background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                borderRadius: "0.75rem",
              }}
            >
              <span>👋</span>
              <span>Home</span>
            </div>
          </nav>
          <div className="p-4 text-xs" style={{ color: "var(--muted)" }}>
            <a
              href="https://freeappstore.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--muted)" }}
            >
              Part of FreeAppStore — free forever
            </a>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col h-screen md:hidden">
        <header
          className="flex items-center px-4 h-14 border-b shrink-0"
          style={{ borderColor: "var(--line)", background: "var(--panel)" }}
        >
          <span className="font-bold" style={{ fontFamily: "Fraunces, serif" }}>
            Hello World
          </span>
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
        <nav
          className="flex items-center justify-around h-16 border-t shrink-0"
          style={{ borderColor: "var(--line)", background: "var(--panel)" }}
        >
          <div className="flex flex-col items-center gap-1" style={{ color: "var(--accent)" }}>
            <span className="text-lg">👋</span>
            <span className="text-[10px] font-medium">Home</span>
          </div>
        </nav>
      </div>
    </>
  );
}
