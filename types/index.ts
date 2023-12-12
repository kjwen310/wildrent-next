import { User } from "@prisma/client"; // prisma will create type since pushed

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
  createdAt: string,
  updatedAt: string,
  emailVerified: string | null,
};

export type SubCategoryItem = {
  title: string;
  href: string;
  description: string;
}

export type CategoryItem = {
  title: string;
  href: string;
  imgSrc: string;
  subCategory: SubCategoryItem[];
}
