import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MessageSquare, CheckSquare, Info } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function OptInStory() {
  useSEO('SMS Opt-In & Proof of Consent | Agentic Services', 'Details on how Agentic Services collects consumer consent for SMS text messaging campaigns.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
            <ShieldCheck className="w-4 h-4" />
            Proof of Consent
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            SMS Opt-In <span className="text-orange-500">Story</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            This document outlines the exact narrative of how Agentic Services obtains explicit consumer consent to receive SMS communications, in compliance with A2P 10DLC regulations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Section 1: Where Consent is Collected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <CheckSquare className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-medium">1. Mechanism of Consent</h2>
            </div>
            <div className="space-y-6 text-zinc-300">
              <p>
                Consumers who wish to connect with Agentic Services or Justin Gramke can navigate to our web forms located at <strong>agenticservices.com/contact</strong> or <strong>agenticservices.com/connect</strong>.
              </p>
              <p>
                To provide consent, the consumer must manually check an empty, un-checked by default checkbox prior to submitting their contact information. We do not use pre-checked boxes, nor do we infer consent from the submission of a phone number alone.
              </p>
            </div>
          </motion.div>

          {/* Section 2: Exact Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-medium">2. The Consent Language</h2>
            </div>
            <p className="text-zinc-300 mb-6">
              Next to the required checkbox on our intake forms, the consumer is presented with the following explicit language:
            </p>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 text-orange-100 font-medium italic">
              "By checking this box, I agree to receive SMS text messages from Agentic Services regarding my inquiry, appointments, and services. Reply STOP to opt-out at any time. Message and data rates may apply. Read our Privacy Policy for more details."
            </div>
          </motion.div>

          {/* Section 3: Opt-out Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-medium">3. Opt-Out Instructions</h2>
            </div>
            <div className="space-y-6 text-zinc-300">
              <p>
                Agentic Services honors all opt-out requests instantly. Consumers are informed of their right to opt-out at the point of consent.
              </p>
              <p>
                To revoke consent, a consumer simply needs to reply with the word <strong>STOP</strong> to any message received from our business numbers. Upon receipt of the "STOP" keyword, our system automatically removes the number from all messaging campaigns. No further messages will be sent unless the consumer opts-in again explicitly with a "START" command.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
