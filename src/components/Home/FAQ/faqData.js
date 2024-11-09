// Define the FAQ data
const faqData = [
    {
      question: "What is KlevaKit?",
      answer: "KlevaKit is an all-in-one business tool designed to streamline your operations, boost productivity, and drive growth. It offers features like business brand generation, landing page creation, analytics, and more.",
      category: "General",
    },
    {
      question: "How much does KlevaKit cost?",
      answer: "KlevaKit offers various pricing tiers to suit different business needs. Our plans start from $19/month for basic features, with more advanced plans available for growing businesses and enterprises. Check our pricing page for detailed information.",
      category: "Pricing",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. This allows you to explore KlevaKit's features and determine which plan best suits your business needs.",
      category: "Pricing",
    },
    {
      question: "How secure is my data with KlevaKit?",
      answer: "We take data security very seriously. KlevaKit uses industry-standard encryption and security measures to protect your data. We are compliant with major data protection regulations and regularly undergo security audits.",
      category: "Security",
    },
    {
      question: "Can I integrate KlevaKit with other tools?",
      answer: "Yes, KlevaKit offers a wide range of integrations with popular business tools and platforms. Our API also allows for custom integrations to fit your specific needs.",
      category: "Features",
    },
    {
      question: "What kind of support does KlevaKit offer?",
      answer: "We provide 24/7 customer support via email and chat for all our paid plans. Our enterprise plans also include dedicated account managers and priority support.",
      category: "Support",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
      category: "Pricing",
    },
    {
      question: "Is KlevaKit suitable for small businesses?",
      answer: "KlevaKit is designed to scale with your business. Our basic plan is perfect for small businesses and startups, while our more advanced plans cater to larger organizations.",
      category: "General",
    },
  ];
  
  // Extract unique categories
  const faqCategories = Array.from(new Set(faqData.map(item => item.category)));
  
  export { faqData, faqCategories };
  