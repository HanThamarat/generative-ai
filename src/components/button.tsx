import Spinner from "./spinner";

interface ButtonProps {
    style?: string;
    BTNname?: string;
    isLoading?: boolean;
    onClick?: () => void;
}


const Button = ({style, BTNname, onClick, isLoading}:ButtonProps) => {

    return(
        <button className={`px-4 py-2 bg-blue-500 text-white flex justify-center items-center font-semibold rounded-md hover:bg-blue-400 duration-100 ease-in-out ${style}`} onClick={onClick}>
            {isLoading ? <Spinner /> : BTNname}
        </button>
    );
}

export default Button;