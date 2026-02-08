import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
            About Ettisalat Nawiea
          </h1>
          <p className="font-paragraph text-xl text-foreground/80">
            Leading the telecommunications revolution in Libya with innovative solutions, reliable infrastructure, and unwavering commitment to connecting communities.
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
                Our Mission
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground/90">
                To deliver world-class telecommunications infrastructure and services that empower businesses, government agencies, and communities across Libya with secure, reliable, and innovative communication solutions.
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
                Our Vision
              </h2>
              <p className="font-paragraph text-lg text-foreground/80">
                To be the most trusted and advanced telecommunications provider in Libya, setting the standard for network excellence, customer service, and technological innovation in the region.
              </p>
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
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-base text-foreground/80">
                  Ettisalat Nawiea Company was established with a clear vision: to transform Libya's telecommunications landscape through advanced technology and exceptional service. Since our inception, we have been at the forefront of deploying critical communication infrastructure.
                </p>
                <p className="font-paragraph text-base text-foreground/80">
                  Our expertise spans TETRA networks, radio communications, and comprehensive network solutions. We serve diverse sectors including public safety, transportation, utilities, and enterprise clients, providing them with the tools they need for mission-critical operations.
                </p>
                <p className="font-paragraph text-base text-foreground/80">
                  Today, we continue to expand our reach and capabilities, investing in next-generation technologies and building partnerships that strengthen Libya's communication infrastructure for the future.
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

      {/* Values Section */}
      <section className="w-full bg-surfacealt py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-16 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-sm text-foreground/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-16 text-center">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 -translate-x-1/2" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}`}>
                    <div className="inline-block bg-secondary rounded-full px-6 py-2 mb-4">
                      <span className="font-heading text-2xl text-secondary-foreground">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl text-foreground mb-4">
                      {milestone.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      {milestone.description}
                    </p>
                  </div>

                  <div className={`${index % 2 === 0 ? '' : 'lg:order-1'}`}>
                    <div className="bg-primary rounded-2xl p-8 h-48 flex items-center justify-center">
                      <Image
                        src={'https://static.wixstatic.com/media/29c2d1_7fa1325ff6dd46418f410a476281e47b~mv2.png?originWidth=384&originHeight=256'}
                        alt={milestone.title}
                        className="w-full h-full object-cover rounded-xl grayscale opacity-70"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-primary py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years of Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '99.9%', label: 'Network Uptime' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl lg:text-6xl text-secondary mb-4">
                  {stat.number}
                </div>
                <div className="font-paragraph text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
