import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { RadioDevices } from '@/entities';
import { Image } from '@/components/ui/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { t } from '@/lib/translations';
import { useLanguageStore } from '@/stores/languageStore';


export default function DevicesPage() {
  const [devices, setDevices] = useState<RadioDevices[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<RadioDevices[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>(['All']);
    const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchDevices = async () => {
      const { items } = await BaseCrudService.getAll<RadioDevices>('radiodevices');
      setDevices(items);
      setFilteredDevices(items);

      const uniqueCategories = ['All', ...new Set(items.map(d => d.category).filter(Boolean) as string[])];
      setCategories(uniqueCategories);
    };

    fetchDevices();
  }, []);

  useEffect(() => {
    let filtered = devices;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(device => device.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(device =>
        device.deviceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.modelNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.manufacturer?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDevices(filtered);
  }, [searchTerm, selectedCategory, devices]);
  const { language } =    useLanguageStore();
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
             {t("radio",language)}
            </h1>
            <p className="font-paragraph text-lg text-primary-foreground/80">
            {t("radioDesc",language)}            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full bg-surfacealt py-8 sticky top-[73px] z-40">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search devices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-background border-foreground/20 font-paragraph"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-foreground/60" />
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`font-paragraph text-sm rounded-lg ${
                    selectedCategory === category
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                      : 'border-foreground/20 hover:border-secondary'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-paragraph text-sm text-foreground/60">
              Showing {filteredDevices.length} {filteredDevices.length === 1 ? 'device' : 'devices'}
            </p>
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          {filteredDevices.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-foreground/60">
                No devices found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDevices.map((device, index) => (
                <motion.div
                  key={device._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-background border border-foreground/10 rounded-2xl overflow-hidden hover:border-secondary transition-colors group"
                >
                  <div className="relative bg-surfacealt h-64 overflow-hidden">
                    {device.mainImage ? (
                      <Image
                        src={device.mainImage}
                        alt={device.deviceName || 'Radio device'}
                        className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-heading text-4xl text-primary/30">
                            {device.deviceName?.charAt(0) || 'D'}
                          </span>
                        </div>
                      </div>
                    )}
                    {device.category && (
                      <div className="absolute top-4 right-4 bg-secondary px-4 py-2 rounded-lg">
                        <span className="font-paragraph text-xs text-secondary-foreground">
                          {device.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-foreground mb-2">
                      {device.deviceName}
                    </h3>
                    {device.modelNumber && (
                      <p className="font-paragraph text-sm text-secondary mb-4">
                        Model: {device.modelNumber}
                      </p>
                    )}
                    {device.manufacturer && (
                      <p className="font-paragraph text-sm text-foreground/60 mb-4">
                        {device.manufacturer}
                      </p>
                    )}
                    {device.description && (
                      <p className ={`${expanded ? "" : "line-clamp-9"} font-paragraph text-sm text-foreground/70 mb-6 `}>
                        {pick(device,"description")}
                        
                      </p>
                    )}
                    {device.datasheetUrl && (
                      <a
                        href={device.datasheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-paragraph text-sm text-secondary hover:text-secondary/80 transition-colors"
                      >
                        View Datasheet →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-20">
        <div className="mx-auto max-w-[120rem] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-primary-foreground mb-6">
              {t("help",language)}           </h2>
            <p className="font-paragraph text-lg text-primary-foreground/80 mb-8">
              {t("helpDesc",language)}           
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-paragraph text-base px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("callteam",language)}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
