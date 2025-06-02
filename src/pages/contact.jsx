import ContactForm from "../components/ContactForm";
import HeroLayout from "../components/HeroLayout";
import IndustryExperienceSection from "../components/IndustryExSection";

const ContactPage = () => {
  return (
    <section className="relative">
      <HeroLayout
        title="Contact Us"
        subtitle="Redefining Logistics & Supply Chain Globally."
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 lg:px-8 py-6">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            <div className="">
              <img
              // src="/images/contact.png"
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Port with container cranes and shipping containers"
                className="max-w-4xl h-64 md:h-80 lg:h-102 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </HeroLayout>
      
      <div className="pt-0 md:pt-4 lg:py-6 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
         <ContactForm />
        </div>
      </div>
      <IndustryExperienceSection />
    </section>
  );
};

export default ContactPage;