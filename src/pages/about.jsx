import CallToAct from "../components/CallToAct";
import CoreValues from "../components/CoreValues";
import HeroLayout from "../components/HeroLayout";

const AboutPage = () => {
  return (
    <section className="w-full ">
      <HeroLayout
        title="About Us"
        subtitle="Redefining Logistics & Supply Chain Globally."
      >
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden max-w-3xl mb-4 mt-2">
          <div className="p-3 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative">
                {/* <div className="grid grid-cols-2 gap-4"> */}
                {/* <div className="space-y-4"> */}
                <img
                  src="/images/transportation.png"
                  alt="Container shipping yard"
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />

              </div>


              <div className="space-y-6 max-w-2xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">LEANKS</span>
                  <span className="text-sm text-gray-800 ml-2">
                    is an integrated Shipping Logistics and Supply Chain Management Company, specializing in end-to-end cargo operations, seamlessly connecting shipper to buyer and a trusted marine safety chandler supplying vessels with certified safety equipments and essential marine provisions. Operating with advanced supply chain visibility.
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroLayout>
      <div className="max-w-5xl mx-auto py-6 mt-4 px-8">
        <CoreValues />
        <CallToAct title=" Driving Tomorrow's" title2=" Logistics Today" para="
                    Leanks is here to make shipping easier with our powerful global network for seamless, secure deliveries worldwide" btn1="OUR SERVICES" btn2="ABOUT US" />
      </div>
    </section>


  );
};


export default AboutPage;