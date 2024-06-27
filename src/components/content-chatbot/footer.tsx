import { useState } from 'react';

import Input from "../input";
import Button from "../button";

const Footer = () => {    

    const [spinnner, setSpinner] = useState(false); 
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState<string[]>([]);

    const handleSend = () => {
        setSpinner(true);

        if(message.length > 0) {
            setChat([...chat, message]);

            setTimeout(() => {
                setSpinner(false);
            }, 2000);

            console.log(chat);
            
        }

        // setTimeout(() => {
            // setSpinner(false);
        // }, 2000);
    }

    return(
        <div className="absolute bottom-0 w-full flex justify-between gap-x-2 px-4">
            <div className="w-full">
                <Input type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} />
            </div>
            <div className="py-2">
                <Button BTNname="Send" isLoading={spinnner} onClick={handleSend} />
            </div>
        </div>
    );
}

export default Footer;