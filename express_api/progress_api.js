import Cookie from "js-cookie";

const checkTodos = async () => {
  try {
    const token = Cookie.get("token");
    let res = await fetch("/api/progress/updateTodo", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return await res.json();
  } catch (error) {
    console.log("input error", error);
  }
};

export { checkTodos };
