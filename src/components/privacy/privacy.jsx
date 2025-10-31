

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
      <p className="text-gray-700 leading-relaxed">
  This page outlines the sample privacy policy ("<strong>Privacy Policy</strong>") for <strong>SwiftTag Mobility Pvt. Ltd.</strong>, a fictional provider of electronic toll payment tags ("<strong>FASTag</strong>"). We simulate responsible handling of user data collected via our website, mobile app, and authorized agents (collectively referred to as "<strong>Platform</strong>"). Personal information such as vehicle registration details, contact information, and transaction history may be used to facilitate toll payments, provide customer support, and improve service quality. For demonstration purposes, we assume compliance with applicable data protection laws including the Information Technology Act, 2000 and relevant rules. No real data is stored or processed. For mock inquiries, please contact our fictional privacy team.
</p>
<p className="text-gray-700 pt-3 leading-relaxed">
  For simulation purposes, we may collect non-personal metadata such as device type, browser version, and usage patterns to enhance the user experience across our Platform. This data is anonymized and used solely for illustrative analytics, performance monitoring, and interface optimization. No actual tracking or profiling occurs, and all interactions are fictional. Users interacting with this demo agree that any data shown or processed is synthetic and intended for testing or educational use only.
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

export default PrivacyPolicy;