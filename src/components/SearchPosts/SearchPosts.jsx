import {useState, useEffect} from "react";
const SearchPosts = () => {
    const[query,setQuery] = useState("");
    const[posts,setPosts] = useState([]);
    //const[isLoading,setIsLoading] = useState(false);
  //  const[error,setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                 const data = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`);
            if(!data.ok){
                throw new Error("Error fetching posts");
            }
            const postData = await data.json();
            setPosts(postData);
            }
            catch(error){
                console.error("Error fetching posts:",error);
            }
        }
        fetchPosts();
    }, [query]);
    return (
        <div>
            <h1>Search Posts</h1>
            <input 
            type = "text"
            placeholder = "Search by title"
            value = {query}
            onChange = {(event) => setQuery(event.target.value)}
            />
            <ul>
                {
                    posts.map((post) => (
                        <li key = {post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )

}

export default SearchPosts;