import Image from 'next/image'
import img1 from '../public/products-images/1.jpg'
function Products(){
  return(
    <>
      <h1>Our products</h1>
      <Image src={img1} placeholder='blur' width="50%" height="50%" alt="product"/>
      
      {["1","2","3","4", "5"].map((path)=>{
        return(
          <div key ={path}>
            <Image src={`/products-images/${path}.jpg`} width="300" height="400" alt="product"/>
          </div>
          
        )
      })}
    </>
  )
}
export default Products