export const getHeaders = (token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return headers;
};
