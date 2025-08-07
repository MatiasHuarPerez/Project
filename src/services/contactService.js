let contacts = [
  {
    id: "1",
    name: "Messi",
    avatar: "/img/MessiPerfil.png ",
    messages: [
      { text: "Hola, soy Messi", sender: "contact" },
      { text: "¡Hola Pulga querido!", sender: "me" }  
    ],
  },
  {
    id: "2",
    name: "Suárez",
    avatar: "/img/SuarezPerfil.jpg",
    messages: [
      { text: "Qué hacés", sender: "contact" },
      { text: "Todo bien, Pistolero ?", sender: "me" } 
    ],
  },
  {
    id: "3",
    name: "Neymar",
    avatar: "/img/NeymarPerfil.png",
    messages: [
      { text: "Eu mano", sender: "contact" },
      { text: "Fala Ney!", sender: "me" } 
    ],
  },
];


export const getContacts = async () => {
  return contacts;
};


export const getContactById = async (id) => {
  return contacts.find((c) => c.id === id);
};


export const addMessageToContact = async (id, message) => {
  const contact = contacts.find((c) => c.id === id);
  if (contact) {
    contact.messages.push(message);
  }
};

export default {
  getContacts,
  getContactById,
  addMessageToContact,
};
