import "./index.css";

export default function Card(
    { review, photo }
    
){
    if(review){
        return(
        <div className="product-card">
            <p>{review.id}</p>
            <p>{review.snippet}</p>
        </div>
    )
    }
    
}