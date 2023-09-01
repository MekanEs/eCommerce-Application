export type categorytype = {
  name: string;
  id: string | undefined;
  ancestor?: { id: string; name: string };
};

export type price = {
  value: number;
  currencyCode: string;
  discount: { value: number; id: string } | undefined;
};

type attribute = { name: string; value: string | number };
export type producttype = {
  name: string;
  id: string;
  price: price | undefined;
  images: string[] | undefined;
  categories: categorytype[] | undefined;
  atributes: attribute[] | undefined;
};
