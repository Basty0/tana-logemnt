import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom
        </label>
        <Input type="text" id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input type="email" id="email" name="email" required className="mt-1" />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1"
        />
      </div>
      <Button type="submit">Envoyer</Button>
    </form>
  );
}
