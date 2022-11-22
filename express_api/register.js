const register = async (username, email, password) => {
  try {
    let res = await fetch("/api/auth/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization:"Bearer "+token
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log("register error", error);
  }
};

export { register };
