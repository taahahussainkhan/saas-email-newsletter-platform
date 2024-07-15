import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import NavItems from './NavItems';

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white text-black">
        <div>
            <Link href={"/"}>
            <Logo />
            </Link>
            <div>
              <NavItems />
            </div>
        </div>
    </header>
  )
}

export default Header