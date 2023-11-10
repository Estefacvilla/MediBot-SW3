import React from 'react';
import '../styles/chatbot.css'; 

function Chatbot() {
    return (
        <df-messenger
            intent="WELCOME"
            chat-title="MediBot"
            agent-id="8a607da7-fffe-4202-95c2-b4ee10f31dcf"
            language-code="es"
     
        ></df-messenger>
    );
}
export default Chatbot;