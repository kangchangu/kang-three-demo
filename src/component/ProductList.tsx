import { useEffect } from "react";
import { useQuery } from "react-query";
import { getProduct } from "../api/productAPI";
import { Product } from "../model/product.model";

import '../asset/css/product.css'
import Card from "antd/lib/card/Card";
import Meta from "antd/lib/card/Meta";
import { Row } from "antd";

const ProductList = () => {
    
        //API CALL
    const { data , isLoading, isFetching, isError, error } = useQuery('get-product' , getProduct) ;
    

    
    useEffect(() => {

    },[])
    
    const productlist : Product[] = data?.data;
    
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


const ProductListCard = ({product} : {product : any}) => {
    //const { data , isLoading, isFetching, isError, error } = useQuery('get-product' , getProduct) ;
    
    return(
        <>
        <Row>
            
            <Card 
                hoverable 
                style={{width:500}} 
                cover={<img alt="example" src={product.image} style={{width:500}} />}>
                <Meta title={product.title} description={product.description} />
            </Card>
        </Row>
    {/* <div className="flex-container">
        

            <div className="flex-item">{product.title} </div>
            <div className="flex-item">{product.price} </div>
            <div className="flex-item">{product.description} </div>
            <div className="flex-item">{product.category} </div>
            <div className="flex-item"><img src= /> </div>
            <div className="flex-item">{product.rating.rate} / {product.rating.count} </div>
        

        
        
    </div> */}
    <br/>
    </>
    )
}

export default ProductList;

function item(item: any) {
    throw new Error("Function not implemented.");
}
