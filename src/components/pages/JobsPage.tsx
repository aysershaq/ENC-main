import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Clock } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { JobOpenings } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JobsPage() {
  const [jobs, setJobs] = useState<JobOpenings[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { items } = await BaseCrudService.getAll<JobOpenings>('jobopenings');
      setJobs(items);
    };

    fetchJobs();
  }, []);

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
              Join Our Team
            </h1>
            <p className="font-paragraph text-lg text-primary-foreground/80">
              Build your career with Libya's leading telecommunications company. We're always looking for talented individuals to join our growing team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-16 text-center">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Growth',
                description: 'Continuous learning opportunities and clear career progression paths to help you reach your full potential.',
              },
              {
                title: 'Innovative Environment',
                description: 'Work with cutting-edge technology and be part of projects that shape Libya\'s telecommunications future.',
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive compensation packages, health benefits, and work-life balance initiatives.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary rounded-2xl p-8"
              >
                <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground/80">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="w-full bg-surfacealt py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-12 text-center">
            Current Openings
          </h2>

          {jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-background rounded-2xl p-16 text-center max-w-3xl mx-auto"
            >
              <Briefcase className="w-16 h-16 text-foreground/30 mx-auto mb-6" />
              <h3 className="font-heading text-3xl text-foreground mb-4">
                No Current Openings
              </h3>
              <p className="font-paragraph text-lg text-foreground/70 mb-8">
                We don't have any open positions at the moment, but we're always interested in hearing from talented professionals. Feel free to send us your resume for future opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-paragraph text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit Your Resume
              </a>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-8 hover:border-2 hover:border-secondary transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-heading text-3xl text-foreground mb-4">
                        {job.jobTitle}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-6">
                        {job.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-secondary" />
                            <span className="font-paragraph text-sm text-foreground/70">
                              {job.location}
                            </span>
                          </div>
                        )}
                        {job.department && (
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-secondary" />
                            <span className="font-paragraph text-sm text-foreground/70">
                              {job.department}
                            </span>
                          </div>
                        )}
                        {job.employmentType && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-secondary" />
                            <span className="font-paragraph text-sm text-foreground/70">
                              {job.employmentType}
                            </span>
                          </div>
                        )}
                      </div>

                      {job.description && (
                        <p className="font-paragraph text-base text-foreground/80 mb-6">
                          {job.description}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-4 text-sm">
                        {job.datePosted && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-foreground/40" />
                            <span className="font-paragraph text-foreground/60">
                              Posted: {new Date(job.datePosted).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {job.applicationDeadline && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-foreground/40" />
                            <span className="font-paragraph text-foreground/60">
                              Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="lg:flex-shrink-0">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-paragraph text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
                Our Culture
              </h2>
              <p className="font-paragraph text-base text-foreground/80 mb-6">
                At Ettisalat Nawiea, we foster a collaborative and inclusive work environment where innovation thrives. Our team members are empowered to take initiative, share ideas, and contribute to meaningful projects that impact communities across Libya.
              </p>
              <p className="font-paragraph text-base text-foreground/80 mb-6">
                We believe in investing in our people through professional development programs, mentorship opportunities, and a supportive workplace culture that values diversity and excellence.
              </p>
              <p className="font-paragraph text-base text-foreground/80">
                Join us and be part of a team that's building the future of telecommunications in Libya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-12 flex items-center justify-center"
              style={{ minHeight: '400px' }}
            >
              <div className="text-center">
                <div className="font-heading text-6xl text-secondary mb-4">500+</div>
                <div className="font-paragraph text-xl text-primary-foreground/80">
                  Team Members
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
