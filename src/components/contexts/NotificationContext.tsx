import React, {useState, createContext} from "react";

interface NotificationContextType{
    message: string|null;
    showNotification: (text:string) => void;
    hideNotification: () => void;
}

export const NotificationContext = createContext<NotificationContextType|undefined>(undefined);

const NotificationProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
    const [message,setMessage] = useState<string|null>(null);

    const hideNotification = () => {
        setMessage(null);
    }
    const showNotification = (text:string) => {
        setMessage(text);
        setTimeout(() => {
            hideNotification()
        },3000)
    }
    return (
        <NotificationContext.Provider value = {{message, showNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    )

}

export default NotificationProvider;