import React, { useState, useRef, useEffect } from 'react';
import { generateJewelryDesign } from '../utils/gemini';
import { motion } from 'framer-motion';

const CustomDesign = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Welcome to Quattrec Studio. Describe your dream jewelry piece, and I will generate a concept design for you. (e.g. 'A rose gold necklace with a teardrop emerald')",
      image: null
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isGenerating]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isGenerating) return;

    const userPrompt = inputValue.trim();
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: userPrompt,
      image: null
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsGenerating(true);

    try {
      const result = await generateJewelryDesign(userPrompt);
      
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        text: result.error ? `Error: ${result.error}` : "Here is a concept based on your description:",
        image: result.imageUrl
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
       setMessages(prev => [...prev, {
         id: Date.now() + 1,
         sender: 'ai',
         text: "I'm sorry, there was an error communicating with the design engine.",
         image: null
       }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-12 px-6 max-w-5xl mx-auto flex flex-col">
      <div className="mb-8 text-center shrink-0">
        <h1 className="text-4xl text-gradient-gold font-display mb-4">AI Design Studio</h1>
        <p className="text-cream/70 max-w-2xl mx-auto">
          Collaborate with our AI to visualize your bespoke piece before it goes to our master artisans.
        </p>
      </div>

      <div className="flex-1 bg-black/40 border border-gold/20 rounded-2xl flex flex-col overflow-hidden backdrop-blur-md">
        
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] md:max-w-[60%] rounded-2xl p-4 ${
                  msg.sender === 'user' 
                    ? 'bg-gold/10 border border-gold/30 text-cream rounded-tr-none' 
                    : 'bg-black/60 border border-white/10 text-cream/90 rounded-tl-none'
                }`}
              >
                {msg.text && <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>}
                
                {msg.image && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 rounded-xl overflow-hidden border border-gold/20"
                  >
                    <img 
                      src={msg.image} 
                      alt="Generated Jewelry Concept" 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          ))}
          
          {isGenerating && (
            <div className="flex justify-start">
              <div className="bg-black/60 border border-white/10 rounded-2xl rounded-tl-none p-4 flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                <span className="text-sm text-gold/70 ml-2">Crafting your vision...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gold/20 bg-black/40">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="E.g., A vintage platinum ring with a sapphire center..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
              disabled={isGenerating}
            />
            <button
              type="submit"
              disabled={isGenerating || !inputValue.trim()}
              className="px-8 py-4 bg-gold text-black font-medium rounded-xl hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flexitems-center justify-center shrink-0"
            >
              Generate
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default CustomDesign;
