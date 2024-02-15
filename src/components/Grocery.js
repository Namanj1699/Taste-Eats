const Grocery = () =>{
    console.log("grocery component called")
    return(
        <>
    <h1>I am inside Grocery Component</h1>
    <form>
        <input
        type="text" placeholder="Enter your Query" className="border border-black p-2 m-2"
        />
        <input
        type="text" placeholder="Email" className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 rounded-lg">SUBMIT</button>
    </form>
    </>
    )
    
}

export default Grocery;