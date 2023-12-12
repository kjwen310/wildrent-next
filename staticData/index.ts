import { CategoryItem } from "@/types";

export const categoryList: CategoryItem[] = [
  {
    title: '登山',
    href: '/aaa',
    imgSrc: '/images/category/mountain_climbing.jpg',
    subCategory: [
      {
        title: "禦寒衣物",
        href: "/ss",
        description:
          "讓你不會冷死",
      },
      {
        title: "登山背包",
        href: "/",
        description:
          "陪你登峰造極",
      },
      {
        title: "上山廚具",
        href: "/",
        description:
          "讓你不會餓死",
      },
      {
        title: "技術裝備",
        href: "/",
        description:
          "讓你爬山更安全",
      },
      {
        title: "帳篷與天幕",
        href: "/",
        description:
          "可以幫你遮風避雨",
      },
      {
        title: "其他",
        href: "/",
        description:
          "找不到的都在這裡",
      },
    ],
  },
  {
    title: '露營',
    href: '/',
    imgSrc: '/images/category/camping.jpg',
    subCategory: [
      {
        title: "帳篷",
        href: "/",
        description:
          "美美的搭帳",
      },
      {
        title: "燈具",
        href: "/",
        description:
          "照亮你的心",
      },
      {
        title: "餐具與廚具",
        href: "/",
        description:
          "讓你不會餓死",
      },
      {
        title: "折疊桌椅",
        href: "/",
        description:
          "好好放鬆",
      },
      {
        title: "雨天道具",
        href: "/",
        description:
          "下雨也不怕",
      },
      {
        title: "其他",
        href: "/",
        description:
          "找不到的都在這裡",
      },
    ],
  },
  {
    title: '溯溪',
    href: '/',
    imgSrc: '/images/category/river_tracing.jpg',
    subCategory: [
      {
        title: "繩索",
        href: "/",
        description:
          "讓你安全回家",
      },
      {
        title: "頭盔及岩械",
        href: "/",
        description:
          "安全冒險",
      },
      {
        title: "浮具",
        href: "/",
        description:
          "悠遊水中",
      },
      {
        title: "廚具",
        href: "/",
        description:
          "不會餓死",
      },
      {
        title: "通訊器材",
        href: "/",
        description:
          "溪谷聯絡必備",
      },
      {
        title: "其他",
        href: "/",
        description:
          "找不到的都在這裡",
      },
    ],
  },
];
