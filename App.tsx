import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { ListItem } from './components/ListItem';
import { ComparisonTable } from './components/ComparisonTable';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Icons } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-white text-slate-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />

        <Section title="Why Strategy Co-Pilot" subtitle="Because strategy shouldn’t stop after the meeting.">
            <p className="text-lg text-slate-600 mb-16 max-w-3xl mx-auto text-center">
                Traditional plans freeze the moment they’re written. The world moves — your document doesn’t.
                Co-Pilot bridges that gap by turning your plan into an evolving, self-improving system.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <FeatureCard icon={<Icons.BrainCircuit />} title="Never static" description="Your strategy grows as your data changes." />
                <FeatureCard icon={<Icons.Radar />} title="Always aware" description="It senses shifts in your business, market, or team performance." />
                <FeatureCard icon={<Icons.Target />} title="Focused on results" description="It connects big goals to daily actions — automatically." />
            </div>
             <p className="mt-16 text-lg text-slate-600 max-w-3xl mx-auto text-center">
                Imagine a plan that doesn’t just report what happened — it helps make the next move.
            </p>
        </Section>
        
        <Section title="What It Does" className="bg-slate-50">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
                <ListItem number="1" title="Understands your business" description="Co-Pilot learns how your organization works and what success means to you." />
                <ListItem number="2" title="Keeps watch" description="It monitors signals across your operations and market to spot risks or opportunities early." />
                <ListItem number="3" title="Acts and adapts" description="When something changes, it suggests smart adjustments — reprioritizing resources or timelines with context." />
                <ListItem number="4" title="Learns over time" description="Every cycle makes it smarter, more aligned, and more attuned to how you lead." />
            </div>
        </section>

        <Section title="Authentication & Security" subtitle="Enterprise-Grade by Default">
            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto text-center">
                Trust is the foundation of intelligence. Co-Pilot is built with enterprise-class safeguards, so your strategy and data stay entirely under your control.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
                <ListItem icon={<Icons.CheckCircle />} title="Multi-method Sign-In (Google, Apple, email + passkeys, SSO)" />
                <ListItem icon={<Icons.CheckCircle />} title="Granular access control by role and workspace" />
                <ListItem icon={<Icons.CheckCircle />} title="Full governance and audit visibility" />
                <ListItem icon={<Icons.CheckCircle />} title="Privacy guardrails — your data is never used to train base models" />
            </div>
            <p className="mt-12 text-lg text-slate-600 max-w-3xl mx-auto text-center">
                Confident decisions start with confident security.
            </p>
        </Section>

        <Section title="Scalability & Reliability" className="bg-slate-50">
             <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto text-center">
                Whether you’re a startup or an enterprise, Co-Pilot grows with you — instantly and quietly.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
                <ListItem icon={<Icons.CheckCircle />} title="Elastic infrastructure that adapts to demand" />
                <ListItem icon={<Icons.CheckCircle />} title="Handles massive datasets without slowdowns" />
                <ListItem icon={<Icons.CheckCircle />} title="Regional resilience and automatic fail-safes" />
                <ListItem icon={<Icons.CheckCircle />} title="Optimized for speed and precision in every response" />
            </div>
            <p className="mt-12 text-lg text-slate-600 max-w-3xl mx-auto text-center">
                So your strategy never waits for the system to catch up.
            </p>
        </Section>

        <Section title="AI That Regenerates and Grows With Your Culture" >
             <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto text-center">
                Your organization has its own DNA — Co-Pilot learns it.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
                <ListItem icon={<Icons.CheckCircle />} title="Captures lessons and outcomes to build institutional memory" />
                <ListItem icon={<Icons.CheckCircle />} title="Monitors assumptions and re-prioritizes based on real impact" />
                <ListItem icon={<Icons.CheckCircle />} title="Adapts to your language, frameworks, and risk posture" />
                <ListItem icon={<Icons.CheckCircle />} title="Feels like a seasoned strategist who knows your business inside out" />
            </div>
            <p className="mt-12 text-lg text-slate-600 max-w-3xl mx-auto text-center">
                It doesn’t just use AI — it becomes part of your culture.
            </p>
        </Section>
        
        <Section title="Competitive Snapshot" className="bg-slate-50">
            <ComparisonTable />
            <p className="mt-12 text-xl font-semibold text-slate-900 max-w-3xl mx-auto text-center">
                Simply put: others visualize the plan. <br/> Co-Pilot realizes it.
            </p>
        </Section>

        <Section title="Key Benefits">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                <FeatureCard icon={<Icons.ViewfinderCircle />} title="See everything in one place" description="Unified visibility across goals and performance." />
                <FeatureCard icon={<Icons.Bolt />} title="Make smarter decisions, faster" description="Real-time insight replaces endless slide decks." />
                <FeatureCard icon={<Icons.UserGroup />} title="Keep everyone aligned" description="Every team knows what matters most — and why." />
                <FeatureCard icon={<Icons.Sparkles />} title="Adapt with confidence" description="The system learns from every outcome." />
            </div>
            <p className="mt-12 text-xl font-semibold text-slate-900 max-w-3xl mx-auto text-center">
                Simple on the surface, extraordinary underneath.
            </p>
        </Section>

        <CallToAction />

      </main>
      <Footer />
    </div>
  );
};

export default App;