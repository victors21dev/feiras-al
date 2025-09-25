import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "@/pages/EventPage";
import Header from "./components/Header";

import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from "@clerk/clerk-react";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />

          <Route
            path="/eventos"
            element={
              <>
                <SignedIn>
                  <EventPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          <Route
            path="*"
            element={
              <h1 className="text-center mt-10">Página não encontrada</h1>
            }
          />
        </Routes>
      </main>
    </>
  );
}
