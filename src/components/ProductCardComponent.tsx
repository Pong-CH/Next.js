import { ProductType } from "@/libs/product";

export default function ProductCardComponent (props:ProductType) {

    return (
        // jsx
        //single root element   
        <section className="w-[320px] overflow-hidden rounded-2xl bg-white p-4 shadow">
            <img src={props.image} alt="product" className="h-[280px] w-full object-cover"/>
            <h2 className="mt-1 text-xl semi-bold">{props.title}</h2>
            <h3>{props.description}</h3>
            <h2>{
                // ternary exprestion
            props.price < 500 ? props.price : 500
            }$</h2>   
            <button className=" mt-4 w-full bg-blue-500 p-3 rounded text-white">AddToCard</button> 
        </section>
    )
}
