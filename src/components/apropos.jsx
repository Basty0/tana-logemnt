import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function AProposComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-600">
        À Propos de Nous
      </h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notre Histoire</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Fondée en 2020, l'Agence de Logement Tana est née de la passion de
            ses fondateurs pour l'hospitalité et leur amour pour Madagascar.
            Notre mission est de fournir des solutions de logement de qualité et
            des services personnalisés aux visiteurs d'Antananarivo, qu'ils
            soient touristes, étudiants ou professionnels en déplacement.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notre Équipe</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Notre équipe est composée de professionnels passionnés et dévoués,
            tous experts dans leurs domaines respectifs. De nos agents
            immobiliers à nos guides touristiques, en passant par notre
            personnel de soutien administratif, chaque membre de notre équipe
            s'engage à offrir un service exceptionnel à nos clients.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notre Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Chez l'Agence de Logement Tana, nous nous engageons à :</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Fournir des logements de haute qualité et bien entretenus</li>
            <li>Offrir un service client exceptionnel et personnalisé</li>
            <li>
              Promouvoir la culture et le tourisme responsable à Madagascar
            </li>
            <li>
              Soutenir l'économie locale en collaborant avec des fournisseurs et
              des artisans locaux
            </li>
            <li>
              Respecter l'environnement et encourager des pratiques durables
            </li>
          </ul>
        </CardContent>
      </Card>
      <div className="mt-8">
        <Image
          src="/images/ch20.jpg"
          alt="L'équipe de l'Agence de Logement Tana"
          width={400}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
