import React, { useEffect, useRef, useState } from "react";
import ChatMessages from "../components/ChatMessages";
import ChatForm from "../components/ChatForm";

const Chat = props => {
    const { socket, handleCloseChat } = props;
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState("");
    // A reference object (created using useRef) that points to the chat messages container element.
    const messageRef = useRef(null);

    useEffect( () => {

        messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect( () => {
        socket.on("message_response", data => setMessages([...messages, data]));
        socket.on("chatHistory", data => setMessages(data));
    }, [socket, messages]);

    useEffect( () => {
        socket.on("type_response", data => setTyping(data));
    }, [socket]);

    return(
        <div>
            
            <ChatMessages socket={ socket }
            handleCloseChat={ handleCloseChat }
            messages={ messages }
            messageRef={ messageRef }
            typing={ typing } />
        </div>
    );
}

export default Chat;