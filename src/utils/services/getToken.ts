export const getToken = (): string => {
  const token: string | null = localStorage.getItem('token');
  if (token) return `Bearer ${JSON.parse(token).token}`;
  else return '';
};

export const getAnonymToken = (): string => {
  const token: string | null = localStorage.getItem('Anonymtoken');

  if (token) return `Bearer ${JSON.parse(token).token}`;
  else return '';
};

export const resetAnonymToken = (): void => {
  localStorage.removeItem('Anonymtoken');
};

export const resetToken = (): void => {
  localStorage.removeItem('token');
};
