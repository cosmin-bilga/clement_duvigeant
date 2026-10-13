import { useState } from "react";
import { useContent } from "../../contexts/ContentContext";

import active from "../../assets/review-active.svg"
import inactive from "../../assets/review-inactive.svg";
import "./index.css";

export default function Card({ review = null, photo = null, addMessage, onReviewUpdated, }) {
  const isConnected = !!localStorage.getItem("token");
  const [isUpdating, setIsUpdating] = useState(false);
  const MAX_SNIPPET_LENGTH = 150;
  const { refreshContent } = useContent();

  const removeImage = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/photos/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Photo deletion failed");
      }

      await refreshContent();
      addMessage("Photo supprimé avec succes.");
    } catch (error) {
      console.error(error);
    }
  };
  const updateReviewStatus = async (
  id: number,
  status: "approved" | "rejected"
) => {
  try {
        if (isUpdating) return;
        setIsUpdating(true)
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/reviews/?id=${id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: new URLSearchParams({
              status,
            }),
          }
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Echec de modification du statut !");
        }
        await onReviewUpdated?.();
        return data;                
      } catch (e) {         
        console.error("Erreur modification statut :", e);
      }
      finally {
        setIsUpdating(false)
      }
};
const truncate = (str: string, maxLength: number) => {  
  if (str.length <= maxLength) {
    return str;
  }

  const portion = str.slice(0, maxLength);
  const lastSpace = portion.lastIndexOf(" ");

  return (
    lastSpace > 0
      ? portion.slice(0, lastSpace)
      : portion
  ) + "…";
};
const renderStars = (rating: number | string = 0) => {
  const normalizedRating = Math.max(0, Math.min(Number(rating) || 0, 5));
  const fullStars = Math.round(normalizedRating);

  return [1, 2, 3, 4, 5].map((star) => (
    <img
      key={star}
      className="review-star-icon"
      src={star <= fullStars ? active : inactive}
      alt="avis"
    />
  ));
};
  if (review && isConnected) {
    return (
      <div className={`review-card-admin ${review.status}`}>
        <p>{review.user_name}</p>
        <img src={review.user_thumbnail} alt="user profile picture" height="40" width="40"/>
        <p>{review.date}</p>
        <p>
          {truncate(review.snippet, MAX_SNIPPET_LENGTH)}
          {review.snippet.length > MAX_SNIPPET_LENGTH && (
            <>
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire plus
            </a>
            </>
          )}
        </p>        
        <div 
          className="review-stars"
          role="img"
          aria-label={`Note : ${review.rating} sur 5`}
        >
          {renderStars(review.rating)}
        </div>
        <p>{review.status}</p>
        <button disabled={isUpdating} onClick={() => updateReviewStatus(review.id, "approved")}>{isUpdating ? "Modification..." : "Valider"}</button>
        <button disabled={isUpdating} onClick={() => updateReviewStatus(review.id, "rejected")}>{isUpdating ? "Modification..." : "Refuser"}</button>
      </div>
    );
  }
  if (review) {
    return (
      <div className="review-card">
        <p>{review.user_name}</p>
        <img src={review.user_thumbnail} alt="user profile picture" />
        <p>{review.date}</p>
        <p>
          {truncate(review.snippet, MAX_SNIPPET_LENGTH)}
          {review.snippet.length > MAX_SNIPPET_LENGTH && (
            <>
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire plus
            </a>
            </>
          )}
        </p>
        <div 
          className="review-stars"
          role="img"
          aria-label={`Note : ${review.rating} sur 5`}
        >
          {renderStars(review.rating)}
        </div>
        <p>{review.user_link}</p>
      </div>
    );
  }
  if (photo) {
    return (
      <div className="photo-container">
        <img
          className="carousel-img"
          src={photo.url}
          alt="slider"
          style={{
            zIndex: 2,
          }}
        />
        {isConnected ? (
          <button
            onClick={() => removeImage(photo.id)}
            className="remove-button"
          >
            Supprimer
          </button>
        ) : null}
      </div>
    );
  }
  return <div>Chargement...</div>;
}
