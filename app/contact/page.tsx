import { Metadata } from "next";
import ContactHeroBanner from "@/components/contact/ContactHeroBanner";
import ContactInfoStrip from "@/components/contact/ContactInfoStrip";
import ContactMainSection from "@/components/contact/ContactMainSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactCTABanner from "@/components/contact/ContactCTABanner";

export const metadata: Metadata = {
  title: "Contact Us | WeHo Auto Repair",
  description: "Get in touch with WeHo Auto Repair. Call or WhatsApp +1 (818) 425-8208, or visit our workshop at 6020 Santa Monica Blvd, Los Angeles, CA 90038, United States for auto repair, roadside assistance, and 24/7 towing services.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#110E10] min-h-screen font-sans text-white">
      
      {/* 1. Hero Banner */}
      <ContactHeroBanner 
        title="Contact" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]} 
      />

      {/* 2. Info Strip (Phone, Mail, Map) */}
      <ContactInfoStrip />

      {/* 3. Main Section (Info Panel + Form) */}
      <ContactMainSection />

      {/* 4. Map Section */}
      <ContactMapSection />

      {/* 5. CTA Banner */}
      <ContactCTABanner />

    </div>
  );
}
