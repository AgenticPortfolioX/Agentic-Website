import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Workflow, Video, Server, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const posts = [
  {
    id: 1,
    category: 'Restoration Workflows',
    icon: Workflow,
    date: 'February 28, 2026',
    title: 'The Rise of Autonomous Business Systems',
    excerpt: 'How our latest AI agents are completely replacing traditional SaaS subscriptions by executing multi-step workflows autonomously.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Hardware Nodes',
    icon: Server,
    date: 'February 15, 2026',
    title: 'Umbrel OS Meets AI: The Sovereign Stack',
    excerpt: 'Why we chose Umbrel OS for our hardware nodes and how the integrated AI agent manages Lightning liquidity while you sleep.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Video Marketing',
    icon: Video,
    date: 'January 22, 2026',
    title: 'From iPhone Photos to Cinematic 3D Flythroughs',
    excerpt: 'A deep dive into our new pipeline that turns standard 2D real estate photos into breathtaking 4K drone-style flythroughs.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Restoration Workflows',
    icon: Workflow,
    date: 'January 10, 2026',
    title: 'Case Study: 40 Hours Saved per Week',
    excerpt: 'How we built a custom agentic workflow for a logistics company that completely automated their dispatch and routing.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Hardware Nodes',
    icon: Server,
    date: 'January 5, 2026',
    title: 'Nostr Relays on the Restoration Node',
    excerpt: 'Take back your social graph. How to utilize the built-in Nostr relay on your new Restoration Node for uncensorable communication.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Video Marketing',
    icon: Video,
    date: 'January 2, 2026',
    title: 'The Anatomy of a High-Converting Video Ad',
    excerpt: 'Breaking down the hooks, pacing, and visual elements that dropped our clients CPA by 30% in Q4.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Blog() {
  useSEO('Updates & Social', 'Latest news, case studies, and updates from Renowed Value Restoration LLC.');
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium tracking-tight mb-6"
          >
            Updates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Insights</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            The latest from our workflows, creative studio, and hardware divisions.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['All', 'Restoration Workflows', 'Video Marketing', 'Hardware Nodes'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-white text-black' 
                  : 'bg-[#141414] text-zinc-400 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden group cursor-pointer hover:border-orange-500/30 transition-colors flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-white border border-white/10">
                  <post.icon className="w-3.5 h-3.5 text-orange-500" />
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-orange-400 transition-colors">{post.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-orange-500 transition-colors mt-auto">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
