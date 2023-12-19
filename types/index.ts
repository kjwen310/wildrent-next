import { User } from "@prisma/client"; // prisma will create type since pushed

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
  createdAt: string,
  updatedAt: string,
  emailVerified: string | null,
};

export type SubCategoryItem = {
  id: string;
  title: string;
  href: string;
  description: string;
}

export type CategoryItem = {
  id: string;
  title: string;
  href: string;
  imgSrc: string;
  description: string;
  subCategory: SubCategoryItem[];
}

export type SiteItem = {
  id: string;
  name: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
}
