import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Star, Wifi, Users } from "lucide-react";

export function AppartementsListComponent() {
  const appartements = [
    {
      id: 1,
      nom: "Appartement Luxueux au Centre-Ville",
      description: "Spacieux appartement de 2 chambres au cœur d'Antananarivo",
      prix: "800 000 Ar/mois",
      image: "/images/ch1.jpg",
      note: 4.8,
    },
    {
      id: 2,
      nom: "Studio Moderne près de l'Université",
      description: "Studio confortable, idéal pour les étudiants",
      prix: "400 000 Ar/mois",
      image: "/images/ch2.jpg",
      note: 4.5,
    },
    {
      id: 3,
      nom: "Penthouse avec Vue Panoramique",
      description: "Appartement de luxe avec terrasse et vue sur la ville",
      prix: "1 200 000 Ar/mois",
      image: "/images/ch3.jpg",
    },
    {
      id: 4,
      nom: "Appartement Familial avec Jardin",
      description: "Grand appartement de 3 chambres avec jardin privé",
      prix: "950 000 Ar/mois",
      image: "/images/ch4.jpg",
    },
    {
      id: 5,
      nom: "Loft Artistique dans le Quartier Bohème",
      description: "Espace ouvert unique pour les amateurs d'art",
      prix: "700 000 Ar/mois",
      image: "/images/ch5.jpg",
    },
    {
      id: 6,
      nom: "Suite Exécutive pour Professionnels",
      description: "Appartement haut de gamme avec bureau intégré",
      prix: "1 000 000 Ar/mois",
      image: "/images/ch6.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nos Appartements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appartements.map((appartement) => (
          <Card key={appartement.id}>
            <CardHeader>
              <CardTitle>{appartement.nom}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={appartement.image}
                alt={appartement.nom}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p>{appartement.description}</p>
              <p className="font-bold mt-2 text-purple-600">
                {appartement.prix}
              </p>
              <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(appartement.note || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span>
                  {appartement.note ? appartement.note.toFixed(1) : "N/A"}
                </span>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
                <Wifi className="w-4 h-4" />
                <span>Wi-Fi Gratuit</span>
                <Users className="w-4 h-4 ml-2" />
                <span>2-4 Personnes</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/appartements/${appartement.id}`}>
                  Voir les détails
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
