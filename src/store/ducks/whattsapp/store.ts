import whattsappTypes from "./types";
const INITIAL_STATE: whattsappTypes = {
  appName: "facebook",
  conversas: [
    {
      chat_id: 1,
      name: "Eduardo Gustavo",
      numeros: "916-112",
      lastMessage: "tetsando",
      isGroup: false,
      typeMessage: "text",
      time: 1643559013349,
      deleted: false,
      visualized: true,
      recived: true,
    },
    {
      chat_id: 2,
      name: "Grupo teste",
      numeros: "916-112",
      lastMessage: "Chipanca gayzao",
      isGroup: true,
      typeMessage: "image",
      time: 1643459013349,
      deleted: false,
      visualized: false,
      recived: true,
    },
  ],
  conversaTemporaria: [],
};

export default INITIAL_STATE;
