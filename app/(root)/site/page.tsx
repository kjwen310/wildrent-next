import { siteList } from '@/staticData'
import Map from "@/components/shared/Map"

export default function Site() {
  return (
    <>
      <div className="text-rose-200 text-2xl">Site</div>
      <Map siteList={siteList} />
    </>
  )
}
