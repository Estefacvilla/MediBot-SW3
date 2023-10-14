import React, { useEffect } from 'react';
import './Chatbot.css'; 

function Chatbot() {
    return (
        <df-messenger
            intent="WELCOME"
            chat-title="MediBot"
            agent-id="c26f8455-93b6-4d8a-90b7-3523e6379e97"
            language-code="es"
        ></df-messenger>
    );
}
export default Chatbot;