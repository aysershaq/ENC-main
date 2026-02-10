import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { t } from '@/lib/translations';
import { useLanguageStore } from '@/stores/languageStore';
export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in every project, delivering superior telecommunications solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients and partners to achieve shared goals and mutual success.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology to provide advanced network solutions for modern challenges.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Committed to continuous improvement and expansion of our services across Libya.',
    },
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Established as a leading telecommunications provider in Libya.',
    },
    {
      year: '2015',
      title: 'TETRA Network Launch',
      description: 'Deployed first nationwide TETRA infrastructure for critical communications.',
    },
    {
      year: '2018',
      title: 'Network Expansion',
      description: 'Extended coverage to remote regions, connecting communities nationwide.',
    },
    {
      year: '2023',
      title: 'Technology Upgrade',
      description: 'Implemented next-generation systems for enhanced performance and reliability.',
    },
  ];
  const { language } =    useLanguageStore();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="font-heading text-5xl lg:text-8xl text-foreground mb-8">
             {t("aboutCompany",language)}
          </h1>
          <p className="font-paragraph text-xl text-foreground/80">
             {t("aboutDesc",language)}
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-primary py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-12"
            >
              <Target className="w-16 h-16 text-secondary-foreground mb-6" />
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
                {t("missionTitle",language)}
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground/90">
                {t("mission",language)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-12"
            >
              <Eye className="w-16 h-16 text-secondary mb-6" />
              <h2 className="font-heading text-4xl text-foreground mb-6">
               {t("visionTitle",language)}
              </h2>
              <p className="font-paragraph text-lg text-foreground/80">
                    {t("vision",language)}              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-8">
                {t("storyTitle",language)}
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-[35px] text-foreground/80">
                {t("story",language)}
                </p>
               
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surfacealt rounded-2xl p-8"
            >
              <Image
                src="https://static.wixstatic.com/media/29c2d1_2f48f87d04da4594bbfb3680a57f6319~mv2.png?originWidth=768&originHeight=576"
                alt="Ettisalat Nawiea Company headquarters"
                className="w-full rounded-xl grayscale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      
     

      <Footer />
    </div>
  );
}
