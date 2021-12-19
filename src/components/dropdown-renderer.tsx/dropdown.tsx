import { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ProductList } from "../../api/products";

interface IDropDownRenderer{
    title: string,
    filterType: string,
    products: ProductList[],
    filterisAnAddress: boolean
}

export const DropDownRenderer = (props: IDropDownRenderer ) => {
    const {title, filterType, products, filterisAnAddress} = props;
    const [dropDownValues, setDropdownValues] = useState<Set<string>>(new Set<string>())

    useEffect(()=>{
        const tempVals = new Set<string>();
        if (filterisAnAddress){
        products?.forEach(product => tempVals.add((product as any).address[filterType]))
        }
        else{
             products?.forEach(product => tempVals.add((product as any)[filterType]))
        }
        setDropdownValues(tempVals)
    },[products])

    return (
        // add css styling to the dropdown renderer
        <DropdownButton id="dropdown-basic-button" title={title}>
            {Array.from(dropDownValues).map((value: string, index: number)=>{
                const ref: string = `product-list-${index}`;
                return (<Dropdown.Item href={ref}>{value}</Dropdown.Item>);
            })}
        </DropdownButton>
    )
}