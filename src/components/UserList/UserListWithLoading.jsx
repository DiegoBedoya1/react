import {useState, useEffect} from "react";

const UserList = () => {
    const [users,setUsers] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
             const data = await fetch("https://jsonplaceholder.typicode.com/users");
             if(!data.ok){
                throw new Error("Error fetching users");
             }
             const userData = await data.json();
             setUsers(userData);
            }catch(error){
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUsers();
    },[]);

    if(isLoading){
        return <p> Loading...</p>
    }
    if(error){
        return <p> Error: {error}</p>
    }
    return (
        <div>
            <h1> Lista de usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}> {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;