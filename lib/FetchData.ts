export const fetchData = async (extension: any) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  const url = "https://api.themoviedb.org/3/movie";

  return fetch(`${url}/${extension}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const fetchById = async (id: string) => {
  const url = "https://api.themoviedb.org/3/movie";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  return fetch(`${url}/${id}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
