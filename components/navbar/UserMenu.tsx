'use client';

import { FC } from 'react';
import { SafeUser } from '../../types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserRound } from 'lucide-react'
import MenuItem from './MenuItem';
import { useState, useCallback } from 'react';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            border-[1px]
            border-neutral-200
            transition
            cursor-pointer
            p-4
            md:py-1
            md:px-2
            hover:shadow-md
          " 
        >
          Menu
          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src={currentUser?.image || undefined} />
              <AvatarFallback><UserRound /></AvatarFallback>
            </Avatar>
          </div>
        </div>

        {isOpen && (
            <div
              className="
                absolute
                w-[40vw]
                top-12
                right-0
                text-sm
                rounded-xl
                shadow-md
                bg-white
                overflow-hidden
                md:w-3/4
              "
            >
              <div className="flex flex-col cursor-pointer">
                {currentUser ? (
                  <>
                    <MenuItem
                      onClick={() => {}}
                      label="My trips"
                    />
                    <MenuItem
                      onClick={() => {}}
                      label="My favorites"
                    />
                    <MenuItem
                      onClick={() => {}}
                      label="My reservations"
                    />
                    <MenuItem
                      onClick={() => {}}
                      label="My properties"
                    />
                    <hr />
                    <MenuItem
                      onClick={() => signOut()}
                      label="Logout"
                    />
                  </>
                ) : (
                  <>
                    <MenuItem
                      onClick={loginModal.onOpen}
                      label="Login"
                    />
                    <MenuItem
                      onClick={registerModal.onOpen}
                      label="Sign up"
                    />
                  </>
                )}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default UserMenu;
