import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="pricing" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your team. Start free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="relative bg-card border border-border rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-8">Perfect for individuals and small teams getting started</p>
                
                <Button className="w-full mb-8">Get Started Free</Button>
                
                <div className="text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Up to 3 team members</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">5 data sources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Basic analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Email support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Community access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="relative bg-card border-2 border-primary rounded-xl p-8">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-8">Ideal for growing teams and advanced analytics needs</p>
                
                <Button className="w-full mb-8">Start Free Trial</Button>
                
                <div className="text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Up to 25 team members</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Unlimited data sources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Advanced AI analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">API access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative bg-card border border-border rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">Custom</span>
                </div>
                <p className="text-muted-foreground mb-8">Tailored solutions for large organizations</p>
                
                <Button variant="outline" className="w-full mb-8">Contact Sales</Button>
                
                <div className="text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Unlimited team members</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Enterprise data sources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">White-label solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Dedicated support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">SLA guarantees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">On-premise deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Can I change my plan anytime?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Is there a free trial?</h3>
              <p className="text-muted-foreground">We offer a 14-day free trial for the Professional plan. No credit card required. You can experience all premium features during the trial period.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for Enterprise customers. All payments are processed securely through Stripe.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Do you offer discounts for annual plans?</h3>
              <p className="text-muted-foreground">Yes! Save 20% when you choose annual billing. Educational institutions and non-profits are eligible for additional discounts.</p>
            </div>
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
