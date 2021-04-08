import { useState } from 'react'

const ItemDetails = ({modalToggle, setModalToggle, data}) => {
const [countSelector, setCountSelector] = useState(1)
const [alertmsg, setAlert] = useState("")
    const styles = {
        display: "block",
        opacity: 1
    }
    
    const handleToggle = () => {
        setModalToggle(!modalToggle)
        setAlert("")
        setCountSelector(1)
    }

    const handleAddToCart = () => {
        try {
        const lsData = {
            title: data.title.displayTitle,
            image: data.image.imageUrl,
            price: data.prices.original_price.minPrice || data.prices.sale_price.minPrice,
            count: countSelector,
            id: data.productId
        }
        console.log(localStorage.getItem('cart'))
        if(localStorage.getItem('cart') === null) {
            localStorage.setItem("cart", JSON.stringify([lsData]))
        } else {
            let getLsData = JSON.parse(localStorage.getItem('cart'))
            if(getLsData.find(p => p.id === lsData.id)) {
                const newLsData = getLsData.map(product => {
                    if (product.id === lsData.id) product.count++;
                    return product
                  })
                  localStorage.setItem('cart', JSON.stringify(newLsData))
            } else {
            getLsData = [...getLsData, lsData]
            localStorage.setItem('cart', JSON.stringify(getLsData))
            }
        }
        setAlert("Product added successfully !")
    } catch {
        alert("this item is out of stock")
    }}

    const handleCountSelector = (e) => {
        setCountSelector(e.target.value)
    }
    if(modalToggle) {
        return (
            <div>
      <div style={modalToggle ? styles : null} className="modal">
        <div className="modal-content">
          <span onClick={handleToggle} className="close">&times;</span>
          <img src={data.image.imageUrl} alt=""/>
          <div className="modalItemDetails">
          <h2>{data.title.displayTitle}</h2>
          <p>{data.prices.sale_price.formattedPrice}</p>
          <div className="countSelector">
          <input type="number" min="1" max="10" onChange={handleCountSelector} value={countSelector}/>
          </div>
          <button onClick={handleAddToCart} className="addToCartBtn">Add to cart</button>
          <p style={{color: "green"}}>{alertmsg}</p>
          </div>

        </div>  
      </div>
    </div>
        
    )}
    else return null
}

export default ItemDetails