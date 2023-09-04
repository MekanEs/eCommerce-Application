export type queryType = {
  queryArgs: {
    fuzzy: boolean;
    fuzzyLevel?: number;
    filter?: string | string[] | undefined;
    sort?: string | string[] | undefined;
    offset: number;
    limit: number;
    'text.en-US': string | undefined;
    expand?: string;
  };
};
