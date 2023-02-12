import axios from "../axios/config";

// export const createOrUpdateUser = async (authtoken) => {

//     const res = await axios.post(`api/create-or-update-user`, {})
//   return await axios.post(
//     `${process.env.REACT_APP_API}/create-or-update-user`,
//     {},
//     {
//       headers: {
//         authtoken,
//       },
//     }
//   );
// };
export const createOrUpdateUser = async (token) => {
  const res = await axios.post(
    `/create-or-update-user`,
    {},
    {
      headers: { authtoken: token },
    }
  );
  return res;
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
