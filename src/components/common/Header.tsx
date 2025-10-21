'use client';

import { useState } from 'react';

import { Menu, X } from 'lucide-react'; // lucide-react 아이콘
import Link from 'next/link';

import ThemeToggle from './ThemeToggle';
import { H3 } from './Typography';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          <H3>JH</H3>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden items-center gap-8 md:flex font-semibold">
          <a href="#about" className="text-sm  text-foreground/80 hover:text-foreground">
            About
          </a>
          <a href="#work" className="text-sm  text-foreground/80 hover:text-foreground">
            Work
          </a>
          <a href="#project" className="text-sm  text-foreground/80 hover:text-foreground">
            Project
          </a>
          <ThemeToggle />
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center rounded-md p-2 text-foreground"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full border-t border-border/40 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center font-semibold gap-4 py-4">
            <Link href="/about" onClick={toggleMenu} className="text-sm  hover:text-primary">
              About
            </Link>
            <Link href="/work" onClick={toggleMenu} className="text-sm  hover:text-primary">
              Work
            </Link>
            <Link href="/project" onClick={toggleMenu} className="text-sm  hover:text-primary">
              Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
