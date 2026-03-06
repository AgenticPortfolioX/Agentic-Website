import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Users, Clock, Search, MessageSquare, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

export default function AgenticReplies() {
  useSEO('Agentic Replies | AI-Powered Reputation Management', 'Transform your business reputation with 24/7 automated, intelligent review responses that drive SEO and revenue.');

  const metrics = [
    {
      title: "Revenue Growth",
      value: "5-9%",
      description: "Increase in revenue correlated with just a one-star improvement on Google.",
      icon: TrendingUp
    },
    {
      title: "Labor Savings",
      value: "120 hrs",
      description: "Annual manual labor replaced by automated intelligent responses.",
      icon: Clock
    },
    {
      title: "Conversion Rate",
      value: "56%",
      description: "Of consumers choose the business that responds first to their inquiries.",
      icon: Users
    }
  ];

  const tableData = [
    { label: "Response Rate", industry: "~13%", impact: "100%", detail: "Every review acknowledged" },
    { label: "Response Time", industry: "2-5 Days", impact: "<15 Min", detail: "Polls every 15 minutes" },
    { label: "Review Velocity", industry: "Inconsistent", impact: "Higher", detail: "Signals active engagement" },
    { label: "Sentiment Score", industry: "Unmonitored", impact: "Monitored", detail: "1-5 star trend reporting" }
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            New: Agentic Replies
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-8"
          >
            Turn Your Reviews Into <br />
            <span className="text-orange-500">Revenue Generation.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-xl max-w-3xl mx-auto mb-12"
          >
            A $500 monthly investment to stop revenue leakage. Our AI agent manages your reputation 24/7, 
            improves local SEO, and converts passive browsers into loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ROI Grid */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-medium mb-4">Economic Impact (ROI)</h2>
            <p className="text-zinc-400">Scale your extraordinary results with automated intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#141414] p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 font-bold text-orange-500 text-xl">
                    <metric.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-orange-500 mb-4">{metric.title}</div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation Metrics Table */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium mb-4">Reputation Performance</h2>
            <p className="text-zinc-400">How the Agent transforms your business profile.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-zinc-500 text-sm">
                  <th className="py-6 px-4 font-medium uppercase tracking-wider">Metric</th>
                  <th className="py-6 px-4 font-medium uppercase tracking-wider">Industry Standard</th>
                  <th className="py-6 px-4 font-medium uppercase tracking-wider text-orange-500">Agent's Impact</th>
                  <th className="py-6 px-4 font-medium uppercase tracking-wider">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tableData.map((row, index) => (
                  <tr key={index} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-4 font-medium text-lg">{row.label}</td>
                    <td className="py-6 px-4 text-zinc-400 italic">{row.industry}</td>
                    <td className="py-6 px-4 font-bold text-orange-500 text-xl">{row.impact}</td>
                    <td className="py-6 px-4 text-zinc-400 text-sm">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
              <BarChart3 className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-medium mb-4">The Weekly Digest</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The agent summarizes themes automatically, flagging operational issues before they become permanent 1-star reviews.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
              <MessageSquare className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-medium mb-4">Brand Consistency</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                "Tone-Matched Replies" that reference specifics, ensuring your business looks high-touch and professional 24/7.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5">
              <Search className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-medium mb-4">SEO Boost</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Keyword-rich responses help you rank higher. Google rewards active profiles that engage frequently with customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-[3rem] p-16 text-center text-black relative overflow-hidden">
          <div className="relative z-10">
            <ShieldCheck className="w-16 h-16 mx-auto mb-8 opacity-90" />
            <h2 className="text-4xl font-bold mb-6">Stop Revenue Leakage Today</h2>
            <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto">
              Ready to automate your reputation? Deploy your Agentic Reply agent in under 48 hours.
            </p>
            <Link to="/contact" className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-zinc-900 transition-colors inline-flex items-center gap-2">
              Start Your Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
