import { motion } from 'framer-motion';
import {ArrowLeftRight,Hospital ,Radio, ToggleRight,RefreshCw,Inbox,CheckCircle,Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { t } from '@/lib/translations';
import { useLanguageStore } from '@/stores/languageStore';

export default function TetraPage() {

const features = [
  {
    icon: Phone,
    title: {
      en: "Communication from one subscriber to another",
      ar: "اتصال بين مشترك وآخر",
    },
    description: {
      en: `Enables direct and secure one-to-one voice communication between individual users.
It ensures high-quality, low-latency transmission, allowing critical information to be exchanged instantly and reliably.
This feature enhances operational efficiency by supporting private, focused conversations without interrupting group communications.`,
      ar: `يوفّر اتصالاً فردياً مباشراً وآمناً بين مستخدمين داخل الشبكة.
يضمن جودة صوت عالية وزمن استجابة منخفض لتبادل المعلومات بسرعة وموثوقية.
يدعم التواصل الخاص بكفاءة دون التأثير على المكالمات أو المجموعات الأخرى.`,
    },
  },
  {
    icon: ArrowLeftRight,
    title: {
      en: "Group communication",
      ar: "الاتصالات الجماعية",
    },
    description: {
      en: `Enables multiple users to communicate simultaneously within a predefined talk group.
It allows instant information sharing and coordinated response among teams, especially during mission-critical operations.
This feature improves situational awareness and ensures efficient collaboration in dynamic and high-pressure environments.`,
      ar: `تمكّن عدة مستخدمين من التواصل في نفس الوقت ضمن مجموعة اتصال محددة.
تساعد على مشاركة المعلومات فوراً وتنسيق الاستجابة بين الفرق في المهام الحرجة.
تعزز الوعي الميداني وتضمن تعاوناً فعالاً في البيئات المتغيرة وعالية الضغط.`,
    },
  },
  {
    icon: Hospital,
    title: {
      en: "Emergency contacts",
      ar: "جهات اتصال الطوارئ",
    },
    description: {
      en: `Provide users with immediate access to predefined priority contacts during critical situations.
With a single action, users can initiate high-priority communication that overrides regular traffic on the network.
This ensures rapid response, enhanced safety, and reliable coordination when every second matters.`,
      ar: `توفّر وصولاً فورياً لجهات اتصال طوارئ محددة مسبقاً عند الحالات الحرجة.
بإجراء واحد يمكن بدء اتصال عالي الأولوية يتجاوز ازدحام الشبكة الاعتيادي.
تضمن استجابة أسرع وسلامة أعلى وتنسيقاً موثوقاً عندما تكون الثواني مهمة.`,
    },
  },
  {
    icon: ToggleRight,
    title: {
      en: "Set call priority",
      ar: "تحديد أولوية المكالمة",
    },
    description: {
      en: `Allows administrators to assign different priority levels to calls based on operational importance.
Higher-priority calls can override lower-priority traffic, ensuring critical communications are delivered without delay.
This feature guarantees network efficiency and maintains clear communication flow during emergencies and high-demand situations.`,
      ar: `تمكّن من تحديد مستويات أولوية مختلفة للمكالمات حسب أهمية المهمة.
يمكن للمكالمات الأعلى أولوية تجاوز الاتصالات الأقل لضمان وصول الرسائل الحرجة دون تأخير.
تحافظ على كفاءة الشبكة وتدفق اتصال واضح أثناء الطوارئ وذروة الاستخدام.`,
    },
  },
  {
    icon: RefreshCw,
    title: {
      en: "Direct contact",
      ar: "اتصال مباشر",
    },
    description: {
      en: `Enables users to communicate directly with another device without routing the call through network infrastructure (Direct Mode Operation – DMO).
It ensures continued communication even when network coverage is limited or temporarily unavailable.
This feature enhances operational resilience and maintains seamless coordination in remote or emergency environments.`,
      ar: `يتيح التواصل مباشرة بين جهازين دون المرور عبر البنية التحتية للشبكة (وضع DMO).
يضمن استمرار الاتصال حتى عند ضعف التغطية أو انقطاعها مؤقتاً.
يعزز جاهزية الفرق ويحافظ على التنسيق في المناطق النائية أو ظروف الطوارئ.`,
    },
  },
  {
    icon: Inbox,
    title: {
      en: "Intercom feature",
      ar: "ميزة الاتصال الداخلي",
    },
    description: {
      en: `Allows instant voice communication between predefined units without the need to initiate a standard call.
It enables hands-free, immediate audio transmission, making it ideal for fast coordination in control rooms and operational teams.
This feature improves response time and enhances real-time collaboration in mission-critical environments.`,
      ar: `تتيح تواصلاً صوتياً فورياً بين وحدات محددة مسبقاً دون بدء مكالمة تقليدية.
تدعم إرسالاً صوتياً سريعاً وقد تكون بدون استخدام اليدين، ما يجعلها مثالية لغرف التحكم والفرق التشغيلية.
تحسّن زمن الاستجابة وتعزز التعاون اللحظي في البيئات ذات الحساسية العالية.`,
    },
  },
];

  const benefits = [
    'Mission-critical voice and data communications',
    'Interoperability with existing systems',
    'Emergency call prioritization',
    'Direct mode operation (DMO)',
    'GPS location tracking',
    'Packet data services',
  ];
  
  
  
  const { language } =    useLanguageStore();

  return (

    
    <div className="min-h-screen bg-background">
      <Header />
    <img src="../../../public/tetra_img_1.jpg" width="1440" height="369" alt="" className="py-20   img-responsive wp-image-587" srcset="../../../public/tetra_img_1.jpg 200w,../../../public/tetra_img_1.jpg 400w, ../../../public/tetra_img_1.jpg 600w, ../../../public/tetra_img_1.jpg 800w, ../../../public/tetra_img_1.jpg 1200w, ../../../public/tetra_img_1.jpg 1440w" sizes="(max-width: 800px) 100vw, 1200px"></img>
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-8">
             {t('tetra',language)}
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 mb-8">
            {t("tetraDesc",language)}
           </p>
            <div className="flex items-center gap-4">
              <Radio className="w-12 h-12 text-secondary" />
              <span className="font-paragraph text-base text-foreground/70">
                Advanced digital trunked radio system
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary rounded-2xl p-12 flex items-center justify-center"
          >
            <Image
              src="../../../public/tetra_img_2.jpg"
              alt="TETRA network infrastructure diagram"
              className="w-full rounded-xl "
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-primary py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-primary-foreground mb-16 text-center">
          {t("keyfeatures",language)}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8"
              >
                <feature.icon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="font-heading text-xl text-foreground mb-4">
                  {feature.title[language]}
                </h3>
                <p className="font-paragraph text-sm text-foreground/70">
                  {feature.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {/* <section className="w-full py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-8">
                Technical Excellence
              </h2>
              <p className="font-paragraph text-base text-foreground/80 mb-8">
                Our TETRA infrastructure is built on industry-leading standards, providing unmatched reliability and performance for critical communications.
              </p>
              <div className="bg-surfacealt rounded-2xl p-8">
                <h3 className="font-heading text-2xl text-foreground mb-6">
                  Specifications
                </h3>
                <ul className="space-y-4">
                  <li className="font-paragraph text-base text-foreground/80">
                    <span className="font-heading text-foreground">Frequency Range:</span> 380-400 MHz / 410-430 MHz
                  </li>
                  <li className="font-paragraph text-base text-foreground/80">
                    <span className="font-heading text-foreground">Channel Spacing:</span> 25 kHz
                  </li>
                  <li className="font-paragraph text-base text-foreground/80">
                    <span className="font-heading text-foreground">Modulation:</span> π/4 DQPSK
                  </li>
                  <li className="font-paragraph text-base text-foreground/80">
                    <span className="font-heading text-foreground">Data Rate:</span> Up to 28.8 kbps
                  </li>
                  <li className="font-paragraph text-base text-foreground/80">
                    <span className="font-heading text-foreground">Voice Codec:</span> ACELP
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-8">
                Benefits
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-secondary rounded-xl p-6"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-base text-secondary-foreground">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      {/* <section className="w-full bg-surfacealt py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-16 text-center">
            Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Public Safety',
                description: 'Police, fire departments, and emergency medical services rely on TETRA for coordinated response operations.',
                image: 'public-safety',
              },
              {
                title: 'Transportation',
                description: 'Railways, airports, and public transit systems use TETRA for operational communications and passenger safety.',
                image: 'transportation',
              },
              {
                title: 'Utilities & Energy',
                description: 'Power plants, oil and gas facilities depend on TETRA for secure and reliable operational communications.',
                image: 'utilities',
              },
            ].map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden"
              >
                <div className="bg-primary h-48 flex items-center justify-center">
                  <Image
                    src={'https://static.wixstatic.com/media/29c2d1_ef23f859a877412485e64af565ad7964~mv2.png?originWidth=448&originHeight=320'}
                    alt={app.title}
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    {app.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */} */




      <Footer />
    </div>
  );
}
