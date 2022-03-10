export const loginUser = async (email: string, password: string) => {
  const response = await fetch(
    "https://studapi.teachmeskills.by/auth/jwt/create/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const getProfile = async () => {
  const access = localStorage.getItem("access");

  const response = await fetch(
    "https://studapi.teachmeskills.by/auth/users/me/",
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }
  );

  const result = await response.json();

  return result;
};
