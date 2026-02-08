import { motion } from 'framer-motion';
import { Radio, Shield, Zap, Users, Network, CheckCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TetraPage() {
  const features = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'End-to-end encryption and secure authentication protocols ensure confidential communications.',
    },
    {
      icon: Zap,
      title: 'Fast Call Setup',
      description: 'Instant communication with call setup times under 300 milliseconds for critical operations.',
    },
    {
      icon: Users,
      title: 'Group Communication',
      description: 'Efficient group calls and broadcast capabilities for coordinated team operations.',
    },
    {
      icon: Network,
      title: 'Wide Coverage',
      description: 'Extensive network reach with reliable connectivity across urban and remote areas.',
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-8">
              TETRA Technology
            </h1>
            <p className="font-paragraph text-lg text-foreground/80 mb-8">
              Terrestrial Trunked Radio (TETRA) is a professional mobile radio standard designed for mission-critical communications. Our TETRA network delivers secure, reliable, and efficient communication solutions for emergency services, public safety, and enterprise operations.
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
              src="https://static.wixstatic.com/media/29c2d1_6a072669e3274ef6b061f2f1036094d0~mv2.png?originWidth=768&originHeight=576"
              alt="TETRA network infrastructure diagram"
              className="w-full rounded-xl grayscale"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-primary py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-primary-foreground mb-16 text-center">
            Key Features
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
                  {feature.title}
                </h3>
                <p className="font-paragraph text-sm text-foreground/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="w-full py-20">
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
      <section className="w-full bg-surfacealt py-20">
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
      </section>

      <Footer />
    </div>
  );
}
