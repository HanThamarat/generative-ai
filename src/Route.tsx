import { createBrowserRouter } from "react-router-dom";
import GetName from "./view/content-getname/getname";
import ChatBot from "./view/content-callgenai/chatbot";

const router = createBrowserRouter([
        {
            path: "/",
            element: <GetName/>,
        },
        {
            path: "ChatBot",
            element: <ChatBot />,
        }
    ]);


export default router;