

const TermsAndConditions = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Terms and Conditions of FastTag
        </h1>
       <p className="text-gray-700 leading-relaxed">
  This page outlines the sample legal terms and conditions ("<strong>Terms & Conditions</strong>") under which <strong>SwiftTag Mobility Pvt. Ltd.</strong> issues and manages electronic toll payment tags ("<strong>FASTag</strong>") for vehicles registered in India. These tags enable automatic toll deduction via RFID technology across national highways and select state roads. By using our FASTag services through our website, mobile app, or authorized agents (collectively referred to as "<strong>Platform</strong>"), you agree to comply with these Terms. We simulate adherence to guidelines issued by the National Highways Authority of India (NHAI) and reserve the right to update these terms for demo purposes. For mock support inquiries, please contact our fictional helpdesk.
</p>
      </div>

  

      
      <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 px-6 py-3 text-sm font-medium text-white bg-rose-600 rounded-lg hover:bg-rose-700 transition-colors"
        >
          <span>↑</span>
          <span>Back to top</span>
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;