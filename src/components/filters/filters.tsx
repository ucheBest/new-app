import React from "react";
import { ProductList } from "../../api/products";
import { IProducts } from "../../App";
import { DropDownRenderer } from "../dropdown-renderer.tsx/dropdown";

export const Filters = (props: IProducts) =>{
const { unfilteredProducts,filterdProducts, setFilteredProducts} = props;

const onChange = (event: React.ChangeEvent<HTMLInputElement> ): void=> {
    const text = event?.currentTarget?.value
    if (text){
        const filterdProducts = unfilteredProducts.filter((p:ProductList) => p.product_name.includes(text))
        setFilteredProducts([...filterdProducts]);
    }
    else{
        setFilteredProducts([...unfilteredProducts])
    }
}
return(
    // add css styling to align with UX design
    <div>
        <input placeholder="Filters" onChange={onChange}></input>
        <DropDownRenderer title="Products" filterType="product_name" products={filterdProducts} filterisAnAddress={false}/>
        <DropDownRenderer title="State" filterType="state" products={filterdProducts} filterisAnAddress={true}/>
        <DropDownRenderer title="City" filterType="city" products={filterdProducts} filterisAnAddress={true}/>
    </div>
)


}