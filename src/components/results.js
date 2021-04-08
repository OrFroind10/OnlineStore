import { useEffect, useState } from "react";
import axios from "axios";
import ItemDetails from "./itemDetails";
const Results = ({ match }) => {
  const [Sresults, setSResults] = useState([]);
  const [Iresults, setIResults] = useState([]);
  const [modalToggle, setModalToggle] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://ali-express1.p.rapidapi.com/search",
      params: { query: `${match.params.searchQuery}`, page: "1" },
      headers: {
        "x-rapidapi-key": "0721d344c3msha6dc036d101790dp147b97jsn21b4af28532f",
        "x-rapidapi-host": "ali-express1.p.rapidapi.com",
      },
    };

      axios
      .request(options)
      .then(function (response) {
        setSResults(response.data.data.searchResult.mods.itemList.content);
      })
      .catch(function (error) {
        console.error(error);
      });
      setIsLoading(false)
  }, []);

  const handleProductClick = (item) => {
    setIResults(item)
    setModalToggle(true)
  }

  if (!isLoading) return (
    <div>
    <div className="resultsContainer">
      {Sresults.map((item, index) => (
        <div key={index} className="resultCard" onClick={() => handleProductClick(item)}>
          <figure className="snip1418">
            <img src={item.image.imageUrl} alt={item.title.displayTitle} />
            <figcaption>
              <h3>{item.title.displayTitle}</h3>
              <div className="price">
                <s>{Math.floor(item.prices.sale_price.minPrice * 1.1)}.99</s>
                {item.prices.sale_price.formattedPrice}
              </div>
            </figcaption>
          </figure>
        </div>
      ))}

        <ItemDetails modalToggle={modalToggle} setModalToggle={setModalToggle} data={Iresults}/>
    </div>
    </div>
  )
  else {
    return (
      <img className="Loading" src="https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="load"/>
    )
  }
};

export default Results;
