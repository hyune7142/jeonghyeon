'use client';

import { useState } from 'react';

import { Menu, X } from 'lucide-react'; // lucide-react 아이콘
import Link from 'next/link';

import ScrollBar from './ScrollBar';
import ThemeToggle from './ThemeToggle';
import { H3 } from './Typography';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="border-border/40 bg-background/80 fixed top-0 left-0 z-50 w-full min-w-[320px] border-b backdrop-blur-md transition-all">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="text-foreground text-xl font-bold tracking-tight">
          <H3>JH</H3>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden items-center gap-8 font-semibold md:flex">
          <a href="#about" className="text-foreground/80 hover:text-foreground text-sm">
            About
          </a>
          <a href="#skill" className="text-foreground/80 hover:text-foreground text-sm">
            Skills
          </a>
          <a href="#project" className="text-foreground/80 hover:text-foreground text-sm">
            Project
          </a>
          <ThemeToggle />
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground flex items-center justify-center rounded-md p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="border-border/40 bg-background/95 absolute top-full left-0 w-full border-t backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4 font-semibold">
            <Link href="#about" onClick={toggleMenu} className="hover:text-primary text-sm">
              About
            </Link>
            <Link href="#skill" onClick={toggleMenu} className="hover:text-primary text-sm">
              Skills
            </Link>
            <Link href="#project" onClick={toggleMenu} className="hover:text-primary text-sm">
              Project
            </Link>
          </nav>
        </div>
      )}
      <ScrollBar />
    </header>
  );
}
