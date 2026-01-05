"use client";
import React from "react";
import { NAV_ITEMS } from "@/lib/Nav_constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };
  return (
    <ul className="flex sm:flex-row sm:flex-row gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-green-400 transition-colors duration-300 ${
              isActive(href) ? "text-gray-400" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
