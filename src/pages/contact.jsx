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
        {/* <div className="absolute left-1/2 transform -translate-x-1/2  px-4 lg:px-8 mt-4">
          <div className="bg-white bg-opacity-95 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div>
              <img
              // src="/images/truks.jpg"
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Port with container cranes and shipping containers"
                className="max-w-4xl h-64 md:h-80 lg:h-102 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div> */}
        <div className="overflow-hidden max-w-3xl mb-14 h-[300px]">
          <div className="p-3 pt-0 md:p-12">
         <div className="absolute left-1/2 transform -translate-x-1/2  px-4 lg:px-8">

            {/* <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"> */}
              <div className="relative items-center">
                {/* <div className="grid grid-cols-2 gap-4"> */}
                {/* <div className="space-y-4"> */}
                 <img
              // src="/images/truks.jpg"
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Port with container cranes and shipping containers"
                className="max-w-4xl h-64 md:h-80 lg:h-90 object-cover rounded-2xl"
                
                  // className="w-full h-64 object-cover rounded-lg shadow-lg"
                />

              </div>


              {/* <div className="space-y-6 max-w-2xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">LEANKS</span>
                  <span className="text-sm text-gray-800 ml-2">
                    is an integrated Shipping Logistics and Supply Chain Management Company, specializing in end-to-end cargo operations, seamlessly connecting shipper to buyer and a trusted marine safety chandler supplying vessels with certified safety equipments and essential marine provisions. Operating with advanced supply chain visibility.
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </HeroLayout>
      
      <div className="mt-6 lg:py-6 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
         <ContactForm />
        </div>
      </div>
      <IndustryExperienceSection />
    </section>
  );
};

export default ContactPage;