import certificate from "../../assets/img/certificate.png";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TrainerCertifictions({ trainer }) {
  const certs = trainer?.certifications && trainer.certifications.length > 0 
    ? trainer.certifications 
    : [
        { title: "NASM Certified Personal Trainer", org: "National Academy of Sports Medicine" },
        { title: "Certified Nutrition Specialist", org: "American Nutrition Association" }
      ];

  return (
    <>
      <div className="container w-10/12 mx-auto py-6 text-center">
        <h2 className="profile-heading">Certifications</h2>
        <p className="text-gray-400 my-4">
          Verified qualifications that demonstrate professional coaching
          expertise
        </p>
        <div className="certificate grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certs.map((cert, index) => (
            <Card key={index} className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-[#3A3A3A] border transition duration-300">
              <div className="overflow-hidden">
                <img
                  src={cert.image || certificate}
                  alt={cert.title || "certificate"}
                  className="aspect-video w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <CardHeader className="p-4 space-y-2">
                <CardTitle className="text-white text-base font-semibold leading-snug hover:text-primary transition-colors duration-300">
                  {cert.title || cert.name || cert.org}
                </CardTitle>

                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  {cert.org || cert.organization || "Certified Institution"}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
