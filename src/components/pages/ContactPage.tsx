import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { t } from '@/lib/translations';
import { useLanguageStore } from '@/stores/languageStore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };
  const { language } =    useLanguageStore();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-primary py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-primary-foreground mb-6">
             {t("getIn",language)}
            </h1>
            <p className="font-paragraph text-lg text-primary-foreground/80">
             {t("getInDesc",language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl text-foreground mb-8">
                    {t("contactinfo",language)}
              </h2>
              <p className="font-paragraph text-base text-foreground/70 mb-12">
                    {t("contactinfoDesc",language)}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-secondary rounded-full p-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Our Office
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      Tripoli, Libya<br />
                      zawiat al-dahmani alshaat street
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary rounded-full p-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Phone
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      +218 213409103<br />
                      San-Fri: 8:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-secondary rounded-full p-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Email
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      it@enc.ly<br />
                      
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 bg-surfacealt rounded-2xl p-8">
                <h3 className="font-heading text-2xl text-foreground mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-paragraph text-base text-foreground/70">Sunday - Thursday</span>
                    <span className="font-paragraph text-base text-foreground">3:00 PM - 8:00 AM</span>
                  </div>
                 
                  <div className="flex justify-between">
                    <span className="font-paragraph text-base text-foreground/70">Saturday - Friday</span>
                    <span className="font-paragraph text-base text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-primary rounded-2xl p-8 lg:p-12">
                <h2 className="font-heading text-3xl text-primary-foreground mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="font-paragraph text-sm text-primary-foreground/80 mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-background font-paragraph"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-paragraph text-sm text-primary-foreground/80 mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-background font-paragraph"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="font-paragraph text-sm text-primary-foreground/80 mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-background font-paragraph"
                      placeholder="+218 XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="font-paragraph text-sm text-primary-foreground/80 mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background border-background font-paragraph"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="font-paragraph text-sm text-primary-foreground/80 mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background border-background font-paragraph resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-secondary rounded-lg p-4">
                      <p className="font-paragraph text-sm text-secondary-foreground">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-destructive rounded-lg p-4">
                      <p className="font-paragraph text-sm text-white">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-base py-6 rounded-lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-surfacealt py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
              {t("visit",language)}
            </h2>
            <p className="font-paragraph text-base text-foreground/70 max-w-2xl mx-auto">
              {t("visitDesc",language)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 lg:p-12"
          >
           <div className="aspect-video rounded-xl overflow-hidden">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0196819749026!2d13.212088925575156!3d32.897647877813576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8928e17b92623%3A0xd7d2c1a8f7def3b3!2sEtisalat%20Nawiaa%20Company%20ENC!5e0!3m2!1sar!2sly!4v1770716272209!5m2!1sar!2sly"  className='w-full h-full'  loading="lazy" ></iframe>
        </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
