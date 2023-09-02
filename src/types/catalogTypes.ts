export type categoryType = {
  name: string;
  id: string | undefined;
  key?: string;
  ancestor?: { id: string; name: string };
};

export type price = {
  value: number;
  currencyCode: string;
  discount: { value: number; id: string } | undefined;
};

type attribute = { name: string; value: string | number };

export type productType = {
  name: string;
  id: string;
  price: price | undefined;
  images: string[] | undefined;
  categories: categoryType[] | undefined;
  atributes: attribute[] | undefined;
};
