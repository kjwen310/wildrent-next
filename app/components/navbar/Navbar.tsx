'use client';

import { FC } from 'react';
import Container from '../ui/Container';
import Logo from './Logo';


const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div>
            <Logo />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;
