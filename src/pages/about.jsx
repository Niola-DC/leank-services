import HeroLayout from "../components/HeroLayout";

const AboutPage = () => {
  return (
    <HeroLayout
      title="About Us" 
      subtitle="Redefining Logistics & Supply Chain Globally."
    >
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
                    alt="Container shipping yard"
                    className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-lg"
                  />
                  <div className="bg-blue-900 p-4 sm:p-6 rounded-lg shadow-lg">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z" />
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5v10h10V5H5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Maersk containers"
                    className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-blue-600">LEANKS</span>
                <span className="text-lg sm:text-xl text-gray-700 ml-2">
                  is an integrated Shipping Logistics and Supply Chain Management Company, specializing in end-to-end cargo operations, seamlessly connecting shipper to buyer and a trusted marine safety chandler supplying vessels with certified safety equipments and essential marine provisions. Operating with advanced supply chain visibility.
                </span>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Global Reach</h4>
                  <p className="text-gray-600 text-sm">Connecting markets worldwide with efficient logistics solutions.</p>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Safety First</h4>
                  <p className="text-gray-600 text-sm">Certified marine safety equipment and provisions for all vessels.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
};


export default AboutPage;