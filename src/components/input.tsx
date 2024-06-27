
interface Input {
    title?: string;
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({title, value, onChange, type}:Input) => {
    return(
        <div className="py-2">
            <span>{title}</span>
            <input type={type == undefined ? "text" : type} className="border block w-full py-2 rounded-md focus:outline-blue-500 px-2" value={value} onChange={onChange}/>
        </div>
    );
};

export default Input;