
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stamp, Library, Fingerprint, Users2, 
  HeartHandshake, ShieldAlert, Award, 
  ArrowRight, Sparkles, Lightbulb, 
  LineChart, Network, Zap, Mountain, 
  Trophy, Star, Handshake, Leaf, Verified,
  Scale, Shield
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* 1. HERO SECTION – ABOUT US with 3D FLOATING ELEMENTS */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-primary text-white overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-1316b34460d9?auto=format&fit=crop&q=80&w=2000" 
            alt="About Preciseo Tax Services Inc – IRS Enrolled Agent Team"
            className="w-full h-full object-cover opacity-10 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
        </div>

        {/* 3D FLOATING ELEMENTS LAYER */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* 3D Abstract Ring 1 */}
          <div className="absolute top-20 right-[15%] w-64 h-64 border-[20px] border-white/5 rounded-full animate-float blur-[2px]"></div>
          
          {/* 3D Abstract Cube/Shape */}
          <div className="absolute bottom-20 left-[10%] w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rotate-45 rounded-2xl animate-float-delayed blur-[1px]"></div>
          
          {/* Floating 3D Shield Graphic */}
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 hidden lg:block animate-float-slow">
            <svg width="240" height="280" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] opacity-40">
              <path d="M120 0L20 44.4444V111.111C20 172.667 62.6667 230.222 120 244.444C177.333 230.222 220 172.667 220 111.111V44.4444L120 0Z" fill="url(#shield_grad)" />
              <path d="M120 20L40 55.5556V111.111C40 161.111 74 208.889 120 222.222C166 208.889 200 161.111 200 111.111V55.5556L120 20Z" fill="white" fillOpacity="0.05" />
              <defs>
                <linearGradient id="shield_grad" x1="120" y1="0" x2="120" y2="244.444" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E84545" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#E84545" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Floating 3D Spheres */}
          <div className="absolute top-1/4 left-[5%] w-8 h-8 bg-accent/20 rounded-full animate-bounce-slow blur-sm"></div>
          <div className="absolute bottom-1/4 right-[20%] w-12 h-12 bg-white/10 rounded-full animate-float blur-[1px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-5 py-2 rounded-full text-secondary font-black text-xs uppercase tracking-widest">
              <Verified className="w-4 h-4 mr-2" />
              Established Authority
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black font-heading leading-tight tracking-tighter">
              About Preciseo <br />
              <span className="text-secondary italic">Tax Services Inc</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium">
              IRS Enrolled Agents with 5+ Years of Professional U.S. Tax Experience. We bridge the gap between complex tax laws and your financial success.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl group transition-all hover:bg-white/10">
                <Award className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50">Credential</p>
                  <p className="font-bold text-lg leading-none">IRS Enrolled Agent</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl group transition-all hover:bg-white/10">
                <Stamp className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/50">Rights</p>
                  <p className="font-bold text-lg leading-none">Unlimited Representation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* 2. WHO WE ARE with 3D DEPTH */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background abstract shape */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
           <div className="absolute top-[20%] right-[-10%] w-[40%] aspect-square bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl card-3d border-8 border-background-soft group">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" 
                  alt="Strategic Tax Consultation Room" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-secondary">Expert Consultation</p>
                  <p className="text-2xl font-black">Strategic Advisory Environment</p>
                </div>
              </div>
              {/* 3D Document Placeholder Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 glass rounded-3xl shadow-2xl flex items-center justify-center text-primary animate-float-delayed">
                <Library size={48} />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
              <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Foundational Integrity</h2>
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-primary leading-tight">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Preciseo Tax Services Inc is a U.S.-based tax services firm dedicated to helping individuals, self-employed professionals, and businesses navigate the complexities of the U.S. tax system with confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of hands-on experience, our team specializes in accurate tax filing, IRS compliance, and proactive tax planning. We focus on delivering reliable solutions that reduce risk and ensure compliance.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                 <div className="p-6 bg-background-soft rounded-3xl border border-gray-100 group hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-1">
                    <Users2 className="text-primary w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-primary">Focused Expert Team</p>
                    <p className="text-sm text-gray-500">Dedicated Professionals</p>
                 </div>
                 <div className="p-6 bg-background-soft rounded-3xl border border-gray-100 group hover:border-secondary transition-all hover:shadow-xl hover:-translate-y-1">
                    <HeartHandshake className="text-secondary w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-primary">Client-First Advisory</p>
                    <p className="text-sm text-gray-500">Built on Integrity</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CREDENTIALS with 3D Badge */}
      <section className="py-24 bg-background-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-xl animate-float-delayed border border-gray-50">
                 <Scale size={32} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-primary leading-tight">Federally Authorized IRS Enrolled Agents</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As IRS Enrolled Agents (EA), we are federally licensed tax practitioners authorized to represent taxpayers before the Internal Revenue Service. Unlike unlicensed preparers, Enrolled Agents have unlimited practice rights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Nationwide Support",
                  "Audit Representation",
                  "Appeals Representation",
                  "IRS Notice Resolution"
                ].map((text, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    <span className="font-bold text-primary">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
               <div className="relative w-full max-w-sm aspect-square bg-white rounded-[4rem] shadow-2xl flex flex-col items-center justify-center border border-gray-100 p-12 overflow-hidden group hover:scale-[1.02] transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  {/* Visual Authority Icon with 3D depth styling via Lucide */}
                  <div className="relative">
                    <Library size={80} className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary/10 rounded-full animate-pulse-soft blur-md"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-2">Authority Standard</p>
                    <p className="text-2xl font-black text-primary leading-tight">Elite Federal <br /> Credentials</p>
                  </div>
               </div>
               {/* 3D Abstract floating accent around the credential badge */}
               <div className="absolute -top-10 right-0 w-24 h-24 border-2 border-primary/10 rounded-full animate-float blur-[1px]"></div>
               <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-lg rotate-12 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERIENCE with 3D Charts */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6 relative order-2 lg:order-1">
               <div className="space-y-6 pt-12">
                  <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center group hover:bg-primary-light transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <LineChart size={48} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-4xl font-black">5+</p>
                    <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Experience Years</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="bg-background-soft p-10 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all">
                    <Zap size={48} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-3xl font-black text-primary text-nowrap">Fast & Accurate</p>
                  </div>
                  <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-200 flex flex-col items-center text-center group hover:shadow-secondary/10 transition-all">
                    <Network size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-3xl font-black text-primary">Nationwide</p>
                  </div>
               </div>
               {/* 3D Floating Element in the middle of grid */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 glass rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Star size={32} className="text-secondary" />
               </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Deep Market Insight</h2>
              <h2 className="text-4xl lg:text-5xl font-black font-heading text-primary leading-tight">5+ Years of Proven Tax Expertise</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With more than five years of professional experience, Preciseo Tax Services Inc has successfully supported clients across a wide range of tax needs—from simple individual returns to complex business and international reporting.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-secondary pl-6 font-medium">
                "Our experience allows us to identify issues early, apply correct tax strategies, and ensure filings are accurate and timely."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MISSION & VALUES with 3D Abstract Icons */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract 3D geometric background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-5%] w-[30%] aspect-square border-[1px] border-white/5 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-0 left-[-5%] w-[40%] aspect-square border-[1px] border-white/5 rounded-full animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Strategic Purpose</h2>
            <h2 className="text-4xl lg:text-5xl font-black font-heading">Our Mission & Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Accuracy", desc: "Precision in every calculation.", icon: Mountain },
              { title: "Integrity", desc: "Ethics before everything.", icon: Trophy },
              { title: "Compliance", desc: "Rigorous adherence to laws.", icon: Star },
              { title: "Client Care", desc: "Personalized tax strategies.", icon: Handshake },
              { title: "Security", desc: "Advanced data protection.", icon: Leaf }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 group hover:bg-white hover:border-transparent transition-all flex flex-col items-center text-center h-full hover:shadow-[0_25px_50px_-12px_rgba(232,69,69,0.3)]">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                  <value.icon size={28} />
                </div>
                <h4 className="font-black text-white text-sm uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-primary/70 transition-colors">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-background-soft rounded-[4rem] p-12 lg:p-24 text-center space-y-10 relative overflow-hidden shadow-sm border border-gray-100">
              {/* Floating 3D Target Graphic */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 rounded-full blur-[60px] animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/5 rounded-full blur-[60px] animate-pulse"></div>
              
              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <div className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl animate-float">
                  <Fingerprint size={40} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight text-primary">Work with Trusted IRS Enrolled Agents</h2>
                <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                  Partner with experienced IRS Enrolled Agents who put accuracy and compliance first. Let us handle the complexity while you focus on growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-3xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
