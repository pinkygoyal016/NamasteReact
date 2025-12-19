import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { clearcart } from "./utils/cartSlice"

const Cart = () => {
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearcart())
    }
    const cartItem = useSelector((store) => store.cart.items)
    console.log(cartItem)
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-black text-white m-2 p-2 rounded-lg"
                    onClick={handleClearCart}>Clear Cart</button>
                <ItemList items={cartItem} />
                {cartItem.length == 0 && <h1>Your cart is Empty..Please add Items to the Cart!</h1>}
            </div>
        </div>
    )
}
export default Cart