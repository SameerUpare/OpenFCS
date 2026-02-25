"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Overview", href: "/" },
  { label: "Alerts", href: "/alerts" },
  { label: "Cases", href: "/cases" },
  { label: "Customers", href: "/customers" },
  { label: "Rules", href: "/rules" },
  { label: "ML Monitor", href: "/ml" },
  { label: "Admin", href: "/admin" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-slate-900 text-white">
      <nav className="flex flex-col p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-800 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
