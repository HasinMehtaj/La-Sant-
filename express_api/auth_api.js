const login = async (email, password) => {
  try {
    let res = await fetch("/api/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization:"Bearer "+token
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log("login error", error);
  }
};

export { login };
