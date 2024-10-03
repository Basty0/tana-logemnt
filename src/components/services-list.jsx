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
import { MapPin, Globe, Users, FileText, Utensils, Coffee } from "lucide-react";

export function ServicesListComponent() {
  const services = [
    {
      id: "appartements",
      nom: "Appartements de Luxe",
      description:
        "Découvrez notre sélection d'appartements meublés haut de gamme.",
      icon: MapPin,
    },
    {
      id: "assistance-voyage",
      nom: "Assistance Voyage",
      description:
        "Guide personnel et accompagnement pour découvrir Antananarivo.",
      icon: Globe,
    },
    {
      id: "logement-etudiant",
      nom: "Logement Étudiant",
      description:
        "Solutions de colocation abordables et confortables pour les étudiants internationaux.",
      icon: Users,
    },
    {
      id: "support-administratif",
      nom: "Support Administratif",
      description:
        "Assistance pour les visas, l'inscription universitaire et toutes vos démarches administratives.",
      icon: FileText,
    },
    {
      id: "services-restauration",
      nom: "Services de Restauration",
      description:
        "Chefs à domicile et livraison de repas pour savourer la cuisine malgache authentique.",
      icon: Utensils,
    },
    {
      id: "experiences-locales",
      nom: "Expériences Locales",
      description:
        "Excursions personnalisées et activités culturelles pour une immersion totale dans la vie malgache.",
      icon: Coffee,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {React.createElement(service.icon, {
                  className: "w-6 h-6 text-purple-500",
                })}
                <span>{service.nom}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/services/${service.id}`}>En savoir plus</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
