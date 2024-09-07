import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

export const UserInfo = () => {
  const { user, logOut, logIn } = useContext(UserContext);

  if (!user?.name) {
    return <button onClick={logIn}>Zaloguj</button>;
  }

  return (
    <div>
      Hello, {user.name}
      <button onClick={logOut}>Wyloguj</button>
    </div>
  );
};
