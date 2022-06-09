import { useEffect } from "react";
import { useQuery } from "react-query";
import { getProduct } from "../api/productAPI";
import { Product } from "../model/product.model";



const ProductList = () => {
    
        //API CALL
    const { data , isLoading, isFetching, isError, error } = useQuery('get-product' , getProduct) ;

    
    useEffect(() => {

    },[])
    
    const productlist : Product[] = data?.data;

    console.log(1111111);
    
    if(isLoading){
        return <h2> Loading ... </h2>
    }
    if(isError){
        return <h2> Error ... </h2>
    }
    
    
    return(
    <>
    
       {productlist.length  === 0  ? (
         <div>No Data</div>
       ): (
        productlist.map((item , index) => {
            return <ProductListCard product={item} key={index} />
        })
        
       )
       }

    </>
    )
    

    
}


const ProductListCard = ({product} : any) => {

    
    return(
        <>
    <div>
        <div>id : {product.id} </div>
        <div>title : {product.title} </div>
        <div>price : {product.price} </div>
        <div>description : {product.description} </div>
        <div>category : {product.category} </div>
        <div>image : {product.image} </div>
        <div>rating.rate : {product.rating.rate} </div>
        <div>rating.count : {product.rating.count} </div>
    </div>
    <br/>
    </>
    )
}

export default ProductList;

function item(item: any) {
    throw new Error("Function not implemented.");
}
