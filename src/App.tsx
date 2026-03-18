/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2">
            <Logo className="h-14" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">About</a>
            <a href="#courses" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Courses</a>
            <a href="#testimonials" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Success Stories</a>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
              Enroll Now
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 -mr-2 text-slate-600 hover:text-orange-600 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              <a 
                href="#home" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-3 text-slate-600 font-semibold hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-3 text-slate-600 font-semibold hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all"
              >
                About
              </a>
              <a 
                href="#courses" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-3 text-slate-600 font-semibold hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all"
              >
                Courses
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsOpen(false)} 
                className="block px-4 py-3 text-slate-600 font-semibold hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all"
              >
                Success Stories
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="block w-full mt-4 bg-orange-600 text-white px-6 py-4 rounded-2xl font-bold text-center shadow-lg shadow-orange-200 active:scale-[0.98] transition-all"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-semibold text-sm mb-6">
              <Star className="w-4 h-4 fill-orange-700" />
              <span>Admissions Open for 2026-27</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Igniting Minds, <br />
              <span className="text-orange-600 italic">Empowering Future</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Join the most trusted coaching center where we nurture talent and guide students towards academic excellence and a bright professional future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#courses" className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Courses
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/student${i}/100/100`} 
                    alt="Student" 
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 font-medium">Trusted by 2,000+ Students</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/education/800/1000" 
                alt="Coaching Class" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-8 top-1/4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Results</p>
                  <p className="text-lg font-bold text-slate-900">98% Success Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -left-8 bottom-1/4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Expert Faculty</p>
                  <p className="text-lg font-bold text-slate-900">50+ Mentors</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Study Material",
      description: "Specially curated notes and practice papers designed by industry experts to simplify complex concepts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring every student gets the individual guidance they need to excel."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Consistent top rankers in board exams and competitive tests for over a decade."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Career Counseling",
      description: "Expert guidance for career paths beyond academics to help students find their true calling."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">Excellence in Every Lesson</p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don't just teach subjects; we build foundations for a lifetime of learning and achievement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange-600 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    {
      id: "primary",
      title: "Primary Program",
      grade: "Class 1st - 4th",
      features: ["Basic Numeracy", "Language Skills", "Creative Thinking", "Activity Based"],
      color: "bg-indigo-600"
    },
    {
      id: "preparatory",
      title: "Preparatory Program",
      grade: "Class 5th - 7th",
      features: ["School Exam Prep", "Olympiad Prep", "Concept Building", "Mental Math"],
      color: "bg-rose-600"
    },
    {
      id: "foundation",
      title: "Foundation Program",
      grade: "Class 8th - 10th",
      features: ["Board Exam Prep", "NTSE/Olympiad", "Basic Concepts", "Mental Ability"],
      color: "bg-blue-600",
      popular: true
    }
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Our Programs</h2>
            <p className="text-4xl font-extrabold text-slate-900">Tailored Learning Paths</p>
          </div>
          <a href="#courses" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Programs <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} id={course.id} className="relative group scroll-mt-24">
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="h-full bg-white rounded-3xl p-8 border border-slate-200 shadow-sm group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${course.color} opacity-5 -mr-16 -mt-16 rounded-full`} />
                
                <p className="text-slate-500 font-bold text-sm mb-2 uppercase tracking-wider">{course.grade}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{course.title}</h3>
                
                <ul className="space-y-4 mb-10">
                  {course.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className={`w-full py-4 rounded-2xl font-bold transition-all text-center block ${course.popular ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-100' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "IIT Bombay, 2025",
      text: "Rising Stars changed my perspective on learning. The teachers didn't just help me solve problems; they taught me how to think.",
      image: "https://picsum.photos/seed/rahul/100/100"
    },
    {
      name: "Priya Patel",
      role: "AIIMS Delhi, 2024",
      text: "The personalized attention I received here was unmatched. The mock tests were exactly like the real NEET exam.",
      image: "https://picsum.photos/seed/priya/100/100"
    },
    {
      name: "Ananya Gupta",
      role: "98.5% in CBSE Boards",
      text: "The study material is so well-structured that I didn't need any other books. Highly recommended for board prep!",
      image: "https://picsum.photos/seed/ananya/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Success Stories</h2>
          <p className="text-4xl font-extrabold text-slate-900">Hear From Our Stars</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative"
            >
              <div className="absolute -top-6 left-8">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-8">
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-orange-600 font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <p className="text-4xl lg:text-5xl font-extrabold text-white mb-8">Ready to Start Your Success Story?</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60">Call Us</p>
                  <p className="text-xl font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60">Email Us</p>
                  <p className="text-xl font-semibold">info@risingstars.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60">Visit Us</p>
                  <p className="text-xl font-semibold">123 Education Hub, Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Sent!</h3>
                <p className="text-slate-600">Thank you for your interest. Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Inquiry Form</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">Student Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="+91..." />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Select Course</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all">
                      <option>Primary Program (1-4)</option>
                      <option>Preparatory Program (5-7)</option>
                      <option>Foundation Program (8-10)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">Message (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Tell us more..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-100">
                    Submit Inquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Logo className="h-12" variant="dark" />
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering minds and igniting futures through quality education and dedicated mentorship since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#primary" className="hover:text-white transition-colors">Primary (1-4)</a></li>
              <li><a href="#preparatory" className="hover:text-white transition-colors">Preparatory (5-7)</a></li>
              <li><a href="#foundation" className="hover:text-white transition-colors">Foundation (8-10)</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Enroll Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Get updates on admissions and exams.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" />
              <button type="submit" className="bg-orange-600 p-2 rounded-lg hover:bg-orange-700 transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div className="text-center md:text-left">
            <p>© 2026 Rising Stars Coaching. All rights reserved.</p>
            <p className="mt-1 text-slate-600">Developed and Designed with ❤️ by Nihar Kamble</p>
          </div>
          <div className="flex gap-8">
            <a href="#contact" className="hover:text-white">Privacy Policy</a>
            <a href="#contact" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
