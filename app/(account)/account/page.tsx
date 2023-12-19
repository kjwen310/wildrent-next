import getCurrentUser from '@/actions/getCurrentUser';
import AvatarRound from '@/components/shared/AvatarRound';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react'

export default async function Account() {
  const currentUser = await getCurrentUser()

  return (
    <div className="space-y-8 max-w-lg mx-auto">
      <div className="flex justify-center items-center gap-4">
        <AvatarRound imageSrc={currentUser?.image || ""} alt={currentUser?.name || ""} />
        <div className="text-2xl">{currentUser?.name}</div>
      </div>
      <div className="space-y-4">
        <Link href="/my-reservation" className="flex justify-between">
          <span>我預約的商品</span>
          <ArrowUpRight />
        </Link>
        <hr />
        <Link href="/favorite" className="flex justify-between">
          <span>我的收藏商品</span>
          <ArrowUpRight />
        </Link>
        <hr />
        <Link href="/cart" className="flex justify-between">
          <span>我的購物車</span>
          <ArrowUpRight />
        </Link>

        <hr />
        <hr />

        <Link href="/my-product" className="flex justify-between">
          <span>我的商品</span>
          <ArrowUpRight />
        </Link>
        <hr />
        <Link href="/add-product" className="flex justify-between">
          <span>新增商品</span>
          <ArrowUpRight />
        </Link>
        <hr />
        <Link href="/my-shipment" className="flex justify-between">
          <span>我的訂單</span>
          <ArrowUpRight />
        </Link>
      </div>
    </div>
  )
}
