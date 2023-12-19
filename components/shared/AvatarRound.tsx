"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { UserRound } from 'lucide-react'

type AvatarRoundProp = {
  imageSrc: string;
  alt?: string;
}
 
export default function AvatarRound({ imageSrc, alt }: AvatarRoundProp) {
  return (
    <Avatar>
      <AvatarImage src={imageSrc} alt={alt || ""} />
      <AvatarFallback>
        <UserRound />
      </AvatarFallback>
    </Avatar>
  )
}
