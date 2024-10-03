import { ServiceDetailsComponent } from "@/components/service-details";

export default function ServiceDetailsPage({ params }) {
  return <ServiceDetailsComponent service={params.service} />;
}
