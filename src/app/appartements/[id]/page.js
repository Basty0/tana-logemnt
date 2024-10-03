import { AppartementDetailsComponent } from "@/components/appartement-details";

export default function AppartementDetailsPage({ params }) {
  return <AppartementDetailsComponent id={params.id} />;
}
