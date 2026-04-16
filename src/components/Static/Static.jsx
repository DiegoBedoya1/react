const Static = () => {
    const items = ["manzana","banana","cereza"];
    return (
        <ul>
            {
                items.map((item,index) => (
                    <li key = {index}> {item}</li>
                ))
            }
        </ul>
    )

}

export default Static;