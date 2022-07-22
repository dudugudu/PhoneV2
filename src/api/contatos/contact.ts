/* eslint-disable import/no-anonymous-default-export */
import ApiAxios from "api/axios/providers";
const requestAllContact = async () => {
  const res = await ApiAxios.get("contact", {
    params: { permission: "IGS_TI_LVL-2" },
  });
  console.log(res);

  return res;
};
const get = () => {};

export default { requestAllContact, get };
