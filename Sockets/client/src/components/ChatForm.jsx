import React, { useState } from "react";

const ChatForm = props => {
    const { socket } = props;
    const [message, setMessage] = useState("");
    const handleSendMessage = e => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem("userName")){
            socket.emit("message", {
                text: message,
                name: localStorage.getItem("userName"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
            console.log({
                text: message,
                name: localStorage.getItem("userName"),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage("");
    };
    const handleTyping = () => {
        socket.emit("typing", localStorage.getItem("userName") + " is typing");
    }
    return(
        <div className="pb-4">
            <form onSubmit={ handleSendMessage } className="start-form ps-5 mx-auto mt-5">
                <div className="row">
                    <div className="col-sm-6 col-md-8">
                        <textarea className="form-control" value={message} 
                        onChange={ e => setMessage(e.target.value) }
                        onKeyDown={ handleTyping }
                        rows={ 1 } />
                    </div> 
                    <div className="col-6 col-md-4">
                        <input className="btn btn-primary" type="submit" value="Send" />
                    </div>   
                </div>
            </form>
        </div>
    );

}

export default ChatForm;