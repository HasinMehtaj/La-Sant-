import Cookie from "js-cookie";

const bmi = async (mass, height) => {
  try {
    const token = Cookie.get("token");
    let res = await fetch("/api/bmi", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        mass: mass,
        height: height,
      }),
    });
    return await res.json();
  } catch (error) {
    console.log("bmi error", error);
  }
};

const getbmi = async () => {
  try {
    const token = Cookie.get("token");
    let res = await fetch("/api/bmi", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return await res.json();
  } catch (error) {
    console.log("bmi error", error);
  }
};

export { bmi, getbmi };
