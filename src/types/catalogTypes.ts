export type categorytype = { name: string; id: string };
type price = { value: number; currencyCode: string };
export type producttype = {
  name: string;
  id: string;
  prices: price[] | undefined;
  images: string[] | undefined;
};
