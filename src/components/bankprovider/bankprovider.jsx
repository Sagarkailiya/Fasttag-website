import React from 'react';

export default function BankProviderSection() {
  const banks = [
    { name: 'Indian Highways Management', logo: 'https://logiclead.in/assets/img/banking_logo/IHMCL-Logo.jpeg', shortName: 'Indian Highways...' },
    { name: 'IndusInd Bank', logo: 'https://logiclead.in/assets/img/banking_logo/7fb9c4ae317ff5a843b86d86042f6597.jpg', shortName: 'IndusInd Bank' },
    { name: 'Bank of Baroda', logo: 'https://logiclead.in/assets/img/banking_logo/eb55d100ee42369d2e984e3cb4758c76.jpg', shortName: 'Bank of Baroda' },
    { name: 'Axis Bank', logo: 'https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg', shortName: 'Axis Bank' },
    { name: 'IDFC FIRST Bank', logo: 'https://logiclead.in/assets/img/banking_logo/2dad745c5f2fdd1f341fd31ef4937a50.jpg', shortName: 'IDFC FIRST Bank' },
    { name: 'HDFC Bank', logo: 'https://logiclead.in/assets/img/banking_logo/3d0764bf519e0ae62a43f818f832ca11.jpg', shortName: 'HDFC  Bank' },
    { name: 'Kotak Mahindra Bank', logo: 'https://logiclead.in/assets/img/banking_logo/3adb17ad584e31a26d7f1119beb26c86.jpg', shortName: 'Kotak Mahindra...' },
    { name: 'Equitas', logo: 'https://logiclead.in/assets/img/banking_logo/51c53153e4a1ab4b735c213e62d7733f.jpg', shortName: 'Equitas' },
    { name: 'IDBI Bank', logo: 'https://logiclead.in/assets/img/banking_logo/6efb93f54538ebaf6c5251bc7a42713c.jpg', shortName: 'IDBI Bank' },
    { name: 'IOB', logo: 'https://logiclead.in/assets/img/banking_logo/97a2e9a37d151bf1729b96678a88e292.jpg', shortName: 'IOB' },
    { name: 'Jammu and Kashmir Bank', logo: 'https://logiclead.in/assets/img/banking_logo/55ba49c0871bbcfa6729799e4cdb466d.jpg', shortName: 'Jammu and Kashm...' },
    { name: 'Karnataka Bank', logo: 'https://logiclead.in/assets/img/banking_logo/15.webp', shortName: 'Karnataka Bank' },
    { name: 'Paytm Payments Bank', logo: 'https://logiclead.in/assets/img/banking_logo/8c6219ff367beac5f2730160a41aa897.jpg', shortName: 'Paytm Payments...' },
    { name: 'State Bank of India', logo: 'https://logiclead.in/assets/img/banking_logo/0986338cc1bd9659da9133bb4fc783a6.jpg', shortName: 'State Bank of I...' },
    { name: 'Federal Bank', logo: 'https://logiclead.in/assets/img/banking_logo/2a4242814a0f7cc956fc2d14c1c4af2c.jpg', shortName: 'Federal Bank' },
    { name: 'ICICI Bank', logo: 'https://logiclead.in/assets/img/banking_logo/13102943-icici-b9b38f77-216e-45f2-891b-edf7a7643433.webp', shortName: 'ICICI Bank' },
    { name: 'UCO Bank', logo: 'https://logiclead.in/assets/img/banking_logo/672b816d9405e17417c090fbb406ea6e.jpg', shortName: 'UCO Bank' },
    { name: 'Airtel Payments Bank', logo: 'https://logiclead.in/assets/img/banking_logo/1.webp', shortName: 'Airtel Payments...' },
    { name: 'Bank of Maharashtra', logo: 'https://logiclead.in/assets/img/banking_logo/1fd5be4d78777be064c80de62fda8136.jpg', shortName: 'Bank of Maharas...' },
    { name: 'Indian Bank', logo: 'https://logiclead.in/assets/img/banking_logo/66b5169c89ca2c55173cc4f3580418d1.jpg', shortName: 'Indian Bank' },
    { name: 'LivQuik Technology India', logo: 'https://logiclead.in/assets/img/banking_logo/livquik_logo.jpg', shortName: 'LivQuik Technol...' },
    { name: 'South Indian Bank', logo: 'https://logiclead.in/assets/img/banking_logo/b037d11999aed70e83657233c18675f6.jpg', shortName: 'South Indian Ba...' },
    { name: 'Union Bank of India', logo: 'https://logiclead.in/assets/img/banking_logo/18.png', shortName: 'Union Bank of I...' },
    { name: 'Canara Bank', logo: 'https://logiclead.in/assets/img/banking_logo/c1ef2e91b95eac43bc00afbd580d23a3.jpg', shortName: 'Canara Bank' },
    { name: 'AU Bank', logo: 'https://logiclead.in/assets/img/banking_logo/20.webp', shortName: 'AU Bank' },
    { name: 'Bandhan Bank', logo: 'https://logiclead.in/assets/img/banking_logo/4ae8ee4f8f839bab7ceb8501e4555763.jpg', shortName: 'Bandhan Bank' }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          FASTag Provider
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              
              <div className="relative flex flex-col items-center justify-center p-5 h-full min-h-[130px]">
                <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60"%3E%3Crect width="60" height="60" fill="%23e5e7eb"/%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <p className="text-xs font-semibold text-gray-800 text-center leading-tight group-hover:text-teal-700 transition-colors duration-300">
                  {bank.shortName}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}