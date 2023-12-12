'use client';

import { FC } from 'react';
import { SafeUser } from '../../types';
import Container from '../shared/Container';
import NavHamSlide from './NavHamSlide'
import NavMenu from './NavMenu';
import Logo from './Logo';
import NavItems from './NavItems';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center">
            <NavHamSlide />
            <Logo />
            <NavMenu />
            <NavItems currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar;
