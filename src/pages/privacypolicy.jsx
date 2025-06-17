import React, { useRef } from 'react';
// import Heading from '../components/core/Headings';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';

const PrivacyPolicyPage = () => {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="w-full max-w-7xl relative">
       <PageLayout >
                <div className='h-[400px] mt-20'>
                       <h1 className='text-5xl text-center font-semibold text-white mb-4'>Privacy Policy</h1>

               
                  <h2 className="text-white text-2xl lg:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 mx-14 text-center">Your Privacy is Our Priority</h2>
                </div>
            </PageLayout>

     
      



      <div className="bg-white px-8 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
        <p className="mb-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Your privacy is top-most priority to us at Leanks Services. We respect your privacy regarding any information we may collect from you across our website.
        </p>
        <p className="mb-4">
          Leanks Innovation Services, as the data collector, ("we" “us” “our”) are committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
        </p>
        <p className="mb-4">
          Please read the following carefully to understand  how we collect, use, and protect your personal data when you use our services or website.
          By visiting leankservice.com  you are accepting and consenting to the practices described in this policy.
        </p>
        <p className="mb-4">
          Please note that by clicking the “Connect with Facebook” button you are agreeing that Facebook may share personal data held by them with us.
        </p>
        <p className="mb-4">
          The collection and processing of your personal data is in accordance with the National Information Technology Development Agency Act 2007 (the “Act”), Nigeria Data Protection Regulation 2019 (the “Regulations”) and the provisions and prescriptions of Section 5; Part 1 and Part 2 of National Information Systems and Network Security Standards and Guidelines.

        </p>

        <h5 className="text-lg font-semibold mt-6">1.0 Information We Coolect Us:</h5>
        <div className="mt-2 mb-4">
          <p>We may collect:</p>

          <ul>
            <li>
              Business and contact information (name, email, phone, address)

            </li>
            <li>
              Shipping and logistics data (cargo details, destination, customs information)

            </li>
            <li>
              Financial data (invoices, bank details when necessary for payments)

            </li>
            <li>
              Technical data (IP address, browser type, usage statistics from our website)

            </li>
          </ul>
        </div>




        <h5 className="text-lg font-semibold mt-6">2.0 Information We Receive From Others:</h5>
        <h5 className="text-lg font-semibold mt-6">Cookies:</h5>
        <p className="mt-2 mb-4">
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By visiting our website, you consent to the placement of cookies and beacons in your browser and HTML-based emails in accordance with this Privacy Policy.
        </p>

        <h5 className="text-lg font-semibold mt-6">Uses Made of the Information:</h5>
        <p className="mt-2 mb-4">
          We use information held about you in the following ways:
        </p>

        <h5 className="text-lg font-semibold mt-6">i. Information You Give Us:</h5>
        <p>
          We will use your information in the following ways and in each case, we note the lawful basis under the Nigerian Data Protection Regulations which we rely on to use your information:
        </p>
        <p>
          <b>a.</b> Provide and manage freight forwarding and marine supply services
          <br />
        </p>
        <p>
          <b>b.</b> Respond to inquiries and requests
          <br />
        </p>
        <p>
          <b>c.</b> Process transactions<br />
          Lawful basis- Contract performance
        </p>
        <p>
          <b>d.</b>
          Comply with legal obligations
          <br />
          Lawful basis- Legal obligation
        </p>
        <p>
          <b>e.</b> Improve our website and services
          <br />
          Lawful basis: Consent
        </p>
        <h5 className="text-lg font-semibold mt-6">2. Information We Collect About You: </h5>
        <p className="mt-2 mb-4">
          We do not sell your data. We may share your information with:
        </p>
        <p className="mt-2 mb-4">
          a. Customs and port authorities.

        </p>
        <p className="mt-2 mb-4">
          b. Shipping partners and agents
 (depending on the types of information we receive).
        </p>
        <p className="mt-2 mb-4">
          c.IT and accounting service providers

        </p>
        <p className="mt-2 mb-4">
          d.Regulatory bodies if required by law


        </p>

        <h5 className="text-lg font-semibold mt-6">3. Information Collected When You Use Our Services:</h5>
        <p className="mt-2 mb-4">
       We implement physical, electronic, and managerial measures to protect your data. However, no method of transmission over the internet is 100% secure.

        </p>
        <p className="mt-2 mb-4">

        We retain your data only as long as necessary to fulfill the purposes outlined or to comply with legal and tax requirements.
        </p>
        <p className="mt-2 mb-4">
          You have the right to:

        </p>
        <ul>
          <li>– Access, correct, or delete your personal data
Object to or restrict certain data processing
Withdraw consent at any time (if applicable)
To exercise your rights, please contact us at 

          </li>
          <li>– 
            Our website may use cookies for analytics and to improve user experience. You may disable cookies in your browser settings.

          </li>
          <li>– 
            We may update this Privacy Policy periodically. The most current version will always be available on our website.
          </li>
         
        </ul>
        

        <h5 className="text-lg font-semibold mt-6">Contact:</h5>
        <p className="mt-2 mb-4">
          Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to Payskul via the in-app support feature on the mobile application or using the complaint tab on the web portal at <a href='https://www.leankservices.com/'>leankservices.com</a>.
        </p>

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

export default PrivacyPolicyPage;
