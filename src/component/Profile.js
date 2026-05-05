import React from "react";

function Profile({ name, photo, role }) {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    textAlign: "center",
    width: "200px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default Profile;