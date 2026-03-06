import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The agentic workflow they built saved us 40 hours a week. It's literally like having a tireless employee who never makes mistakes.",
    author: "Sarah Jenkins",
    role: "Operations Director, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Their real estate flythroughs look like they were shot with a $10k drone setup, but all we gave them were iPhone photos. Incredible ROI.",
    author: "Mark Thompson",
    role: "Principal Broker, Elevate Realty",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "The custom video ads dropped our CPA by 30%. The visuals are stunning, perfectly on-brand, and delivered faster than any agency we've used.",
    author: "Elena Rodriguez",
    role: "CMO, Lumina Brands",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Client Success</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] p-8 rounded-[2rem] border border-white/5 relative"
            >
              <Quote className="w-10 h-10 text-orange-500/20 absolute top-8 right-8" />
              <p className="text-lg text-zinc-300 mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
