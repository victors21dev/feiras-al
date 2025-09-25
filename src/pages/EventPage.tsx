import { useUser } from "@clerk/clerk-react";
import EventForm from "@/components/EventForm";

export default function EventPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="text-center mt-10">Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <p className="text-muted-foreground mt-2">
          Bem-vindo(a), {user?.fullName}!
        </p>
      </header>

      <section>
        <EventForm />
      </section>
    </div>
  );
}
