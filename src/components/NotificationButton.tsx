import { useNotification } from "./hooks/useNotification";

const NotificationButton = () => {
    const {showNotification} = useNotification();
    return (
        <button onClick = {() => showNotification("la transaccion ha sido exitosa")}>
            confirmar transaccion
        </button>
    )
}

export default NotificationButton;