import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Star, Wifi, Users } from "lucide-react";

export function AppartementDetailsComponent({ id }) {
  // Ceci devrait être remplacé par un appel à une API ou une base de données
  const appartement = {
    id: id,
    nom: "Appartement Luxueux au Centre-Ville",
    description: "Spacieux appartement de 2 chambres au cœur d'Antananarivo",
    prix: "800 000 Ar/mois",
    image: "/images/ch1.jpg",
    note: 4.8,
    details:
      "Cet appartement offre une vue imprenable sur la ville et dispose de tout le confort moderne. Avec ses deux chambres spacieuses, son salon lumineux et sa cuisine entièrement équipée, il est parfait pour un séjour en famille ou entre amis.",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {appartement.nom}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={appartement.image}
            alt={appartement.nom}
            width={800}
            height={600}
            className="w-full h-96 object-cover mb-4 rounded-lg"
          />
          <p className="text-lg mb-2">{appartement.description}</p>
          <p className="font-bold text-xl mb-4 text-purple-600">
            {appartement.prix}
          </p>
          <div className="flex items-center mb-4 space-x-2 text-sm text-gray-500">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
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
          <div className="flex items-center mb-4 space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Wifi className="w-5 h-5" />
              <span>Wi-Fi Gratuit</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-5 h-5" />
              <span>2-4 Personnes</span>
            </div>
          </div>
          <p className="text-gray-700">{appartement.details}</p>
        </CardContent>
      </Card>
    </div>
  );
}
