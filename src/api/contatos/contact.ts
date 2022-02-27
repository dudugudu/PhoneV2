/* eslint-disable import/no-anonymous-default-export */
import ApiAxios from "api/axios/providers";
const requestAllContact = async () => {
  const res = await ApiAxios.get("contact", {
    params: { number: "841-795" },
  });
  return res;
};
const get = () => {};

export default { requestAllContact, get };
