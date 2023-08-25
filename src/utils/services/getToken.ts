export const getToken = (): string => {
  const token: string | null = localStorage.getItem('token');
  if (token) return JSON.parse(token).token;
  else return '';
};
