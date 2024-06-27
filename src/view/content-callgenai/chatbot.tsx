import { useState } from 'react';
import axios from 'axios';
import BaseUrl from '../../components/baseUrl';

import MasterLayout from "../../components/layout/master";
// import Footer from "../../components/content-chatbot/footer";
import NavChat from "../../components/content-chatbot/nav";
import Input from "../../components/input";
import Button from "../../components/button";
import './chatbot.css';

const baseUrl = BaseUrl;

interface ChatBotProps {
    type: string;
    massage: string;
}

const ChatBot = () => {

    const [spinnner, setSpinner] = useState(false); 
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState<ChatBotProps[]>([]);
    const [aiMessage, setAiMessage] = useState('');

    const handleSend = async () => {
        try {
            setSpinner(true);

            if(message.length > 0) {
                await setChat([...chat, {
                    type: 'user',
                    massage: message
                }]);
                console.log(chat);
                const lastItem = chat[0].massage === '' ? chat : chat[chat.length - 1];
                    
                const response = await axios.post(`${baseUrl}/ChatBot`, {
                    prorm: lastItem.massage
                });
    
                await setAiMessage(response.data.GenAIMsg.response.candidates[0].content.parts[0].text);
                await setChat([...chat, {
                    type: 'genai',
                    massage: aiMessage
                }]);
                console.log(chat);
                setSpinner(false);
            }
        } catch (error) {
            setSpinner(false);
            console.log(error);
        }
    }

    return(
        <MasterLayout>
            <div className="h-screen flex justify-center items-center px-20 py-10">
                <div className="bg-white rounded-md drop-shadow-sm w-full h-full">
                    <NavChat />
                    <div className='chat_bot__con mx-2'>
                        {chat.map((item, key) => (
                            <div className={`flex ${item.type === 'genai' ? 'justify-start' : 'justify-end' } py-4`} key={key}>
                                <div className="bg-blue-500 text-white px-3 py-3 rounded-md max-w-2xl flex text-balance">
                                    <p>{item.massage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <Footer /> */}
                    <div className="absolute bottom-0 w-full flex justify-between gap-x-2 px-4">
                        <div className="w-full">
                            <Input type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                        </div>
                        <div className="py-2">
                            <Button BTNname="Send" isLoading={spinnner} onClick={handleSend} />
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
}

export default ChatBot;