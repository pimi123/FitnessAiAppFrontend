const BASE_URL = "https://yourapi.com"; // Change to your backend URL

async function request(endpoint, method = "GET", body = null, headers = {}) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return await response.json();
}

export const api = {
  login: (email, password) => request("/login", "POST", { email, password }),
  register: (email, password) =>
    request("/register", "POST", { email, password }),
  getUser: () => request("/user", "GET"),
  logout: () => request("/logout", "POST"),
};
