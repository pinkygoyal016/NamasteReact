const Contact=()=>{
    return(
        <div className="contact">
            <h1 className=" font-bold justify-between">Contact Us : </h1>
          <form>
            <input className="m-2 p-2 font-bold border " placeholder="Name" type="text"/>
          <input className="m-2 p-2 font-bold border " placeholder="Message" type="text"/>
          <button className="cursor-pointer border bg-black rounded-lg text-white">Submit</button>
          </form>
        </div>
    )
}
export default Contact