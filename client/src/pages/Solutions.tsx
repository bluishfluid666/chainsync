import { Link } from "wouter";
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "Model Protection",
      description: "Protect your AI models from unauthorized access and intellectual property theft.",
      icon: "🔐",
      features: [
        "Encryption and secure storage",
        "Access control and monitoring",
        "Audit trails and compliance logs",
        "Real-time threat detection",
      ],
      painPoint: "AI models are valuable IP. Unauthorized access or theft can compromise competitive advantage.",
    },
    {
      title: "Data Guardrails",
      description: "Ensure data quality and security throughout your AI pipeline.",
      icon: "🛡️",
      features: [
        "Automated data validation",
        "Anomaly detection",
        "Data lineage tracking",
        "Quality assurance automation",
      ],
      painPoint: "Poor data quality leads to model degradation. Malicious data can compromise model integrity.",
    },
    {
      title: "Compliance & Risk Monitoring",
      description: "Meet regulatory requirements and monitor AI risks in real-time.",
      icon: "📊",
      features: [
        "Regulatory compliance tracking",
        "Risk assessment dashboards",
        "Automated reporting",
        "Policy enforcement",
      ],
      painPoint: "Regulatory requirements are complex. Non-compliance can result in fines and reputational damage.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive AI Security <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            ChainSync offers a complete suite of tools to protect your enterprise AI infrastructure at every stage of deployment.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                  {/* Pain Point */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-900 mb-1">The Challenge</h4>
                        <p className="text-red-700 text-sm">{solution.painPoint}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-6xl">{solution.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Enterprises Choose ChainSync
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Security",
                description: "Comprehensive protection from model development to deployment and monitoring.",
              },
              {
                title: "Regulatory Compliance",
                description: "Built-in compliance with GDPR, HIPAA, SOC 2, and other enterprise standards.",
              },
              {
                title: "Real-Time Monitoring",
                description: "Continuous monitoring and alerting for threats and anomalies.",
              },
              {
                title: "Easy Integration",
                description: "Seamless integration with existing AI infrastructure and workflows.",
              },
              {
                title: "Expert Support",
                description: "24/7 support from AI security experts to help you succeed.",
              },
              {
                title: "Scalable Solutions",
                description: "Designed to scale with your enterprise AI operations.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your AI?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with ChainSync today and secure your enterprise AI infrastructure.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

