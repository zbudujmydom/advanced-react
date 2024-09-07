import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const ContactPage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Contact with us</h1>
      <p>address...</p>
      <p>user: {user?.name}</p>
    </div>
  );
};
