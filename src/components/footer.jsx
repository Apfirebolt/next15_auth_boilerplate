import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: "Features", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Reference", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: FaTwitter },
      { name: "GitHub", href: "#", icon: FaGithub },
      { name: "LinkedIn", href: "#", icon: FaLinkedin },
      { name: "Discord", href: "#", icon: FaDiscord },
    ],
  };

  return (
    <footer className="w-full border-t border-neutral-200 bg-white text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Next Auth
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Modern, secure authentication infrastructure and tooling built for scalable web applications.
            </p>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                Subscribe to updates
              </h3>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Get the latest release notes and architectural guides.
              </p>
              <form className="mt-3 flex max-w-md items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-neutral-300 bg-transparent px-3.5 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-neutral-100 dark:focus:ring-neutral-100"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:text-neutral-900 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:text-neutral-900 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:text-neutral-900 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-200 pt-8 sm:flex-row dark:border-neutral-800">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            &copy; {currentYear} Next Auth Inc. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-5 sm:mt-0">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                  aria-label={item.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;