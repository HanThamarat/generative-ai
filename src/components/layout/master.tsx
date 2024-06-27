import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: JSX.Element;
}


const MasterLayout = ({children}:Props) => {
    const navigate = useNavigate();
    const reCheckClientName = () => {
        const clientName = localStorage.getItem("ClientName");
        if (clientName === null || clientName === '') {
            navigate("/");
        }
    }

    useEffect(() => {
        reCheckClientName();
    }, [navigate]);

    return(
        <>
        {children}
        </>
    );
}

export default MasterLayout;