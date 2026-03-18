import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, ArrowRight, Star, Video, Film, Wand2, BookOpen, 
  CheckCircle2, Mail, MessageSquare, Menu, X,
  Instagram, Twitter, Youtube, Linkedin
} from 'lucide-react';

// --- Loading Screen ---
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-center">
        <motion.h1 
          className="font-serif text-4xl md:text-6xl text-white tracking-widest uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Max<span className="text-brand-gold">Kelvin</span>
        </motion.h1>
        <motion.div 
          className="mt-4 h-[1px] bg-brand-gold mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

// --- Navbar ---
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white">
          MAX<span className="text-brand-gold">KEL</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <a href="#services" className="text-gray-300 hover:text-brand-gold transition-colors">Services</a>
          <a href="#portfolio" className="text-gray-300 hover:text-brand-gold transition-colors">Portfolio</a>
          <a href="#process" className="text-gray-300 hover:text-brand-gold transition-colors">Process</a>
          <a href="#pricing" className="text-gray-300 hover:text-brand-gold transition-colors">Pricing</a>
          <a href="#contact" className="px-5 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 rounded-sm">
            Start Project
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Portfolio</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Process</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Pricing</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-brand-gold">Start Project</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// --- Hero Section ---
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/80 to-brand-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop" 
          alt="Cinematic editing setup" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-widest uppercase mb-6">
            MaxKel Motion
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6">
            Your Story Deserves <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light italic font-light">To Be Seen.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            We don't just edit videos. We craft cinematic experiences, compelling narratives, and visual masterpieces that captivate audiences and drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-sm hover:bg-white transition-colors flex items-center justify-center group">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center group">
              <Play className="mr-2 w-4 h-4 group-hover:text-brand-gold transition-colors" />
              View Showreel
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}

