import React from "react";
import Profile from "./Profile";

export function Gallery() {
  return (
    <div style={styles.container}>
      <Profile
        name="Arjun Mehta"
        role="Chief Executive Officer"
        photo="https://th.bing.com/th/id/OIP.l40--tIATSWGJPfWq3mHpAHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
      />

      <Profile
        name="Divya Rao"
        role="Chief Technology Officer"
        photo="https://cdn.expresshealthcare.in/wp-content/uploads/2025/05/06152132/EH_GB_Divya_Rao_Remidio_750.jpg"
      />

      <Profile
        name="Karan Singh"
        role="UI/UX Designer"
        photo="https://th.bing.com/th/id/OIP.R_Jv9xS-DU5y8fLBuqYTRQHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};