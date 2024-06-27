import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from "../../components/input";
import Button from '../../components/button';

const GetName = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const ClientName = localStorage.getItem("ClientName");

    const handleSendName = async () => {
        await localStorage.setItem("ClientName", name);
        
        if (localStorage.getItem("ClientName") != null && name != "") {
            navigate("/ChatBot");
        }
    }

    useEffect(() => {
        if (ClientName != null && ClientName != "") {
            navigate("/ChatBot");
        }
    }, [navigate, ClientName]);

    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="bg-white rounded-md drop-shadow-sm px-4 py-4 max-w-3xl w-full animate-fade-down animate-duration-1000 animate-ease-in-out">
                    <div className="text-2xl font-medium text-center">
                        <span>Please enter name</span>   
                    </div>
                    <div>
                        <Input title="Name" type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                        <Button BTNname='Click Me' style='w-full my-3' onClick={handleSendName} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetName;