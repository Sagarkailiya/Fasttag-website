import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is FASTag?',
      answer: 'FASTag is a prepaid tag fixed on your vehicle\'s windscreen that enables automatic toll payment at toll plazas using RFID technology.'
    },
    {
      question: 'How can I recharge my FASTag on FastTag?',
      answer: 'Simply enter your vehicle/FASTag details, choose a recharge amount, select your payment method (UPI, card, net banking), and complete the payment.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'FastTag supports UPI, debit/credit cards, net banking, and popular digital wallets.'
    },
    {
      question: 'Is there any minimum recharge amount?',
      answer: 'Yes, the minimum recharge amount depends on the issuing bank, but on FastTag, you can start from as low as ₹100.'
    },
    {
      question: 'How long does it take for the recharge to reflect?',
      answer: 'Recharges are usually credited instantly, but in rare cases, it may take up to 30 minutes depending on the bank network.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200  cursor-pointer "
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-5 pt-0 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}