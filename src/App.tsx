/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Award, 
  Stethoscope, 
  ShieldCheck, 
  Globe, 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronRight, 
  FileText, 
  Send, 
  Plane, 
  UserPlus, 
  Building2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Universities', href: '#universities' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="BMS International Consultants Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight leading-tight">
                BMS <span className="text-blue-600">International</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Consultants</span>
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Apply Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold mt-4"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Medical University Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-100 text-sm font-semibold mb-6 backdrop-blur-sm">
            Admissions Open for 2026 Intake
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Study MBBS in China 2026 – <span className="text-blue-400">Affordable & Recognized</span> Medical Universities
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of Pakistani students pursuing high-quality medical education in China. World-class facilities, English medium, and globally recognized degrees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95"
            >
              Apply Now <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/8615002663584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl active:scale-95"
            >
              <MessageCircle className="h-5 w-5 text-green-600" /> WhatsApp Us
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-900 object-cover"
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="Student"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-blue-100 text-sm">
              <span className="font-bold text-white">500+</span> Students successfully placed in 2025
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-600/10 blur-[120px] rounded-full -mb-20 -mr-20"></div>
    </section>
  );
};

const About = () => {
  const benefits = [
    {
      title: "Low Tuition Fee",
      description: "Highly affordable medical education compared to private colleges in Pakistan.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "English Medium",
      description: "Complete 6-year MBBS program taught entirely in English for international students.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Recognized Universities",
      description: "Degrees recognized by PMC (Pakistan Medical Commission), WHO, and WFME.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Safe Environment",
      description: "Extremely safe campus life with dedicated international student hostels.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: "Modern Hospitals",
      description: "Clinical practice in top-tier affiliated hospitals with advanced medical tech.",
      icon: <Stethoscope className="h-6 w-6" />,
    },
    {
      title: "Global Exposure",
      description: "Interact with students from all over the world in a multicultural environment.",
      icon: <Building2 className="h-6 w-6" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">About MBBS in China</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Gateway to a Global Medical Career</h3>
          <p className="text-slate-600 text-lg">
            China has become the top destination for Pakistani medical aspirants. With state-of-the-art infrastructure and globally ranked universities, it offers a world-class education at a fraction of the cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedUniversity = () => {
  return (
    <section id="universities" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Jining Medical University"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">6 Years</p>
                <p className="text-blue-100">Total Duration</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Featured University</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Jining Medical University</h3>
            <div className="flex items-center gap-2 text-slate-500 mb-6">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Shandong Province, China</span>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-500 text-sm mb-1">Tuition Fee</p>
                <p className="text-xl font-bold text-blue-900">18,000 RMB/Year</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-500 text-sm mb-1">Hostel Fee</p>
                <p className="text-xl font-bold text-blue-900">4,000 RMB/Year</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 font-medium">Recognized by PMC (A-Category), WHO, and USMLE.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 font-medium">Direct Admission in English Medium Program.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 font-medium">Advanced Labs and Research Centers.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-slate-700 font-medium">Halal Food and Prayer Facilities available on campus.</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              Apply to Jining Medical University <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Eligibility = () => {
  const criteria = [
    {
      title: "Academic Requirement",
      detail: "Minimum 60% Marks in FSc (Pre-Medical) or equivalent A-Levels.",
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "MDCAT Status",
      detail: "MDCAT is required as per the latest PMC/National Medical Authority guidelines.",
      icon: <FileText className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Age Limit",
      detail: "Applicant must be between 18 to 25 years of age at the time of admission.",
      icon: <Clock className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Legal Documents",
      detail: "Must possess a valid Passport and clean criminal record (Police Clearance).",
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <section id="eligibility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Eligibility Criteria</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Are You Eligible to Apply?</h3>
          <p className="text-slate-600">Check the basic requirements for MBBS admission in China for the 2026 session.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, index) => (
            <div key={index} className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all text-center">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeeStructure = () => {
  const fees = [
    { item: "Tuition Fee", cost: "$2,800 - $4,500", note: "Per Year" },
    { item: "Hostel Fee", cost: "$600 - $1,000", note: "Per Year" },
    { item: "Medical Insurance", cost: "$120", note: "Per Year" },
    { item: "Visa Extension", cost: "$60", note: "Per Year" },
    { item: "Medical Checkup", cost: "$80", note: "Once" },
    { item: "Total Annual Package", cost: "$3,500 - $5,500", note: "Approximate", highlight: true },
  ];

  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Fee Structure</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Affordable Medical Education</h3>
          <p className="text-blue-100">Transparent fee structure with no hidden charges. All fees are paid directly to the university.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/10">
                <th className="px-8 py-6 text-lg font-bold">Item</th>
                <th className="px-8 py-6 text-lg font-bold">Cost (USD)</th>
                <th className="px-8 py-6 text-lg font-bold">Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {fees.map((fee, index) => (
                <tr key={index} className={fee.highlight ? "bg-blue-600/30" : ""}>
                  <td className="px-8 py-6 font-medium">{fee.item}</td>
                  <td className={`px-8 py-6 font-bold ${fee.highlight ? "text-blue-300 text-xl" : ""}`}>{fee.cost}</td>
                  <td className="px-8 py-6 text-blue-200">{fee.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center mt-8 text-blue-200 text-sm italic">
          * Note: Fees are subject to change based on university policies and exchange rates.
        </p>
      </div>
    </section>
  );
};

const AdmissionProcess = () => {
  const steps = [
    {
      title: "Submit Documents",
      desc: "Send your FSc, Matric, and Passport copies for initial assessment.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Admission Letter",
      desc: "Receive your official admission letter from the university within 1-2 weeks.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Visa Application",
      desc: "We handle your JW202 form and visa application at the Chinese Embassy.",
      icon: <Send className="h-6 w-6" />,
    },
    {
      title: "Travel to China",
      desc: "Join our group flight with other students and our representative.",
      icon: <Plane className="h-6 w-6" />,
    },
    {
      title: "Registration",
      desc: "Complete your physical registration and start your medical journey.",
      icon: <UserPlus className="h-6 w-6" />,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Admission Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">5 Simple Steps to Your Dream</h3>
          <p className="text-slate-600">Our streamlined process ensures a hassle-free experience for students and parents.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "100% Visa Guidance", desc: "Expert handling of all documentation for a guaranteed visa success rate." },
    { title: "Official Partners", desc: "We are direct authorized representatives of top Chinese medical universities." },
    { title: "No Hidden Charges", desc: "Complete transparency in service charges and university fees." },
    { title: "Pre-Departure Briefing", desc: "Detailed guidance session for students and parents before flying." },
    { title: "Student Support in China", desc: "Our representatives are available in China to assist students 24/7." },
    { title: "Airport Pickup", desc: "Safe transportation from the airport to the university campus." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
<<<<<<< HEAD
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">BMS International: Pakistan's Most Trusted MBBS Consultancy</h3>
=======
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Pakistan's Most Trusted MBBS Consultancy</h3>
>>>>>>> f30b2100c1d4f8e34a2b001329bc7be91768da97
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900">{reason.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Students"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="text-slate-600 font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your inquiry! Our consultant will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', qualification: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get a Free Consultation</h2>
            <p className="text-blue-100 mb-12 text-lg">
              Fill out the form and our expert educational consultants will guide you through the best options for your medical career in China.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Call / WhatsApp</p>
                  <p className="text-xl font-bold">+86 150 0266 3584</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Email Us</p>
                  <p className="text-xl font-bold">info@chinambbs.pk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Visit Office</p>
                  <p className="text-xl font-bold">Office #12, Blue Area, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    placeholder="+92 300 0000000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Current Qualification</label>
                <select
                  required
                  value={formData.qualification}
                  onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                >
                  <option value="">Select Qualification</option>
                  <option value="FSc Pre-Medical">FSc Pre-Medical</option>
                  <option value="A-Levels">A-Levels</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  placeholder="Tell us about your preferences..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
<<<<<<< HEAD
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="BMS International Consultants Logo" 
                className="h-10 w-auto brightness-0 invert"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">BMS <span className="text-blue-500">International</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              BMS International Consultants: Empowering Pakistani students to achieve their dreams of becoming world-class doctors through affordable and quality education in China.
=======
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">China<span className="text-blue-500">MBBS</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering Pakistani students to achieve their dreams of becoming world-class doctors through affordable and quality education in China.
>>>>>>> f30b2100c1d4f8e34a2b001329bc7be91768da97
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About MBBS in China</a></li>
              <li><a href="#universities" className="hover:text-blue-400 transition-colors">Featured Universities</a></li>
              <li><a href="#eligibility" className="hover:text-blue-400 transition-colors">Eligibility Criteria</a></li>
              <li><a href="#process" className="hover:text-blue-400 transition-colors">Admission Process</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>Office #12, Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+86 150 0266 3584</span>
              </li>
              {/*
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>info@chinambbs.pk</span>
              </li>
*/}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Get latest updates about admission deadlines and scholarships.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
<<<<<<< HEAD
          <p>© 2026 BMS International Consultants. All Rights Reserved. Designed for Pakistani Students.</p>
=======
          <p>© 2026 China MBBS Admissions. All Rights Reserved. Designed for Pakistani Students.</p>
>>>>>>> f30b2100c1d4f8e34a2b001329bc7be91768da97
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <FeaturedUniversity />
      <Eligibility />
      <FeeStructure />
      <AdmissionProcess />
      <WhyChooseUs />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8615002663584"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100">
          Chat with Consultant
        </span>
      </a>
    </div>
  );
}
