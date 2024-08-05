import Link from "next/link";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

export default function UserMenu() {
  const { isAuthenticated, user, login, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <>
        <Link href="/profile">
          <Button text={user.displayName} />
        </Link>
        <Button text="Log Out" onClick={logout} />
      </>
    );
  }

  return <Button text="Log In" onClick={login} />;
}
