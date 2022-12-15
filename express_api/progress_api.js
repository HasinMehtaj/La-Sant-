import Cookie from "js-cookie";

const checkTodos = async (plan_id, month, year, todoIndex) => {
  try {
    const token = Cookie.get("token");
    let res = await fetch("/api/progress/updateTodo", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify({ plan_id, month, year, todoIndex }),
    });

    return await res.json();
  } catch (error) {
    console.log("input error", error);
  }
};

export { checkTodos };
