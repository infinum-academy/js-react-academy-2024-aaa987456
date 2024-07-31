const api_url = "https://tv-shows.infinum.academy";

export const swrKeys = {
  register: `${api_url}/users`,
  login: `${api_url}/users/sign_in`,
  user: `${api_url}/users/me`,
  ShowsAllApi: `${api_url}/shows`,
  top: `${api_url}/shows/top_rated`,
  selected: (id: string) => `${api_url}/shows/${id}`,
  create: `${api_url}/reviews`,
  delete: (id: string) => `${api_url}/reviews/${id}`,
  getReviews: (id: string) => `${api_url}/shows/${id}/reviews`,
  update: (id: string) => `${api_url}/reviews/${id}`
};
