"use client"

import { useRouter } from 'next/navigation'
import { SafeUser } from '../../types';
import { UserRound, Heart, ShoppingBag } from 'lucide-react'
import { UserDropdown } from './UserDropdown'
interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const NavItems = ({ currentUser }: UserMenuProps) => {
  const router = useRouter()

  const goLogin = () => {
    router.push('/login')
  }

  const goFavorite = () => {
    router.push('/favorite')
  }

  const goCart = () => {
    router.push('/cart')
  }

  return (
    <div className="flex items-center gap-4 md:gap-8">
      {currentUser ? (
        <div className="cursor-pointer">
          <UserDropdown />
        </div>
      ) : (
        <UserRound onClick={goLogin} className="cursor-pointer" />
      )}
      <Heart onClick={goFavorite} className="cursor-pointer" />
      <ShoppingBag onClick={goCart} className="cursor-pointer" />
    </div>
  )
}

export default NavItems
