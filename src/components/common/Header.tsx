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
          <a href="#expertise" className="text-foreground/80 hover:text-foreground text-sm">
            핵심역량
          </a>
          <a href="#skill" className="text-foreground/80 hover:text-foreground text-sm">
            기술
          </a>
          <a href="#experience" className="text-foreground/80 hover:text-foreground text-sm">
            경력
          </a>
          <a href="#project" className="text-foreground/80 hover:text-foreground text-sm">
            프로젝트
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
            <Link href="#expertise" onClick={toggleMenu} className="hover:text-primary text-sm">
              핵심역량
            </Link>
            <Link href="#skill" onClick={toggleMenu} className="hover:text-primary text-sm">
              기술
            </Link>
            <Link href="#experience" onClick={toggleMenu} className="hover:text-primary text-sm">
              경력
            </Link>
            <Link href="#project" onClick={toggleMenu} className="hover:text-primary text-sm">
              프로젝트
            </Link>
          </nav>
        </div>
      )}
      <ScrollBar />
    </header>
  );
}
