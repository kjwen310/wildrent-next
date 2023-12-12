"use client"

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'
import { SafeUser } from '../../types';
import { UserRound, Store, ShoppingBag } from 'lucide-react'
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const NavItems = ({ currentUser }: UserMenuProps) => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const onGetAccount = () => {
    if (currentUser) {
      router.push('/account')
    } else {
      loginModal.onOpen()
    }
  }

  const onGetSite = () => {
    router.push('/site')
  }

  const onGetCart = () => {
    if (currentUser) {
      router.push('/cart')
    } else {
      registerModal.onOpen()
    }
  }

  return (
    <div className="flex items-center gap-4 md:gap-8">
      <UserRound onClick={onGetAccount} className="cursor-pointer" />
      <Store onClick={onGetSite} className="cursor-pointer" />
      <ShoppingBag onClick={onGetCart} className="cursor-pointer" />
    </div>
  )
}

export default NavItems
