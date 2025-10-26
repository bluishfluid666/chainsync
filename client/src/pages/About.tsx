import { Link } from "wouter";
import { Users, Target, Lightbulb, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="gradient-text">ChainSync</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We're building the future of enterprise AI security, one model at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that enterprise AI should be secure, transparent, and trustworthy. ChainSync exists to make that vision a reality by providing comprehensive security solutions that protect AI systems without compromising performance or innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower enterprises to deploy AI with confidence, knowing that their models, data, and systems are protected by the most advanced security technology available.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl h-96 flex items-center justify-center">
              <Target className="w-32 h-32 text-blue-600 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security First",
                description:
                  "Security is not an afterthought. It's embedded in everything we build.",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description:
                  "We continuously innovate to stay ahead of emerging threats and challenges.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Focus",
                description:
                  "Your success is our success. We're committed to your long-term growth.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We maintain the highest standards in everything we do.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Story</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                ChainSync was founded in 2023 by a team of security experts and AI researchers who recognized a critical gap in the market. As enterprises rapidly adopted AI, they faced unprecedented security challenges—from model theft to data poisoning attacks.
              </p>

              <p>
                Our founders had spent years working at leading tech companies and security firms, where they witnessed firsthand the vulnerabilities in AI systems. They realized that existing security solutions were designed for traditional software, not for the unique challenges of AI.
              </p>

              <p>
                That's when ChainSync was born. We set out to build the first comprehensive security platform purpose-built for enterprise AI. From day one, we focused on solving real problems for real enterprises—not theoretical challenges.
              </p>

              <p>
                Today, ChainSync is trusted by leading enterprises across finance, healthcare, technology, and other industries. We've helped them secure billions of dollars in AI infrastructure and deploy models with confidence.
              </p>

              <p>
                But our journey is just beginning. As AI continues to evolve, so will the threats. We're committed to staying at the forefront of AI security, innovating new solutions to protect the next generation of enterprise AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Native Security",
                description:
                  "We don't adapt traditional security for AI. We build security from the ground up for AI systems.",
              },
              {
                title: "Expert Team",
                description:
                  "Our team includes security researchers, AI engineers, and compliance experts from top companies.",
              },
              {
                title: "Enterprise-Grade",
                description:
                  "Built for enterprise needs. Scalable, reliable, and compliant with all major regulations.",
              },
              {
                title: "Customer Success",
                description:
                  "We're not just a vendor. We're a partner in your AI security journey.",
              },
              {
                title: "Continuous Innovation",
                description:
                  "We invest heavily in R&D to stay ahead of emerging threats and technologies.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden fees. Simple, transparent pricing that scales with your needs.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the team securing the future of enterprise AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get in Touch
              </a>
            </Link>
            <a
              href="https://careers.chainsync.ai"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon component
function Shield({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m7.784-4.817a.5.5 0 00-.596-.736A9.5 9.5 0 1021.5 12c0-.82-.57-1.513-1.007-2.013M9 12l2 2 4-4"
      />
    </svg>
  );
}

