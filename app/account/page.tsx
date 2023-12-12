"use client"

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function Account() {
  return (
    <div className="text-rose-200 text-2xl">
      <Button onClick={() => signOut()} className="mt-16">登出</Button>
    </div>
  )
}
