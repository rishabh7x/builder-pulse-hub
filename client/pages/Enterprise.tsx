import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="enterprise" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Enterprise-Grade{" "}
            <span className="text-primary">Analytics</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Scale your data analytics across the entire organization with enterprise security, compliance, and support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your organization needs to implement analytics at scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Security & Compliance */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <p className="text-muted-foreground mb-6">
                Enterprise-grade security with SOC 2 Type II, GDPR, and HIPAA compliance built in.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR & HIPAA compliant</li>
                <li>• End-to-end encryption</li>
                <li>• Single Sign-On (SSO)</li>
              </ul>
            </div>

            {/* Scalable Infrastructure */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Infrastructure</h3>
              <p className="text-muted-foreground mb-6">
                Handle massive datasets and concurrent users with auto-scaling cloud infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Auto-scaling infrastructure</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Global CDN deployment</li>
                <li>• Load balancing</li>
              </ul>
            </div>

            {/* Custom Integrations */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Integrations</h3>
              <p className="text-muted-foreground mb-6">
                Connect to any data source or system with custom APIs and enterprise connectors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom API development</li>
                <li>• Enterprise connectors</li>
                <li>• Data warehouse integration</li>
                <li>• Legacy system support</li>
              </ul>
            </div>

            {/* Dedicated Support */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
              <p className="text-muted-foreground mb-6">
                White-glove onboarding and 24/7 dedicated support from our expert team.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dedicated customer success manager</li>
                <li>• 24/7 priority support</li>
                <li>• Custom training programs</li>
                <li>• Implementation consulting</li>
              </ul>
            </div>

            {/* Governance & Control */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Governance & Control</h3>
              <p className="text-muted-foreground mb-6">
                Advanced user management, permissions, and audit trails for complete governance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Role-based access control</li>
                <li>• Audit trails & logging</li>
                <li>• Data lineage tracking</li>
                <li>• Approval workflows</li>
              </ul>
            </div>

            {/* White-Label Solutions */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">White-Label Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Brand the platform as your own with custom theming and white-label options.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom branding & theming</li>
                <li>• White-label deployment</li>
                <li>• Custom domain support</li>
                <li>• Embedded analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Enterprises */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Global Enterprises
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of organizations that rely on 10x for mission-critical analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Enterprise customers</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Enterprise support</p>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                "10x has transformed how we approach data analytics across our global operations. The enterprise security and scalability have been game-changing for our organization."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  J
                </div>
                <div>
                  <div className="font-semibold text-foreground">Jennifer Martinez</div>
                  <div className="text-sm text-muted-foreground">Chief Data Officer, Global Tech Corp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Enterprise Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Our proven implementation methodology ensures successful deployment at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-muted-foreground text-sm">
                Assess your current infrastructure and plan the optimal implementation strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pilot Deployment</h3>
              <p className="text-muted-foreground text-sm">
                Start with a controlled pilot program to validate the solution with key stakeholders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Full Rollout</h3>
              <p className="text-muted-foreground text-sm">
                Scale across your organization with comprehensive training and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Continuous monitoring and optimization to maximize value and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Ready to Transform Your Enterprise Analytics?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how 10x can meet your organization's specific needs and requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Download Enterprise Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/integrations" className="hover:text-foreground transition-colors">Integrations</Link></li>
                <li><Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/security" className="hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/github" className="hover:text-foreground transition-colors">GitHub</Link></li>
                <li><Link to="/discord" className="hover:text-foreground transition-colors">Discord</Link></li>
                <li><Link to="/twitter" className="hover:text-foreground transition-colors">Twitter</Link></li>
                <li><Link to="/feedback" className="hover:text-foreground transition-colors">Feedback</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/documentation" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link to="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
                <li><Link to="/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 10x. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