// --- Social Proof ---
function SocialProof() {
  return (
    <section className="py-20 bg-brand-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-10">Trusted by creators and brands worldwide</p>
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
          {['Youtube', 'Netflix', 'Spotify', 'Nike', 'Sony'].map((brand) => (
            <div key={brand} className="text-xl md:text-2xl font-serif font-bold tracking-wider">
              {brand}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Content Creator", text: "MaxKel transformed my raw footage into an absolute masterpiece. My engagement skyrocketed by 300% after our first project." },
            { name: "David Chen", role: "Marketing Director", text: "The cinematic quality they bring to commercial ads is unmatched. They don't just edit; they understand the psychology of selling." },
            { name: "Elena Rodriguez", role: "Event Organizer", text: "They captured the essence of our festival perfectly. The storytelling was so powerful it brought tears to our eyes." }
          ].map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-brand-dark border border-white/5 rounded-sm hover:border-brand-gold/30 transition-colors"
            >
              <div className="flex text-brand-gold mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Services ---
function Services() {
  const services = [
    { icon: <Video className="w-6 h-6" />, title: "Video Editing", desc: "High-retention editing for YouTube, Shorts, and social media that keeps viewers hooked from the first second." },
    { icon: <Film className="w-6 h-6" />, title: "Cinematography", desc: "Premium shooting and production for events, commercials, and brand documentaries." },
    { icon: <Wand2 className="w-6 h-6" />, title: "Motion Graphics", desc: "Custom animations, VFX, and dynamic text that elevate your visual identity and explain complex ideas." },
    { icon: <BookOpen className="w-6 h-6" />, title: "Storytelling", desc: "Script development and narrative structuring to ensure your video has a powerful, emotional core." }
  ];

  return (
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We combine technical precision with creative vision to deliver videos that don't just look good, but achieve your business goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-brand-black border border-white/5 hover:border-brand-gold/50 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150" />
              
              <div className="w-14 h-14 bg-brand-dark border border-white/10 flex items-center justify-center rounded-full text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
              
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-white group-hover:text-brand-gold transition-colors uppercase tracking-wider">
                Start Project <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Portfolio ---
function Portfolio() {
  const projects = [
    { title: "Neon Nights", category: "Commercial Ad", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" },
    { title: "The Creator Journey", category: "YouTube Documentary", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop" },
    { title: "Echoes of Time", category: "Short Film", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop" },
    { title: "Tech Launch 2026", category: "Motion Graphics", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Selected Works</h2>
            <p className="text-gray-400 max-w-xl">A glimpse into our visual storytelling. Every frame is crafted with intention.</p>
          </div>
          <a href="#" className="inline-flex items-center text-brand-gold hover:text-white transition-colors">
            View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-sm cursor-pointer bg-brand-dark"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-brand-gold/90 flex items-center justify-center text-brand-black pl-1">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-2xl font-serif font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Why Choose Us ---
function WhyChooseUs() {
  const points = [
    "Cinematic Quality Standard",
    "Lightning Fast Delivery",
    "Story-Driven Editing Approach",
    "Affordable Premium Value",
    "Obsessive Attention to Detail"
  ];

  return (
    <section className="py-24 bg-brand-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Editing Process" 
            className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Why Brands Trust MaxKel</h2>
          <div className="space-y-6">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-gold mr-4 shrink-0" />
                <span className="text-lg text-gray-300">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Process ---
function Process() {
  const steps = [
    { num: "01", title: "You Send Your Idea", desc: "Share your raw footage, script, or just a rough concept. We'll consult with you to understand the vision." },
    { num: "02", title: "We Craft the Story", desc: "Our team structures the narrative, selects the best takes, and builds a compelling timeline." },
    { num: "03", title: "We Edit & Polish", desc: "Color grading, sound design, VFX, and pacing adjustments are applied to achieve cinematic quality." },
    { num: "04", title: "You Receive a Masterpiece", desc: "We deliver the final cut. You review, we refine if needed, and your story is ready for the world." }
  ];

  return (
    <section id="process" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Workflow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A streamlined, frictionless process designed to take you from raw idea to polished masterpiece without the headache.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-[1px] bg-white/10 z-0" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-3xl font-serif font-bold text-brand-gold mb-8 mx-auto md:mx-0">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-400 text-center md:text-left text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Pricing ---
function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "Custom",
      desc: "Perfect for short-form content and simple YouTube edits.",
      features: ["Up to 5 mins final cut", "Basic Color Correction", "Standard Audio Mixing", "1 Revision", "3-5 Days Turnaround"],
      recommended: false
    },
    {
      name: "Standard",
      price: "Custom",
      desc: "Ideal for professional YouTube videos, podcasts, and ads.",
      features: ["Up to 15 mins final cut", "Cinematic Color Grading", "Advanced Sound Design", "Motion Graphics & Text", "3 Revisions", "5-7 Days Turnaround"],
      recommended: true
    },
    {
      name: "Premium",
      price: "Custom",
      desc: "For high-end commercials, documentaries, and brand films.",
      features: ["Unlimited length", "Hollywood-grade Color", "Custom VFX & Animation", "Script & Story Consulting", "Unlimited Revisions", "Priority Delivery"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Investment in Quality</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transparent packages tailored to your project's scope. We focus on value and ROI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-sm border ${tier.recommended ? 'bg-brand-black border-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-brand-black/50 border-white/10'} flex flex-col`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{tier.desc}</p>
              <div className="text-3xl font-bold text-white mb-8 pb-8 border-b border-white/10">{tier.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold mr-3 mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-4 text-center font-semibold transition-colors rounded-sm ${tier.recommended ? 'bg-brand-gold text-brand-black hover:bg-white' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                Order Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact & Final CTA ---
function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-brand-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Final CTA Text */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Ready to Turn Your Vision Into a <span className="text-brand-gold italic font-light">Powerful Story?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 font-light">
              Let's create something unforgettable. Reach out today to discuss your project, timeline, and how we can elevate your brand.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@maxkelmotion.com" className="flex items-center text-lg hover:text-brand-gold transition-colors">
                <div className="w-12 h-12 bg-brand-dark border border-white/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                hello@maxkelmotion.com
              </a>
              <a href="#" className="flex items-center text-lg hover:text-brand-gold transition-colors">
                <div className="w-12 h-12 bg-brand-dark border border-white/10 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-dark p-8 md:p-10 rounded-sm border border-white/5">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Project Type</label>
                <select className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option>YouTube Video Editing</option>
                  <option>Commercial / Ad</option>
                  <option>Documentary</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-black border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-sm hover:bg-white transition-colors mt-4">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-3xl font-bold tracking-wider text-white block mb-4">
              MAX<span className="text-brand-gold">KEL</span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              We Don't Just Edit Videos — We Tell Stories That Sell, Inspire & Captivate.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors"><Youtube className="w-6 h-6" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-gold transition-colors"><Linkedin className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} MaxKel Motion. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Main App Component ---
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-gold selection:text-brand-black">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <SocialProof />
          <Services />
          <Portfolio />
          <WhyChooseUs />
          <Process />
          <Pricing />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
