// HPI 1.5-V
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Globe, Radio, ShieldCheck, Cpu, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { HomepageCarouselSlides, Projects, FuturePlans, NetworkServices } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguageStore } from '@/stores/languageStore';
import { t } from '@/lib/translations';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";


// --- 1. UTILITIES & SHARED COMPONENTS ---

// Mandatory AnimatedElement for scroll reveals (Data Fidelity: Safe Pattern)
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out opacity-0 translate-y-12 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 ${className || ''}`}
    >
      {children}
    </div>
  );
};

// Custom Starburst Icon for the "Green Block" motif
const StarburstIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
  </svg>
);

// --- 2. MAIN PAGE COMPONENT ---

export default function HomePage() {
  // ... keep existing code (data state declarations) ...
  const [slides, setSlides] = useState<HomepageCarouselSlides[]>([]);
  const [projects, setProjects] = useState<Projects[]>([]);
  const [futurePlans, setFuturePlans] = useState<FuturePlans[]>([]);
  const [services, setServices] = useState<NetworkServices[]>([]);
  
  // Local State for UI
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Language
  const { language } = useLanguageStore();
  type Localized<T> = T & Record<string, any>;

const pick = (item: Localized<any> | undefined, key: string, fallback = "") => {
  if (!item) return fallback;

  // لو أنت مسمي الحقول: key_en و key_ar
  const v =
    language === "en"
      ? item[`${key}_en`]
      : item[`${key}`];

  return (v ?? fallback) as string;
};


  // --- DATA FIDELITY PROTOCOL: PRESERVE & UTILIZE ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [slidesData, projectsData, plansData, servicesData] = await Promise.all([
          BaseCrudService.getAll<HomepageCarouselSlides>('homepagecarouselslides'),
          BaseCrudService.getAll<Projects>('projects'),
          BaseCrudService.getAll<FuturePlans>('futureplans'),
          BaseCrudService.getAll<NetworkServices>('networkservices'),
        ]);

        const sortedSlides = slidesData.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setSlides(sortedSlides);
        console.log("slides length:", sortedSlides.length);
console.log("first slide:", sortedSlides[0]);
console.log("active slide:", sortedSlides[0]);
        setProjects(projectsData.items);
        setFuturePlans(plansData.items);
        setServices(servicesData.items);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Carousel Logic
  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // --- RENDER ---
  return (
    <div className={`min-h-screen bg-[#F9F9F9] text-foreground overflow-x-clip selection:bg-secondary selection:text-secondary-foreground ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* --- SECTION 1: HERO (BENTO GRID COMPOSITION) --- */}
      {/* Replicating the structure of the inspiration image */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pt-40 lg:pb-20">
        
        {/* 1.1 Main Headline Row */}
        <AnimatedElement className="mb-12 lg:mb-20">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tight text-black max-w-6xl">
            {t('heroTitle', language)} <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
              {t('heroTitleGradient', language)}
            </span>
          </h1>
        </AnimatedElement>

        {/* 1.2 The Bento Grid */}
        <div className="grid grid--1 md:grid-cols-12 gap-4 lg:gap-6 h-auto lg:h-[800px]">
          
          {/* CELL 1: Primary Active Slide Content (Green Block) */}
          <div className="md:col-span-7 lg:col-span-5 bg-secondary rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <StarburstIcon className="w-32 h-32 animate-spin-slow" />
            </div>cols
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-heading text-sm uppercase tracking-widest opacity-60">{t('featuredHighlight', language)}</span>
                <div className="h-1 w-12 bg-black/20"></div>
              </div>

              <div className="mt-auto">
                <AnimatePresence mode="wait">
                  {slides.length > 0 ? (
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                     
                     
                     
        

...
 
<h2 className="font-heading text-3xl lg:text-5xl mb-6 leading-tight">
  {pick(slides[currentSlide], "slideTitle", t("heroTitle", language))}
</h2>

<p className="font-paragraph text-lg lg:text-xl mb-8 max-w-md leading-relaxed opacity-80">
  {pick(slides[currentSlide], "slideDescription", t("innovationDesc", language))}
</p>

{slides[currentSlide]?.callToActionUrl && (
  <Link to={slides[currentSlide].callToActionUrl} className="...">
    {pick(slides[currentSlide], "callToActionText", t("exploreNow", language))}
    <ArrowRight className="w-4 h-4" />
  </Link>
)}

                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="font-heading text-3xl lg:text-5xl mb-6 leading-tight">
                        {t('heroTitle', language)} {t('heroTitleGradient', language)}
                      </h2>
                      <p className="font-paragraph text-lg lg:text-xl mb-8 max-w-md leading-relaxed opacity-80">
                        {language === 'en' 
                          ? 'Discover our cutting-edge infrastructure solutions and network services designed to power tomorrow\'s connectivity.'
                          : 'اكتشف حلول البنية التحتية المتقدمة وخدمات الشبكات المصممة لتشغيل اتصالات الغد.'}
                      </p>
                      <Link 
                        to="/about"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-heading text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 border border-black"
                      >
                        {t('learnMore', language)}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* CELL 2: Navigation & Scroll Trigger (Grey Block) */}
          <div className="md:col-span-5 lg:col-span-3 bg-[#E5E5E5] rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center">
               <ArrowDown className="w-16 h-16 text-black/20 animate-bounce" />
            </div>
            <div className="absolute bottom-8 flex gap-4 z-20">
               <button onClick={prevSlide} className="p-3 rounded-full bg-white hover:bg-black hover:text-white transition-colors border border-black/5">
                 <ChevronLeft className="w-5 h-5" />
               </button>
               <button onClick={nextSlide} className="p-3 rounded-full bg-white hover:bg-black hover:text-white transition-colors border border-black/5">
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* CELL 3: Secondary Info (Black Block) */}
          {/* CELL 3: Secondary Info (Black Block) */}
<div className="md:col-span-12 lg:col-span-4 bg-black rounded-[2.5rem] p-10 flex flex-col justify-center text-white relative overflow-hidden min-h-[300px]">
  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="relative z-10"
    >
     <h3 className="font-heading text-3xl mb-4">
  {pick(slides[currentSlide], "slideTitle")}
</h3>

<p className="font-paragraph text-white/60">
  {pick(slides[currentSlide], "slideDescription")}
</p>

    </motion.div>
  </AnimatePresence>

  <div className="mt-8 flex gap-2 relative z-10">
    {slides.map((_, idx) => (
      <div
        key={idx}
        className={`h-1 rounded-full transition-all duration-500 ${
          idx === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/20"
        }`}
      />
    ))}
  </div>
</div>


          {/* CELL 4: Visual Anchor (Image Block - Bottom Left) */}
          <div className="md:col-span-6 lg:col-span-4 bg-white rounded-[2.5rem] overflow-hidden relative min-h-[300px] lg:min-h-0">
             <AnimatePresence mode="wait">
                {slides.length > 0 && slides[currentSlide].slideImage && (
                  <motion.div
                    key={currentSlide}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={slides[currentSlide].slideImage!} 
                      alt={slides[currentSlide].slideTitle || "Hero Image"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </motion.div>
                )}
             </AnimatePresence>
           <div className="absolute bottom-6 left-6 text-white">
              <p className="font-heading text-sm uppercase tracking-widest">{t('visualFocus', language)}</p>
           </div>
          </div>

          {/* CELL 5: Wide Info Block (Bottom Center) */}
          <div className="md:col-span-6 lg:col-span-5 bg-black rounded-[2.5rem] p-10 flex flex-col justify-between text-white relative overflow-hidden">
             <div className="space-y-4 relative z-10">
                <h3 className="font-heading text-2xl text-secondary">{t('relaunch', language)}</h3>
                <p className="font-paragraph text-white/70 text-sm leading-relaxed">
                  {t('relaunhDesc', language)}
                </p>
             </div>
          </div>

          {/* CELL 6: Brand Motif (Bottom Right - Green) */}
          <div className="hidden lg:flex lg:col-span-3 bg-secondary rounded-[2.5rem] items-center justify-center relative overflow-hidden">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-full h-full flex items-center justify-center"
             >
                <StarburstIcon className="w-[120%] h-[120%] text-black opacity-10" />
             </motion.div>
             <div className="absolute inset-0 flex items-center justify-center">
                <StarburstIcon className="w-24 h-24 text-black" />
             </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: SCROLLING MARQUEE (Motion) --- */}
      <div className="w-full bg-black py-6 overflow-hidden flex whitespace-nowrap relative z-20 -rotate-1 scale-105 origin-left border-y-4 border-secondary">
        <motion.div 
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-white font-heading text-4xl uppercase tracking-tighter">{t('tetraTech', language)}</span>
              <Star className="w-8 h-8 text-secondary fill-secondary" />
              <span className="text-white font-heading text-4xl uppercase tracking-tighter">{t('networkSolutions', language)}</span>
              <Star className="w-8 h-8 text-secondary fill-secondary" />
              <span className="text-white font-heading text-4xl uppercase tracking-tighter">{t('radioSystems', language)}</span>
              <Star className="w-8 h-8 text-secondary fill-secondary" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* --- SECTION 3: CURRENT PROJECTS (Sticky Layout) --- */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Header / Intro */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <AnimatedElement>
                <span className="text-secondary font-heading text-sm uppercase tracking-widest mb-4 block">{t('portfolio', language)}</span>
                <h2 className="font-heading text-5xl lg:text-6xl mb-8 text-black">{t('currentProjects', language)}</h2>
                <p className="font-paragraph text-lg text-gray-600 mb-10 leading-relaxed">
                  {t('projectsDesc', language)}
                </p>
               
              </AnimatedElement>
            </div>
          </div>

          {/* Scrolling List */}
          <div className="lg:w-2/3 space-y-20">
            {projects.slice(0, 4).map((project, index) => (
              <AnimatedElement key={project._id} delay={index * 100}>
                <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                  <div className="aspect-[16/9] overflow-hidden">
                    {project.mainImage ? (
                      <Image 
                        src={project.mainImage} 
                        alt={project.projectName || 'Project'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-4 py-1 rounded-full bg-secondary/20 text-black text-xs font-heading uppercase tracking-wider">
                        {project.status || t('active', language)}
                      </span>
                      <span className="text-gray-400 text-sm font-paragraph">
                        {project.startDate ? new Date(project.startDate).toLocaleDateString() : ''}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl mb-4 group-hover:text-secondary transition-colors">{pick(project, "projectName")}</h3>
                    <p className="font-paragraph text-gray-600 mb-6 line-clamp-3">
                      {pick(project,"projectSummary")}
                    </p>
                   
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: FUTURE PLANS (Horizontal Scroll) --- */}
      <section className="w-full bg-black text-white py-32 overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end">
          <AnimatedElement>
            <h2 className="font-heading text-5xl lg:text-7xl mb-4">{t('futureVision', language)} <span className="text-secondary">Vision</span></h2>
            <p className="font-paragraph text-gray-400 max-w-xl">
              {t('futureVisionDesc', language)}
            </p>
          </AnimatedElement>
          <div className="hidden md:flex gap-2">
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
            <div className="w-4 h-1 bg-gray-700 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 px-4 sm:px-6 lg:px-8 gap-6 no-scrollbar">
          {futurePlans.map((plan, index) => (
            <div key={plan._id} className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw]">
              <div className="h-full bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:border-secondary/50 transition-colors duration-300 group">
                <div className="mb-8 relative overflow-hidden rounded-xl aspect-[4/3]">
                  {plan.planImage && (
                    <Image 
                      src={plan.planImage} 
                      alt={plan.planTitle || 'Plan'}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-heading text-secondary border border-secondary/20">
                    {plan.targetDate ? new Date(plan.targetDate).getFullYear() : 'Future'}
                  </div>
                </div>
                <h3 className="font-heading text-2xl mb-4 group-hover:text-secondary transition-colors">{pick(plan, "planTitle")}</h3>
                <p className="font-paragraph text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                 {pick(plan, "shortDescription")}
                </p>
               
              </div>
            </div>
          ))}
          {/* Spacer for end of scroll */}
          <div className="w-8 shrink-0"></div>
        </div>
      </section>

      {/* --- SECTION 5: SERVICES (Interactive Grid) --- */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedElement>
            <span className="text-secondary font-heading text-sm uppercase tracking-widest mb-4 block">{t('capabilities', language)}</span>
            <h2 className="font-heading text-5xl lg:text-6xl mb-6 text-black">{t('networkServices', language)}</h2>
            <p className="font-paragraph text-lg text-gray-600">
              {t('servicesDesc', language)}
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={service._id} delay={index * 50}>
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 h-full flex flex-col group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  {index / 3 === 0 ? <FontAwesomeIcon icon={faExchangeAlt} />: 
                   index / 3 === 1/3 ?  <FontAwesomeIcon icon={faPhone} /> : 
                   index /3 === 2/3 ? <FontAwesomeIcon icon={faAmbulance} />:
                                  <FontAwesomeIcon icon={faUsers} />      }
                </div>
                <h3 className="font-heading text-2xl mb-4">{pick(service, "serviceName")}</h3>
                <p className="font-paragraph text-gray-600 mb-6 flex-grow">
                  {pick(service, "serviceDescription")}
                </p>
                
                {service.keyFeatures && (
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-xs font-heading uppercase text-gray-400 mb-2">{t('keyFeatures', language)}</p>
                    <p className="text-sm font-paragraph text-black">{service.keyFeatures}</p>
                  </div>
                )}

              
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: MAP (Full Bleed Visual) --- */}
      <section className="w-full py-20 bg-[#F2F2F2] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F9F9F9] to-transparent z-10"></div>
        
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <h2 className="font-heading text-5xl lg:text-7xl mb-8 text-black">
                {t('nationalCoverage', language)}
              </h2>
              <p className="font-paragraph text-xl text-gray-600 mb-12 max-w-md">
                {t('coverageDesc', language)}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg">{t('nationwideReach', language)}</h4>
                    <p className="text-sm text-gray-500">{t('nationwideReachDesc', language)}</p>
                  </div>
                    <div>
                    <h4 className="font-heading text-lg">{t('nationwideReach1', language)}</h4>
                    <p className="text-sm text-gray-500">{t('nationwideReachDesc1', language)}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg">{t('nationwideReach2', language)}</h4>
                    <p className="text-sm text-gray-500">{t('nationwideReachDesc2', language)}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg">{t('nationwideReach3', language)}</h4>
                    <p className="text-sm text-gray-500">{t('nationwideReachDesc3', language)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <Radio className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg">{t('tetraIntegration', language)}</h4>
                    <p className="text-sm text-gray-500">{t('tetraIntegrationDesc', language)}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={200} className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4 border-4 border-white">
                <Image
                  src="../../public/map.png"
                  alt="Map of Libya showing network coverage"
                  className="w-full h-auto rounded-[2.5rem] bg-[#eef]"
                />
                
                {/* Animated Hotspots on Map (Decorative) */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
                
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-secondary rounded-full animate-ping delay-300"></div>
                <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>

                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CTA --- */}
      <section className="w-full bg-secondary py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <StarburstIcon className="w-[100vw] h-[100vw] -translate-y-1/2 translate-x-1/2 text-black animate-spin-slow" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-8 text-black tracking-tight">
            {t('readyToConnect', language)}
          </h2>
          <p className="font-paragraph text-xl md:text-2xl text-black/70 mb-12 max-w-2xl mx-auto">
            {t('ctaDesc', language)}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full font-heading text-lg uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            {t('contactUs', language)}
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
      
      {/* Custom Styles for specific animations */}
      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}