"use client";

import Link from "next/link";
import { NavItem } from "@/types";
import MobileNav from "./mobile-nav";
import { useState } from 'react';

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);

  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden md:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-xl font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav />}
    </div>
  );
}
