import { CategoryItem } from "@/types";

export const categoryList: CategoryItem[] = [
  {
    id: '1',
    title: '登山',
    href: '/aaa',
    imgSrc: '/images/category/mountain_climbing.jpg',
    description: "爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚",
    subCategory: [
      {
        id: '101',
        title: "禦寒衣物",
        href: "/ss",
        description:
          "讓你不會冷死",
      },
      {
        id: '102',
        title: "登山背包",
        href: "/",
        description:
          "陪你登峰造極",
      },
      {
        id: '103',
        title: "上山廚具",
        href: "/",
        description:
          "讓你不會餓死",
      },
      {
        id: '104',
        title: "技術裝備",
        href: "/",
        description:
          "讓你爬山更安全",
      },
      {
        id: '105',
        title: "帳篷與天幕",
        href: "/",
        description:
          "可以幫你遮風避雨",
      },
      {
        id: '106',
        title: "其他",
        href: "/",
        description:
          "找不到的都在這裡",
      },
    ],
  },
  {
    id: '2',
    title: '露營',
    href: '/',
    imgSrc: '/images/category/camping.jpg',
    description: "爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚",
    subCategory: [
      {
        id: '201',
        title: "帳篷",
        href: "/",
        description:
          "美美的搭帳",
      },
      {
        id: '202',
        title: "燈具",
        href: "/",
        description:
          "照亮你的心",
      },
      {
        id: '203',
        title: "餐具與廚具",
        href: "/",
        description:
          "讓你不會餓死",
      },
      {
        id: '204',
        title: "折疊桌椅",
        href: "/",
        description:
          "好好放鬆",
      },
      {
        id: '205',
        title: "雨天道具",
        href: "/",
        description:
          "下雨也不怕",
      },
      {
        id: '206',
        title: "其他",
        href: "/",
        description:
          "找不到的都在這裡",
      },
    ],
  },
  {
    id: '3',
    title: '溯溪',
    href: '/',
    imgSrc: '/images/category/river_tracing.jpg',
    description: "爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚爬山好讚",
    subCategory: [
      {
        id: '301',
        title: "繩索",
        href: "/",
        description:
          "讓你安全回家",
      },
      {
        id: '302',
        title: "頭盔及岩械",
        href: "/",
        description:
          "安全冒險",
      },
      {
        id: '303',
        title: "浮具",
        href: "/",
        description:
          "悠遊水中",
      },
      {
        id: '304',
        title: "廚具",
        href: "/",
        description:
          "不會餓死",
      },
      {
        id: '305',
        title: "通訊器材",
        href: "/",
        description:
          "溪谷聯絡必備",
      },
      {
        id: '306',
        title: "其他",
        href: "/",
        description:
          "找不到的都在這裡",
      },
    ],
  },
];

export const siteList = [
  {
    id: '1',
    name: '登山補給站',
    city: "台北市",
    address: '108台北市萬華區和平西路三段70號',
    lat: 25.03622738658002,
    lng: 121.50290585492891,
  },
  {
    id: '2',
    name: '墾趣八德門市',
    city: "台北市",
    address: '104台北市中山區八德路二段330號',
    lat: 25.048436051694644,
    lng: 121.54324627854255,
  },
  {
    id: '3',
    name: '歐都納民生店',
    city: "台北市",
    address: '105台北市松山區民生東路五段88號',
    lat: 25.059522401807218,
    lng: 121.56009305503139,
  },
]

export const productListItems = [
  {
    id: "1",
    name: "超款針織帽",
    point: 20,
    imgSrc: "/images/category/mountain_climbing.jpg",
    classification: 4,
    categoryId: "1",
    subCategoryId: "101",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "歐都納民生店",
      city: "台北市",
    }
  },
  {
    id: "2",
    name: "睡袋",
    point: 30,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "1",
    subCategoryId: "102",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "3",
    name: "鋼杯尋找有緣人",
    point: 10,
    imgSrc: "/images/category/camping.jpg",
    classification: 5,
    categoryId: "1",
    subCategoryId: "102",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "4",
    name: "天幕(可以睡12人)",
    point: 20,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "1",
    subCategoryId: "102",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "5",
    name: "天幕(可以睡12人)",
    point: 20,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "1",
    subCategoryId: "103",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "6",
    name: "超款針織帽",
    point: 20,
    imgSrc: "/images/category/mountain_climbing.jpg",
    classification: 4,
    categoryId: "1",
    subCategoryId: "101",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "歐都納民生店",
      city: "台北市",
    }
  },
  {
    id: "7",
    name: "睡袋",
    point: 30,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "1",
    subCategoryId: "102",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "8",
    name: "鋼杯尋找有緣人",
    point: 10,
    imgSrc: "/images/category/camping.jpg",
    classification: 5,
    categoryId: "1",
    subCategoryId: "102",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台中市",
    }
  },
  {
    id: "9",
    name: "天幕(可以睡12人)",
    point: 20,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "1",
    subCategoryId: "102",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "10",
    name: "天幕(可以睡12人)",
    point: 20,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "1",
    subCategoryId: "103",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台中市",
    }
  },
  {
    id: "11",
    name: "超款針織帽",
    point: 20,
    imgSrc: "/images/category/mountain_climbing.jpg",
    classification: 4,
    categoryId: "2",
    subCategoryId: "201",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "歐都納民生店",
      city: "台北市",
    }
  },
  {
    id: "12",
    name: "睡袋",
    point: 30,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "2",
    subCategoryId: "202",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "13",
    name: "鋼杯尋找有緣人",
    point: 10,
    imgSrc: "/images/category/camping.jpg",
    classification: 5,
    categoryId: "2",
    subCategoryId: "202",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "14",
    name: "天幕(可以睡12人)",
    point: 20,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "2",
    subCategoryId: "202",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
  {
    id: "15",
    name: "天幕(可以睡12人)",
    point: 20,
    imgSrc: "/images/category/camping.jpg",
    classification: 3,
    categoryId: "3",
    subCategoryId: "301",
    description: "我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",
    location: {
      name: "登山補給站",
      city: "台北市",
    }
  },
];
