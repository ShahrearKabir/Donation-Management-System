import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AdminPage from "./admin";
import Navbar from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div class="min-h-full">
      <Navbar>
        <header class="bg-white shadow-sm">
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Landing</h1>
          </div>
        </header>
        <main>
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          </div>
        </main>
      </Navbar>

    </div>

  );
}
