import EventList from "@/components/EventList";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Agenda Cultural de Alagoas</h1>
        <p className="text-muted-foreground mt-2">
          Confira as próximas feiras de mercado, artesanato e muito mais.
        </p>
      </header>
      <EventList />
    </main>
  );
}
