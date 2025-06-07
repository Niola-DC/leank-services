import React, { useRef } from 'react';
import HeroLayout from '../components/HeroLayout';
import { ChevronDownIcon } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const TermsPage = () => {
      const bottomRef = useRef(null);
    
      const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
    return (

        <section className="w-full max-w-7xl mx-auto md:w-full relative">
            <PageLayout >
                <div className='h-[400px]'>
                    <h1 className="text-white text-center text-3xl lg:text-5xl font-semibold  md:text-4xl mb-4">
                    Terms & Conditions
                </h1>

                <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center mx-14">
                    Leanks Innovation Service's Term of Use
                </h2>
                </div>
            </PageLayout>



            <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
                         <p className="mb-4 text-left text-base sm:text-lg text-black max-w-3xl mx-auto leading-relaxed sm:mx-10">
                    These Terms and Conditions  govern your use of the services provided by Leanks Innovation Services including freight forwarding, logistics management, and marine supply services.

                </p>

                <p className="text-gray-700">
                    By engaging our services, you agree to be bound by these Terms.
                </p>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Services</h3>
                    <p className="text-gray-700">
                        We provide freight forwarding, customs brokerage, warehousing, marine supplies, ship chandling, cargo haulage and other related logistics services. The scope, duration, and cost of services will be as per individual contracts or quotations.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800"> Quotes and Pricing
                    </h3>
                    <p className="text-gray-700">
                        Quotes are valid for 14 days unless otherwise stated. Pricing is subject to change based on fuel surcharges, port fees, and customs regulations. Final charges may vary depending on actual shipment weight, volume, and conditions.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800">  Booking and Cancellations
                    </h3>
                    <p className="text-gray-700">
                        All service bookings must be confirmed in writing. Cancellations made less than 48 hours of the scheduled service may incur a cancellation fee.
                    </p>

                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Liabilities and Limitations
</h3>
                    <p className="text-gray-700">
                        We are not liable for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            Delays caused by customs, weather, or port authority issues.

                        </li>
                        <li>
                            Loss, damage, or theft once cargo is out of our custody and control unless due to our proven negligence.

                        </li>
                        <li>
                            Any indirect, incidental, or consequential damages
                        </li>
                        <li>
                            For freight forwarding, liability is limited as per the applicable conventions (e.g., Hague-Visby Rules, CMR Convention, or local governing regulations).

                        </li>
                    </ul>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Insurance</h3>
                    <p className="text-gray-700">
                       Insurance is not included unless specifically requested in writing and confirmed by us. Customers are advised to arrange adequate insurance coverage.

                    </p>
                </div>

                <div className="space-y-4 mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Compliance</h3>
                    <p className="text-gray-700">
                        Clients are responsible for providing accurate documentation and complying with all applicable import/export regulations. The Company reserves the right to refuse service for any cargo suspected to be illegal, hazardous, or misdeclared.

                    </p>
                     <h3 className="text-xl font-semibold text-gray-800">Payment Terms</h3>
                    <p className="text-gray-700">
                        Unless otherwise agreed in writing, payment is due within [14] days from invoice date. Late payments may incur interest and collection fees.
                    </p>
                    
                </div>

                
            </div>
            <button
        onClick={scrollToBottom}
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition duration-300">
        {/* <FaArrowDown size={24} /> */}
        <ChevronDownIcon fontSize={24} width={24} />
      </button>

      {/* Bottom Reference */}
      <div ref={bottomRef} className="mt-10"></div>
        </section>
    );
};

export default TermsPage;