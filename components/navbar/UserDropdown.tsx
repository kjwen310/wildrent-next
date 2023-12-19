import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react';
import { UserRound, User, PackageSearch,  SendToBack, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
 
export function UserDropdown() {
  const router = useRouter()

  const onUserClick = () => {
    router.push('/account')
  }

  const onMyProductClick = () => {
    router.push('/my-product')
  }

  const onMyShipment = () => {
    router.push('/my-shipment')
  }

  const onSignOut = () => {
    signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserRound />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={onMyProductClick} className="cursor-pointer">
          <PackageSearch className="mr-2 h-4 w-4" />
          <span>管理商品</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onMyShipment} className="cursor-pointer">
          <SendToBack className="mr-2 h-4 w-4" />
          <span>管理訂單</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onUserClick} className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>個人資料</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onSignOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>登出</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
