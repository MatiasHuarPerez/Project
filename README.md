# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

return (
    <div>
        <h1>Mensajes:</h1>
        {
            messages.length > 0
            <button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
        }
        <MessagesList messages= {messages} deleteMessageById= {deleteMessageById} />
        <NewMessageForm addNewMessage={addNewMessage}/>
    </div>
    )
} 

chatscreen


import react from "react"
import MessagesList from "../../Components/MessagesList/MessageList";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";

const messages_servidor = [
    {
        emisor: 'YO',
        hora: '23:10',
        id: 1,
        texto: 'hola',
        status:'visto',
        },            
        {
        emisor: 'OTRO',
        hora: '23:11',
        id: 2,
        texto: 'hola que tal?',
        status:'visto',
        },
        {
        emisor: 'YO',
        hora: '23:12',
        id: 3,
        texto: 'Todo esta bien ?',
        status:'visto',
        }
    ]
    const ChatScreen = () => {
        const [messages, setMessages] = useState (messages_servidor)
    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of messages ){
            if (message.id !== message_id){
                new_message_list.push(message)

            }
        }
    setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
        const new_mesage = {
            emisor:'YO',
            hora:'11:10',
            texto:text,
            status : 'no-visto',
            id:messages.length + 1
        }
        const cloned_messages_list = [...messages]
        cloned_messages_list.push(new_mesage)
        setMessages(cloned_messages_list)
    }
    const deleteAllMessages = ()=> {
        setMessages([])
    }

    
    return (
        <div>
            <h1>Mensajes:</h1>
            {
                messages.length > 0
                &&
                <button onClick = {deleteAllMessages}>Borrar todos los mensajes</button>

            }
        <MessagesList messages={messages} deleteMessageById= {deleteMessageById} />
        <NewMessageForm addNewMessage={addNewMessage}/>      
        
        </div>
    )
}
export default ChatScreen


    <ChatScreen/> sacado de app reemplazado



    anterior codigo js 

    const contacts = [
[    {
        id: 1,
        name: 'pedro',
        description: 'Solo vives una vez , pero no te olvides de mi',
        avatar: '/img/MessiPerfil.png',
        last_connection: '15:23',
        connection_status: 'offline',
        messages: [{
            emisor: 'YO',
            hora: '23:10',
            id: 1,
            texto: 'hola',
            status: 'visto',
        },
        {
            emisor: 'OTRO',
            hora: '23:11',
            id: 2,
            texto: 'hola que tal?',
            status: 'visto',
        },
        {
            emisor: 'YO',
            hora: '23:12',
            id: 3,
            texto: 'Todo esta bien ?',
            status: 'visto',
        }
        ]
    }

        ],
    
{
    id: 2,
        name : 'pedro',
            description: 'rie,ama y suena',
                avatar : '/img/NeymarPerfil.png',
                    last_connection: 'ahora',
                        connection_status: 'online',
                            messages : [{
                                emisor: 'YO',
                                hora: '23:10',
                                id: 1,
                                texto: 'hola',
                                status: 'visto',
                            },
                            {
                                emisor: 'OTRO',
                                hora: '23:11',
                                id: 2,
                                texto: 'hola que tal?',
                                status: 'visto',
                            },
                            {
                                emisor: 'YO',
                                hora: '23:12',
                                id: 3,
                                texto: 'Todo esta bien ?',
                                status: 'visto',
                            },
                            {
                                id: 3,
                                name: 'Suarez',
                                description: 'Solo vives una vez , pero no te olvides de mi',
                                avatar: '/img/MessiPerfil.png',
                                last_connection: '15:23',
                                connection_status: 'offline',
                                messages: {
                                    emisor: 'YO',
                                    hora: '23:10',
                                    id: 1,
                                    texto: 'hola',
                                    status: 'visto',
                                },
                            },
    },


                                ],

        
    


export const getContactList = () => {
    return contacts
}
export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}


app jsx 
<div>
      
      <Routes>
        <Route
        path='/'
        element = {<ContactScreen/>}
        />
        <Route
        path='/contact/:contact_id/messages'
        element={<ChatScreen/>}
        />
      </Routes>

    </div>
  )
}


readme chatscreen paso 3
import React, {useState} from "react"
import MessagesList from "../../Components/MessagesList/MessageList";
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm";
import { getContactById } from "../../services/contactService";
import {useParams} from 'react-router-dom'



    const ChatScreen = () => {

        const {contact_id} = useParams ()

        const contact_selected =getContactById(contact_id)

const [messages, setMessages] = useState (contact_selected.messages)
    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of messages ){
            if (message.id !== message_id){
                new_message_list.push(message)

            }
        }
    setMessages(new_message_list)
    }

    const addNewMessage = (text) => {
        const new_mesage = {
            emisor:'YO',
            hora:'11:10',
            texto:text,
            status : 'no-visto',
            id:messages.length + 1
        }
        const cloned_messages_list = [...messages]
        cloned_messages_list.push(new_mesage)
        setMessages(cloned_messages_list)
    }
    const deleteAllMessages = ()=> {
        setMessages([])
    }

    
    return (
        <div>
            <h1>Mensajes:</h1>
            {
                messages.length > 0
                &&
                <button onClick = {deleteAllMessages}>Borrar todos los mensajes</button>

            }
        <MessagesList messages={messages} deleteMessageById= {deleteMessageById} />
        <NewMessageForm addNewMessage={addNewMessage}/>      
        
        </div>
    )
}


export default ChatScreen




html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #111b21;
  font-family: "Segoe UI", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}

.app-container {
  display: flex;
}

.main-panel {
  margin-left: 64px;
  width: 566px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
}

.image-panel {
  flex: 1;
  background-color: #f7f5f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


/* --- Reset y base --- */
html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  font-family: sans-serif;
}

.app {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

/* --- Contenedor principal --- */
.main {
  display: flex;
  flex-direction: row;
flex-grow: 1;
}



.left-panel {
  width: 566px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #ddd;
  height: 100vh;
  overflow: hidden;
}

.chat-area {
   flex-grow: 1;
  background-color: #f0f2f5;
  height: 100vh;
  overflow: hidden;
}



.contact-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
}

.contact-item:hover {
  background-color: #f9f9f9;
}

.contact-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-name {
  font-weight: bold;
}

.contact-description {
  font-size: 12px;
  color: #555;
}

/* --- Vista de chat --- */
.chat-view {
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
}

/* Fondo del chat */
.chat-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/Whatsapp.png');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 0;
}

.chat-placeholder {
  flex: 1;
  background-color: #f0f2f5;
}

/* Mensajes */
.messages {
  padding: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
}

.message {
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 10px;
  position: relative;
  font-size: 14px;
}

.message.sent {
  align-self: flex-end;
  background-color: #dcf8c6;
}

.message.received {
  align-self: flex-start;
  background-color: #fff;
}

.message-info {
  font-size: 10px;
  text-align: right;
  color: gray;
  margin-top: 4px;
}



.contact-list {
  overflow-y: auto;
  flex-grow: 1;
  margin-top: 8px; /* Separación desde los botones */
}
