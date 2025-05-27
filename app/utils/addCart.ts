import { getSession,getToken } from "@/app/utils/Storage";
import api from '@/app/utils/api';

export const addCart = async (productID:number,cantProduct:number, price:number) =>{
    const sendData={
        cantidad: cantProduct,
        precio:20,
        product_id: productID,
        session_id: getSession()       
    }

    console.log('Send-Data',sendData)


    if(await searchSiEstaEnElCarro(productID)==0){
         //TODO: Esta parte de codigo es cuando crea un carrito con token una vez logeado
        if(getToken()){
            const resp = await api.post('/carts/create-token', sendData);
            console.log('create-token',resp.data.data)
            return resp.data.data
        }

        //TODO: Esta parte de codigo es cuando crea un carrito con session
        const resp = await api.post('/carts/create-session', sendData);
        console.log('create-session',resp.data);

        if(sendData.session_id==null){
            localStorage.setItem("session", resp.data.session_id); // Guardar en localStorage
        }
        return resp.data.data
    }
   
    
}

const searchSiEstaEnElCarro = async(productID:number)=>{

    const resp = getToken() ? await api.get('/carts/user-active'):await api.post('/carts/user-session',{session:getSession()});
    console.log('Todo', resp.data)

    const searchProduct = resp.data.filter( (product:any) => product.product_id=== productID);
    console.log('BuscarProducto', searchProduct)
    
    const bool = searchProduct.length==0 ?  0 : 1 
    return bool
    
}

//TODO: Esta parte de codigo es para actualizar la cantidad del producto del carrito de compra en la base de datos
export const updateCantProductCart= async (idCart:number,cantidad:number)=>{
    try {
        const resp = await api.patch(`/carts/update-product/${idCart}`,{cantidad:cantidad});
        console.log('UpdateCantidaProducto',resp.data)
    } catch (error) {
        console.log(error)
    }
   
}