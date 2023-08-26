export type categorytype = { name: string; id: string };
type price = {
  value: number;
  currencyCode: string;
  discount: { value: number; id: string } | undefined;
};

type attribute = { name: string; value: string };
export type producttype = {
  name: string;
  id: string;
  prices: price[] | undefined;
  images: string[] | undefined;
  categories: categorytype[] | undefined;
  atributes: attribute[] | undefined;
};
