"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const OgulaChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Ogula, your Afriikanet assistant. How can I help you today?\n\nWe offer 24/7 support and 99.9% uptime! 🌟",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = documentHeight - scrollTop - windowHeight;
      
      // Show when near top or near bottom, hide in middle
      if (scrollTop < 100 || scrollBottom < 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const systemInfo = {
    name: "Afriikanet",
    type: "ISP Billing System",
    uptime: "99.9%",
    users: "50,000+",
    isps: "500+",
    support: "24/7",
    features: [
      "Automated Billing & Invoicing",
      "Customer Portal",
      "Real-time Analytics",
      "Network Integration (Mikrotik, Ubiquiti)",
      "CRM System",
      "Support Tickets",
      "M-Pesa Integration",
      "Multi-language Support (English, Swahili)"
    ],
    pricing: {
      starter: "KSh 1,000/month (up to 100 users)",
      professional: "KSh 2,500/month (up to 500 users)",
      enterprise: "Custom pricing"
    },
    company: {
      ceo: "Hamisi Yusuf Suleiman",
      cto: "Abdi Mohammed",
      operations: "Fatma Ali"
    }
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! Welcome to Afriikanet. I'm Ogula, your virtual assistant. How can I help you explore our ISP billing system?";
    }

    if (lowerInput.includes('what is') && (lowerInput.includes('afriikanet') || lowerInput.includes('about'))) {
      return "Afriikanet is a next-generation ISP Billing System designed specifically for African Internet Service Providers. It offers automated billing, customer management, real-time analytics, and seamless network integration.";
    }

    if (lowerInput.includes('feature') || lowerInput.includes('what can') || lowerInput.includes('do')) {
      return `Afriikanet offers:\n${systemInfo.features.map(f => `• ${f}`).join('\n')}\n\nWould you like more details on any specific feature?`;
    }

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('plan')) {
      return `Our pricing plans:\n• Starter: ${systemInfo.pricing.starter}\n• Professional: ${systemInfo.pricing.professional}\n• Enterprise: ${systemInfo.pricing.enterprise}\n\nWhich plan interests you?`;
    }

    if (lowerInput.includes('uptime') || lowerInput.includes('reliability')) {
      return `Afriikanet guarantees ${systemInfo.uptime} uptime SLA, ensuring your billing operations run smoothly 24/7.`;
    }

    if (lowerInput.includes('user') || lowerInput.includes('customer') || lowerInput.includes('client')) {
      return `Afriikanet currently manages ${systemInfo.users} active users across ${systemInfo.isps} ISPs worldwide.`;
    }

    if (lowerInput.includes('support') || lowerInput.includes('help') || lowerInput.includes('contact')) {
      return `We provide ${systemInfo.support} support for all our customers. You can reach us through the contact page or email support@afriikanet.com.`;
    }

    if (lowerInput.includes('payment') || lowerInput.includes('mpesa') || lowerInput.includes('bank')) {
      return "Afriikanet supports multiple payment methods including M-Pesa, bank transfers, and other popular African payment gateways.";
    }

    if (lowerInput.includes('integration') || lowerInput.includes('router') || lowerInput.includes('mikrotik') || lowerInput.includes('ubiquiti')) {
      return "Afriikanet seamlessly integrates with Mikrotik, Ubiquiti, and other routers for automatic bandwidth management and network monitoring.";
    }

    if (lowerInput.includes('demo') || lowerInput.includes('trial') || lowerInput.includes('free') || lowerInput.includes('try')) {
      return "We offer free quotes and consultations! Click the 'Get Free Quote' button in the hero section to get started. You can also contact us directly for a personalized demo.";
    }

    if (lowerInput.includes('team') || lowerInput.includes('who') || lowerInput.includes('ceo') || lowerInput.includes('founder') || lowerInput.includes('lead')) {
      return `Our leadership team:\n• CEO: ${systemInfo.company.ceo}\n• CTO: ${systemInfo.company.cto}\n• Operations Manager: ${systemInfo.company.operations}\n\nWould you like to learn more about our team?`;
    }

    if (lowerInput.includes('language') || lowerInput.includes('swahili') || lowerInput.includes('local')) {
      return "Afriikanet supports multiple languages including English and Swahili, making it accessible to users across Africa.";
    }

    return `That's a great question about Afriikanet! As your ISP billing assistant, I can help with:\n
• System features and capabilities
• Pricing and plans
• Uptime and reliability (${systemInfo.uptime})
• User management (${systemInfo.users})
• Payment integrations
• Technical support
• Team information

What would you like to know more about?`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputValue('');
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'rotate-90' : ''}`}
        >
          <Icon icon={isOpen ? 'heroicons:x-mark' : 'solar:chatbot-bold'} className="text-2xl" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon icon="solar:bot-bold" className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Ogula</h3>
                  <p className="text-white/80 text-sm">Afriikanet Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <Icon icon="heroicons:x-mark" className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-amber-500 text-white rounded-br-md'
                      : 'bg-white border border-slate-200 rounded-bl-md shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-slate-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Afriikanet..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center justify-center hover:shadow-lg transition-all"
              >
                <Icon icon="heroicons:paper-airplane" className="text-lg" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default OgulaChatbot;
