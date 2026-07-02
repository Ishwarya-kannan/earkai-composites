import { contact } from "@/data/contact";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600">
            Get in touch with our team for product enquiries and technical support.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-3xl">
          <CardContent className="space-y-6 p-8">

            <div>
              <h3 className="font-semibold text-green-700">Address</h3>
              <p>{contact.address}</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Phone</h3>
              <p>{contact.phone}</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Email</h3>
              <p>{contact.email}</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Website</h3>
              <p>{contact.website}</p>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">Working Hours</h3>
              <p>{contact.workingHours}</p>
            </div>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}