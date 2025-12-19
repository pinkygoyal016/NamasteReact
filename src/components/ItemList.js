import { useDispatch } from "react-redux"
import { CDN_URL } from "./utils/constants"
import { additem } from "./utils/cartSlice"

const ItemList = ({ items }) => {
    const dispatch = useDispatch()

    const handelAddItem = (item) => {
        dispatch(additem(item))
        // window.alert("Item added")
    }
    return (

        <div >
            {items.map((item) => (<div key={item.card.info.id}
                className="m-2 p-2 border-gray-200  border-b-2 text-left flex justify-between">

                <div className="w-9/12">
                    <div className="my-2 ">
                        <span>{item.card.info.name}</span>
                        <span>-₹ {item.card.info.price / 100}</span>
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                </div>


                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="bg-black text-white mx-16 p-2 rounded-lg cursor-pointer"
                            onClick={() => handelAddItem(item)}
                        >
                            +Add</button>

                    </div>
                    <img src={CDN_URL + item.card.info.imageId} alt="img" className="w-full" />

                </div>
            </div>
            ))}
        </div>

    )
}
export default ItemList
