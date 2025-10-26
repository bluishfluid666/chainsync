import { Link } from "wouter";
import { ArrowRight, Shield, Lock, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Securing the Next Generation of{" "}
                <span className="gradient-text">Enterprise AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ChainSync provides comprehensive protection for your AI systems. From model integrity to data security, we help enterprises deploy AI with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a className="button-primary inline-flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/solutions">
                  <a className="button-secondary inline-flex items-center justify-center gap-2">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl h-96 flex items-center justify-center shadow-xl">
                <div className="text-white text-center">
                  <Shield className="w-24 h-24 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Enterprise AI Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ChainSync?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end security solutions designed specifically for enterprise AI deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Model Protection</h3>
              <p className="text-gray-600">
                Safeguard your AI models from unauthorized access, theft, and tampering with advanced encryption and monitoring.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Guardrails</h3>
              <p className="text-gray-600">
                Implement intelligent data validation and filtering to ensure your models receive only trusted, compliant data.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance & Risk</h3>
              <p className="text-gray-600">
                Meet regulatory requirements and monitor risk in real-time with comprehensive compliance tracking and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your AI?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading enterprises that trust ChainSync to protect their AI infrastructure.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

