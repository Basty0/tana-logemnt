"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Utensils,
  Users,
  FileText,
  Globe,
  Star,
  Coffee,
  Wifi,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PageAccueilComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "/images/ch1.jpg",
    "/images/ch2.jpg",
    "/images/ch3.jpg",
    "/images/ch4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
      nom: "Studio Confortable près de l'Université",
      description: "Parfait pour les étudiants, studio entièrement meublé",
      prix: "400 000 Ar/mois",
      image: "/images/ch2.jpg",
      note: 4.5,
    },
    {
      id: 3,
      nom: "Maison Familiale",
      description: "Maison de 3 chambres avec jardin, idéale pour les familles",
      prix: "1 200 000 Ar/mois",
      image: "/images/ch3.jpg",
      note: 4.9,
    },
  ];

  const services = [
    {
      id: "appartements",
      nom: "Appartements de Luxe",
      description:
        "Découvrez notre sélection d'appartements meublés haut de gamme dans les meilleurs quartiers d'Antananarivo.",
      icon: MapPin,
    },
    {
      id: "assistance-voyage",
      nom: "Assistance Voyage",
      description:
        "Guide personnel et accompagnement pour découvrir les merveilles d'Antananarivo et ses environs.",
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-600">
                    Ne pensez plus à votre logement à Antananarivo
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    On s'en occupe pour vous selon vos critères et votre budget.
                    Profitez d'un séjour sans souci à Madagascar avec notre
                    service personnalisé.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#appartements">Voir nos Appartements</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#services">Découvrir nos Services</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-purple-500 text-purple-500" />
                    <span className="font-medium">4.9/5 étoiles</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Plus de 1000 clients satisfaits</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[400px] lg:max-w-none relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentSlide}
                    src={heroImages[currentSlide]}
                    alt={`Appartement luxueux à Antananarivo ${
                      currentSlide + 1
                    }`}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600">
              Nos Services Exceptionnels
            </h2>
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
                      <Link href={`/services/${service.id}`}>
                        En savoir plus
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="appartements"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600">
              Nos Appartements
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {appartements.map((appartement) => (
                  <CarouselItem key={appartement.id}>
                    <div className="p-1">
                      <Card className="relative overflow-hidden">
                        <CardContent className="p-0">
                          <img
                            src={appartement.image}
                            alt={appartement.nom}
                            width={400}
                            height={300}
                            className="w-full h-[600px] object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                            <CardTitle className="text-white mb-2">
                              {appartement.nom}
                            </CardTitle>
                            <CardDescription className="text-gray-200 mb-2">
                              {appartement.description}
                            </CardDescription>
                            <p className="text-lg font-bold mb-2 text-purple-300">
                              {appartement.prix}
                            </p>
                            <div className="flex items-center mb-2 space-x-2 text-sm text-gray-300">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(appartement.note)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-500"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span>{appartement.note.toFixed(1)}</span>
                            </div>
                            <div className="flex items-center mb-2 space-x-2 text-sm text-gray-300">
                              <Wifi className="w-4 h-4" />
                              <span>Wi-Fi Gratuit</span>
                              <Users className="w-4 h-4 ml-2" />
                              <span>2-4 Personnes</span>
                            </div>
                            <Button
                              variant="outline"
                              asChild
                              className="mt-2 w-full"
                            >
                              <Link href={`/appartements/${appartement.id}`}>
                                Voir les détails
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="/appartements">Voir tous nos appartements</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600">
              Ce que Disent Nos Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expérience Inoubliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    "L'appartement était magnifique et l'assistance voyage a
                    rendu notre séjour à Antananarivo vraiment spécial. Je
                    recommande vivement cette agence !"
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Sarah de France</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Service Exceptionnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    "La réservation depuis les Comores a été un jeu d'enfant.
                    L'appartement dépassait toutes nos attentes et le soutien de
                    l'agence était inestimable."
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Ahmed des Comores</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Parfait pour les Étudiants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    "La colocation était idéale pour mon budget d'étudiante.
                    J'ai rencontré des gens formidables et vécu une expérience
                    culturelle enrichissante."
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">- Marie de La Réunion</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-600">
              Contactez-nous
            </h2>
            <div className="mx-auto max-w-lg">
              <Card>
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        placeholder="Entrez votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Entrez votre email"
                        required
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        className="min-h-[100px]"
                        id="message"
                        placeholder="Entrez votre message"
                        required
                      />
                    </div>
                    <Button className="w-full" type="submit">
                      Envoyer le Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
