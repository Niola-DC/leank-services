import { CheckCircle } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate in a way that builds credibility and confidence with our partners, clients and stakeholders by being truthful, open and ethical."
    },
    {
      title: "Team Work",
      description: "We value collaboration, respect and support among our team members recognising that our collective efforts are essential to achieving our goals and delivering exceptional results"
    },
    {
      title: "Excellence",
      description: "We pursue Excellence in all aspects of our operations, continuously seeking improvement, innovation and best practices."
    }
  ];

  return (
    <section className="py-8 mt-2">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="px-4">
            <p className="text-blue-600 text-sm font-medium mb-2">CORE VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-600 mb-8">
              Every shipment we handle reflects our dedication to integrity, reliability, and continuous improvement in global logistics.
            </p>
            <div className="relative px-4 mt-4 lg:hidden">
              <div className="w-full h-100 flex items-center justify-center">
                <div className="text-center text-white">
                 <img src="/images/container.png" alt="Containers in Yard"/>
                </div>
              </div>
          </div>
            
            <div className="space-y-6 mb-4">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:flex relative px-4 mt-4 hidden">
              <div className="h-30 flex items-center justify-center">
                <div className="text-center text-white">
                 <img src="/images/container.png" alt="Containers in Yard"
                  className="h-full w-full object-contain"
                 />
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;