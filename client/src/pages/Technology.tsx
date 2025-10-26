import { Link } from "wouter";
import { Zap, Database, Shield, Network } from "lucide-react";

export default function Technology() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How <span className="gradient-text">ChainSync</span> Works
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our advanced technology stack provides enterprise-grade AI security without compromising performance.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Architecture
          </h2>

          {/* Architecture Diagram Placeholder */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-12 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Layer 1: Data Input */}
              <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-md">
                <Database className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Data Input</h3>
                <p className="text-sm text-gray-600">Secure data ingestion with validation</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="text-2xl text-blue-400">→</div>
              </div>

              {/* Layer 2: Processing */}
              <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-md">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Processing</h3>
                <p className="text-sm text-gray-600">Encrypted model execution</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="text-2xl text-blue-400">→</div>
              </div>

              {/* Layer 3: Monitoring */}
              <div className="bg-white rounded-lg p-6 border-2 border-blue-300 shadow-md">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-sm text-gray-600">Real-time threat detection</p>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p className="text-sm">All layers are secured with end-to-end encryption and compliance monitoring</p>
            </div>
          </div>

          {/* Core Components */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Component 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <Network className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Gateway</h3>
              <p className="text-gray-600 mb-4">
                All data flows through our secure gateway, which performs real-time validation, encryption, and threat detection. This ensures that only trusted data reaches your AI models.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ TLS 1.3 encryption</li>
                <li>✓ DDoS protection</li>
                <li>✓ Rate limiting</li>
                <li>✓ Anomaly detection</li>
              </ul>
            </div>

            {/* Component 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Model Protection Engine</h3>
              <p className="text-gray-600 mb-4">
                Our proprietary model protection technology safeguards your AI models through encryption, access control, and continuous monitoring for unauthorized access attempts.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ AES-256 encryption</li>
                <li>✓ Hardware security modules</li>
                <li>✓ Access logging</li>
                <li>✓ Integrity verification</li>
              </ul>
            </div>

            {/* Component 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Governance Platform</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive data governance with lineage tracking, quality assurance, and compliance verification. Know exactly where your data comes from and how it's being used.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Data lineage tracking</li>
                <li>✓ Quality metrics</li>
                <li>✓ Compliance validation</li>
                <li>✓ Audit trails</li>
              </ul>
            </div>

            {/* Component 4 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligence Hub</h3>
              <p className="text-gray-600 mb-4">
                Centralized monitoring and analytics dashboard providing real-time insights into your AI infrastructure security, performance, and compliance status.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Real-time dashboards</li>
                <li>✓ Threat intelligence</li>
                <li>✓ Compliance reports</li>
                <li>✓ Alert management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero-Trust Architecture",
                description:
                  "Every request is verified and authenticated, regardless of source. No implicit trust.",
              },
              {
                title: "End-to-End Encryption",
                description:
                  "All data is encrypted in transit and at rest using industry-standard cryptographic algorithms.",
              },
              {
                title: "Distributed Processing",
                description:
                  "Horizontally scalable architecture that grows with your enterprise AI workloads.",
              },
              {
                title: "Compliance-Ready",
                description:
                  "Built with compliance in mind. Supports GDPR, HIPAA, SOC 2, and other regulatory frameworks.",
              },
              {
                title: "Real-Time Analytics",
                description:
                  "Process millions of events per second to detect threats and anomalies instantly.",
              },
              {
                title: "API-First Design",
                description:
                  "RESTful APIs and webhooks for seamless integration with your existing systems.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Enterprise AI Security
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            See how ChainSync's advanced technology can protect your AI infrastructure.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Technical Demo
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

