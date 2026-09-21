import React, { useState } from "react";
import profilePhoto from "../assets/profile.jpg";

export default function ProfileImage({ className = "", alt = "Ajay Hukkeri" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`profile-image-container ${className}`}>
      {!imgError ? (
        <img
          src={profilePhoto}
          alt={alt}
          className="profile-photo"
          onError={() => setImgError(true)}
          loading="eager"
        />
      ) : (
        <div className="profile-illustration" title="Ajay Hukkeri">
          <svg
            viewBox="0 0 360 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="avatar-svg"
          >
            <rect width="360" height="420" rx="24" fill="#0f172a" />
            <circle cx="180" cy="165" r="58" fill="#334155" />
            <path
              d="M80 390 C80 295, 125 260, 180 260 C235 260, 280 295, 280 390 Z"
              fill="#1e293b"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
