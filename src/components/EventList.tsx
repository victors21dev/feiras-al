/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import type { IEvent } from "../types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
const URL_BACK = import.meta.env.VITE_URL_BACKEND_API_EVENTS;

const API_URL = `${URL_BACK}`;

export default function EventList() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Falha ao buscar os dados do servidor.");
        }

        const data = await response.json();
        setEvents(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p className="text-center">Carregando eventos de Alagoas...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Erro: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {(events || []).map((event) => (
        <Card key={event._id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>
              {new Date(event.date).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{event.description}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {event.location}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
