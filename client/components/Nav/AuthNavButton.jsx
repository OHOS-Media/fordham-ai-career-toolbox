import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Button from "../ui/Button";
import { IconLoader2, IconUser } from "@tabler/icons-react";

const AuthNavButton = () => {
  const { user, loading, login } = useAuth();

  if (loading)
    return (
      <div className="p-3 bg-fordham-white/5 text-fordham-white rounded-[8px] overflow-hidden">
        <IconLoader2 size={24} className="animate-spin " />
      </div>
    );

  return user ? (
    <Link href="/profile">
      <div className="p-3 bg-fordham-white/5 text-fordham-white rounded-[8px] overflow-hidden hover:bg-fordham-white/10">
        <IconUser size={24} />
      </div>
    </Link>
  ) : (
    <Button text="Login" variant="primary" onClick={login} className="h-9" />
  );
};

export default AuthNavButton;
