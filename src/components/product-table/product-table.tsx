import { ProductList } from "../../api/products";

interface IProductTable{
    products: ProductList[]
}
export const ProductTable =(props: IProductTable) => {
    //Render the product lists here
    console.log(JSON.stringify(props.products))
    return(<div>My Product Table</div>)
}