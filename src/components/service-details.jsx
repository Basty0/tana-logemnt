import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function ServiceDetailsComponent({ service }) {
  const serviceDetails = {
    appartements: {
      nom: "Appartements de Luxe",
      description:
        "Découvrez notre sélection d'appartements meublés haut de gamme.",
      details:
        "Nos appartements de luxe offrent tout le confort nécessaire pour un séjour inoubliable. Chaque logement est soigneusement meublé et équipé pour répondre aux plus hauts standards de qualité.",
      image: "/images/ch1.jpg",
    },
    "assistance-voyage": {
      nom: "Assistance Voyage",
      description:
        "Guide personnel et accompagnement pour découvrir Antananarivo.",
      details:
        "Notre service d'assistance voyage vous permet de profiter pleinement de votre séjour. Nos guides expérimentés vous feront découvrir les trésors cachés d'Antananarivo et ses environs.",
      image: "/images/ch2.jpg",
    },
    "logement-etudiant": {
      nom: "Logement Étudiant",
      description:
        "Solutions de colocation abordables et confortables pour les étudiants internationaux.",
      details:
        "Nous proposons des options de logement adaptées aux besoins et au budget des étudiants. Nos colocations sont situées à proximité des principales universités et offrent un environnement propice aux études.",
      image: "/images/ch3.jpg",
    },
    "support-administratif": {
      nom: "Support Administratif",
      description:
        "Assistance pour les visas, l'inscription universitaire et toutes vos démarches administratives.",
      details:
        "Notre équipe vous accompagne dans toutes vos démarches administratives, de l'obtention de votre visa à l'inscription universitaire. Nous simplifions les procédures pour vous permettre de vous concentrer sur l'essentiel.",
      image: "/images/ch4.jpg",
    },
    "services-restauration": {
      nom: "Services de Restauration",
      description:
        "Chefs à domicile et livraison de repas pour savourer la cuisine malgache authentique.",
      details:
        "Découvrez la richesse de la cuisine malgache avec nos services de restauration. Nos chefs à domicile vous préparent des plats traditionnels avec des ingrédients locaux de qualité.",
      image: "/images/ch5.jpg",
    },
    "experiences-locales": {
      nom: "Expériences Locales",
      description:
        "Excursions personnalisées et activités culturelles pour une immersion totale dans la vie malgache.",
      details:
        "Vivez une expérience authentique à Madagascar avec nos excursions sur mesure. Nous vous proposons des activités culturelles uniques pour une immersion totale dans la vie locale.",
      image: "/images/ch6.jpg",
    },
  };

  const currentService = serviceDetails[service];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {currentService.nom}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={currentService.image}
            alt={currentService.nom}
            width={600}
            height={400}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <p className="text-lg mb-4">{currentService.description}</p>
          <p>{currentService.details}</p>
        </CardContent>
      </Card>
    </div>
  );
}
