// // import Cookie from "js-cookie";

// // const updateProfile = async () => {
// //   try {
// //     const token = Cookie.get("token");
// //     let res = await fetch("/api/auth/updateProfile", {
// //       method: "put",
// //       headers: {
// //         Accept: "application/json",
// //         "Content-Type": "application/json",
// //         Authorization: "Bearer " + token,
// //       },
// //     });
// //     return await res.json();
// //   } catch (error) {
// //     console.log("updateProfile", error);
// //   }
// // };

// // export { updateProfile };

// import Cookie from "js-cookie";

// const updateProfile = async () => {
//   try {
//     const token = Cookie.get("token");
//     let res = await fetch("/api/auth/updateProfile/:_id", {
//       method: "put",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//     });
//     return await res.json();
//   } catch (error) {
//     console.log("updateProfile error", error);
//   }
// };

// export { updateProfile };
