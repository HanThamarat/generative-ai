
const NavChat = () => {
    const ClientName = localStorage.getItem("ClientName");
    return(
        <nav className="border-b py-4 px-4">
            <div className="text-[18px] font-semibold">
                <span>HELLO, <span className="text-blue-600">{ClientName}</span></span>
            </div>
        </nav>
    );
}

export default NavChat;