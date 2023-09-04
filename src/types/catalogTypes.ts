export type categoryType = {
  name: string;
  id: string | undefined;
  key?: string;
  ancestor?: { id: string; name: string };
};

export type childCategoryType = {
  name: string;
  id: string | undefined;
  ancestor: { id: string; name: string };
}[];

export type priceType = {
  value: number;
  currencyCode: string;
  discount: { value: number; id: string } | undefined;
};

type attribute = { name: string; value: string | number };

export type productType = {
  name: string;
  id: string;
  price: priceType | undefined;
  images: string[] | undefined;
  categories: categoryType[] | undefined;
  atributes: attribute[] | undefined;
  key: string | undefined;
};
