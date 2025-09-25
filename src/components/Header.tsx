import { useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold">
          Eventos AL
        </Link>

        <div>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/home" />
          ) : (
            <Button className="bg-gray-100" asChild>
              <Link to="/sign-in">Entrar</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
