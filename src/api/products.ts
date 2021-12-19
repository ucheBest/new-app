export const fetchData =  async (): Promise<ProductList[]> => {
    const res = await fetch('https://assessment-edvora.herokuapp.com')
    const data = await res.json(); 
    return data;
}

  export interface ProductList{
      product_name: string,
      brand_name: string,
      description: string,
      image: string,
      price: number,
      time: string,
      address: Address
  }

  interface Address{
      city: string,
      state: string
  }