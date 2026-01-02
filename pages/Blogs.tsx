
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  FileText, 
  ShieldCheck, 
  AlertCircle, 
  CheckSquare, 
  Globe, 
  CreditCard, 
  Briefcase, 
  ChevronRight,
  TrendingUp,
  Sparkles,
  Layers,
  PieChart,
  Target,
  FileSearch
} from 'lucide-react';

const Blogs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredPost = {
    id: 'f1',
    title: 'Major IRS & U.S. Tax Law Updates Every Taxpayer Must Know',
    excerpt: 'Recent changes in U.S. tax laws and IRS regulations can significantly impact how individuals and businesses file their taxes. In this article, our IRS Enrolled Agents break down the most important federal tax bill updates, what has changed, and how taxpayers should prepare to remain compliant and avoid penalties.',
    date: 'Oct 24, 2023',
    readTime: '8–10 min read',
    category: 'IRS UPDATES',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
    topics: [
      'New IRS enforcement and compliance measures',
      'Changes affecting individual taxpayers',
      'Business tax reporting updates',
      'Penalties, credits, and filing deadlines',
      'What these updates mean for 2024 and beyond'
    ],
    author: 'Preciseo Tax Services Inc',
    expertise: 'IRS Enrolled Agent Review'
  };

  const secondaryFeatured = [
    {
      id: 'f2',
      title: 'How IRS Enrolled Agents Protect You During Audits',
      date: 'Oct 20, 2023',
      category: 'Compliance',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      id: 'f3',
      title: 'Common Tax Filing Errors and How to Avoid Them',
      date: 'Oct 15, 2023',
      category: 'Filing Tips',
      imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
      icon: <AlertCircle className="w-5 h-5" />
    }
  ];

  const gridPosts = [
    {
      id: '1',
      title: 'Individual Tax Filing Checklist',
      excerpt: 'Ensure you have every document ready. Our comprehensive checklist covers W-2s, 1099s, and more.',
      category: 'Personal Tax',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      icon: <CheckSquare className="text-secondary" />
    },
    {
      id: '2',
      title: 'Business Tax Deductions Explained',
      excerpt: 'Maximize your business savings by understanding which expenses are legally deductible under current IRS law.',
      category: 'Business',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      icon: <Briefcase className="text-secondary" />
    },
    {
      id: '3',
      title: 'FBAR & FATCA Reporting Requirements',
      excerpt: 'Navigating international asset reporting can be complex. Learn the thresholds and deadlines for global income.',
      category: 'International',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
      icon: <Globe className="text-secondary" />
    },
    {
      id: '4',
      title: 'ITIN Application Process Simplified',
      excerpt: 'A step-by-step guide for non-residents needing an Individual Taxpayer Identification Number.',
      category: 'ITIN',
      imageUrl: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=800',
      icon: <CreditCard className="text-secondary" />
    },
    {
      id: '5',
      title: 'Payroll Compliance for Small Businesses',
      excerpt: 'Avoid costly penalties by mastering payroll tax withholding and quarterly reporting standards.',
      category: 'Payroll',
      imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800',
      icon: <Layers className="text-secondary" />
    },
    {
      id: '6',
      title: 'Tax Planning Strategies for Long-Term Savings',
      excerpt: 'Proactive tax planning is the key to wealth preservation. Discover strategies for the years ahead.',
      category: 'Planning',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
      icon: <TrendingUp className="text-secondary" />
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary text-white overflow-hidden">
        {/* Subtle 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 right-[10%] w-32 h-32 border-4 border-white/5 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-1/4 left-[5%] w-24 h-24 bg-white/5 rotate-12 rounded-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 Q25,50 50,100 T100,100" fill="none" stroke="white" strokeWidth="0.1" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center bg-secondary/20 border border-secondary/30 px-4 py-1.5 rounded-full text-secondary text-xs font-black uppercase tracking-widest">
              Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading leading-[1.1] tracking-tight">
              U.S. Tax Insights, <br />
              <span className="text-accent">Updates</span> & Expert Guidance
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl font-medium">
              Stay informed with expert insights from IRS Enrolled Agents. Our blog covers U.S. tax updates, compliance tips, and practical guidance to help individuals and businesses make confident tax decisions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLES SECTION */}
      <section className="py-24 bg-background-soft relative">
        {/* Floating elements near sides */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-float-slow hidden xl:block"></div>
        <div className="absolute right-10 top-1/3 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-float hidden xl:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-3xl font-black font-heading text-primary">Featured Tax Articles</h2>
            <div className="h-1 flex-grow bg-gray-100 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main Featured Post - CRITICAL FIX: Robust Image Loading & Content */}
            <div className="lg:col-span-8 group">
              <article className={`bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 flex flex-col h-full transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="relative h-[400px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-primary to-gray-200">
                  {/* Robust Image Loading with Fallback */}
                  {!imgError ? (
                    <img 
                      src={featuredPost.imageUrl} 
                      alt="Major IRS tax law updates explained by IRS Enrolled Agents" 
                      loading="lazy"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    />
                  ) : (
                    /* MANDATORY FALLBACK: Navy/Gray Gradient + 3D Abstract Finance Illustration */
                    <div className="absolute inset-0 flex items-center justify-center p-20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-gray-200 opacity-95"></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative">
                          <PieChart size={140} strokeWidth={1} className="text-secondary/40 animate-float" />
                          <Target size={80} strokeWidth={1.5} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/60 animate-float-delayed" />
                        </div>
                        <p className="mt-8 text-white/40 font-black uppercase tracking-[0.5em] text-xs">Expert Authority</p>
                      </div>
                      {/* Decorative 3D elements for fallback background */}
                      <div className="absolute top-10 left-10 w-24 h-24 border border-white/5 rounded-full blur-sm"></div>
                      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-3xl rotate-45"></div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-8 left-8 bg-secondary text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center">
                    <Sparkles className="w-3 h-3 mr-2" />
                    {featuredPost.category}
                  </div>
                </div>

                <div className="p-10 lg:p-14 flex-grow flex flex-col justify-center -mt-24 relative z-10 bg-white mx-8 mb-8 rounded-[2.5rem] shadow-2xl border border-gray-50">
                  <div className="flex flex-wrap items-center text-[10px] text-gray-400 mb-6 space-x-6 font-black uppercase tracking-widest">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-secondary" /> {featuredPost.date}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-secondary" /> {featuredPost.readTime}</span>
                    <span className="hidden sm:inline-block px-3 py-1 bg-background-soft rounded-full text-primary/60">{featuredPost.expertise}</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black font-heading text-primary mb-6 leading-tight group-hover:text-secondary transition-colors tracking-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                    {featuredPost.excerpt}
                  </p>

                  {/* Preview Bullets */}
                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-10 pb-8 border-b border-gray-100">
                    {featuredPost.topics.map((topic, i) => (
                      <div key={i} className="flex items-start text-sm text-gray-600 font-bold group/topic">
                        <CheckSquare className="w-4 h-4 mr-3 text-secondary shrink-0 mt-0.5 group-hover/topic:scale-110 transition-transform" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link to="/contact" className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center group/btn shadow-2xl shadow-primary/20 hover:bg-primary-light transition-all hover:-translate-y-1">
                      Continue Reading <ArrowUpRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Published By</p>
                        <p className="font-bold text-primary text-sm">{featuredPost.author}</p>
                      </div>
                      <div className="w-12 h-12 bg-background-soft rounded-2xl flex items-center justify-center text-primary shadow-inner">
                        <FileSearch size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Supporting Featured Posts */}
            <div className="lg:col-span-4 space-y-8">
              {secondaryFeatured.map((post, idx) => (
                <article 
                  key={post.id} 
                  className={`bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group h-[calc(50%-1rem)] transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                       <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{post.category}</span>
                       <span className="text-[10px] font-bold text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-black font-heading text-primary leading-tight mb-6 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <Link to="/contact" className="text-sm font-black text-primary flex items-center group-hover:translate-x-2 transition-transform">
                      Read Full Detail <ArrowRight className="ml-2 w-4 h-4 text-secondary" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOG GRID SECTION */}
      <section className="py-24 relative overflow-hidden">
        {/* Floating Background Effects */}
        <div className="absolute -left-20 top-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute -right-20 bottom-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] animate-float-delayed"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Professional Resources</h2>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-primary tracking-tight">Latest Tax Articles & Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {gridPosts.map((post, idx) => {
              const slideClass = idx % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2';
              
              return (
                <article 
                  key={post.id} 
                  className={`bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group ${slideClass}`}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg text-primary">
                      {post.icon}
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-4">{post.category}</span>
                    <h3 className="text-2xl font-black font-heading text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                      <button className="text-primary font-black inline-flex items-center hover:text-secondary transition-colors group/btn">
                        Read More <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
               <FileText size={300} strokeWidth={1} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl animate-float">
                <ShieldCheck size={40} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight text-white">Need Help with Your Taxes?</h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
                Reading tax information is helpful, but professional guidance makes the difference. Our IRS Enrolled Agents are here to help you file accurately and stay compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-secondary-hover transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center group shadow-secondary/20">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center">
                  Contact Our Tax Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER PADDING */}
      <div className="pb-12"></div>
    </div>
  );
};

export default Blogs;
