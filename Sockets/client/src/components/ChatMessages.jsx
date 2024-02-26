import React from "react";
import ChatForm from "./ChatForm";

const ChatMessages = props => {
   
    const { socket, handleCloseChat, messages, messageref, typing } = props;

   
    function leaveTheChat() {
        localStorage.removeItem("userName");
        handleCloseChat();
    }

    return(
        
        <div className="border border-dark mt-5 pt-3 px-3">
            <header>
                <button className="btn btn-danger"  onClick={ leaveTheChat }>Leave Chat</button>
            </header>
            <div>
                {
                    messages.map((message, index) => {
                        return ( message.name == localStorage.getItem("userName") ? (
                            <div className="d-flex justify-content-end" key={index}>
                                <div className="border border-dark p-2 mt-3"
                                style={{ backgroundColor: "#9fc5f8", 
                                borderRadius: "10px", width: "45%" }} >
                                    <p>You</p>
                                    <div>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            </div>
                            
                        ) : (
                            <div className="d-flex justify-content-start" key={index}>
                                <div className="border border-dark p-2 mt-3"
                                style={{ backgroundColor: "#dddddd", 
                                borderRadius: "10px", width: "45%" }} >
                                    <p>{message.name}</p>
                                    <div>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    })
                }
            </div>
            <div>
                <p>{ typing } ...</p>
            </div>
            <div ref={ messageref } />

            <ChatForm socket={ socket } />
        </div>
    );

}

export default ChatMessages;