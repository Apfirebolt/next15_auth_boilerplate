"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  HiOutlineShieldCheck, 
  HiOutlineCube, 
  HiOutlineBolt, 
  HiOutlineUserGroup 
} from "react-icons/hi2";

const stats = [
  { label: "Active Deployments", value: "100k+" },
  { label: "Uptime Guarantee", value: "99.99%" },
  { label: "Global Edge Nodes", value: "48" },
  { label: "Community Contributors", value: "2,500+" },
];

const values = [
  {
    name: "Security by Default",
    description:
      "Engineered from the ground up to prevent token leakage, session hijacking, and unauthorized resource access with zero overhead.",
    icon: HiOutlineShieldCheck,
  },
  {
    name: "Developer Ergonomics",
    description:
      "Clean abstractions, comprehensive TypeScript types, and intuitive APIs that integrate seamlessly into modern full-stack workflows.",
    icon: HiOutlineCube,
  },
  {
    name: "Sub-Millisecond Latency",
    description:
      "Optimized cryptographic operations and distributed edge verification keep token validation lightweight and instant.",
    icon: HiOutlineBolt,
  },
  {
    name: "Open Collaboration",
    description:
      "Built alongside an active open-source community to continuously audit security patterns and expand identity provider support.",
    icon: HiOutlineUserGroup,
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & Infrastructure Lead",
    bio: "Previously scaled distributed auth clusters and identity microservices.",
  },
  {
    name: "Sarah Chen",
    role: "Head of Security Architecture",
    bio: "Specializes in zero-trust environments, cryptographic protocols, and RBAC.",
  },
  {
    name: "Marcus Vance",
    role: "Lead Systems Engineer",
    bio: "Passionate about low-latency edge computing and resilient session caching.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden border-b border-neutral-200 py-24 sm:py-32 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Our Mission
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
                Building reliable authentication for the modern web.
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                We believe authentication and user management shouldn't require complex, brittle pipelines. 
                Next Auth provides hardened, scalable identity primitives designed to integrate cleanly with modern production architectures.
              </p>
            </div>

            {/* Metrics Counter */}
            <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 sm:grid-cols-4 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Foundations
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                Engineered for security and developer speed.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.name}
                    className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                      {val.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="border-t border-neutral-200 bg-neutral-50/50 py-20 sm:py-28 dark:border-neutral-800 dark:bg-neutral-900/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Team
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                Backed by engineers focused on infrastructure.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="border-t border-neutral-200 py-16 text-center dark:border-neutral-800">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
              Ready to secure your application?
            </h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Integrate in minutes with pre-configured session management and token lifecycle hooks.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/register"
                className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;