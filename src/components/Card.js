const Card = ({title, children}) => {
    return (
        <div className="card">
        <h2 className="cardHeader">{title}</h2>
        <p className="cardDetails">{children}</p>
        </div>
    )
}

export default Card