import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl font-bold text-foreground">
                10x.in
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link to="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors">
                Enterprise
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </nav>

            {/* Desktop CTA and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:block">
                Download
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-muted-foreground hover:text-foreground"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/pricing"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/features"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/enterprise"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enterprise
                </Link>
                <Link
                  to="/blog"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/careers"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <div className="px-3 py-2">
                  <Button variant="outline" className="w-full">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Build Agentic Insights from your{" "}
            <span className="text-primary">data</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reach 10x faster Time to insight with AI
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Download for macOS
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              All Downloads
            </Button>
          </div>

          {/* Trusted By Section */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by Data Analysts</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">TSL</div>
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">Bluecore</div>
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">Acme</div>
              <div className="text-xl sm:text-2xl font-bold text-muted-foreground">DataCo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* AI Data Analysts */}
            <div className="feature-card-blue rounded-xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-32 bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📊</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Data Analysts</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Do you see build fingerprinted Analytics queries? Reduce complexity by providing one click AI analyst tools to the data.
                </p>
              </div>
            </div>

            {/* Knows your workflows */}
            <div className="feature-card-teal rounded-xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-32 bg-teal-900/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">🔗</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Knows your workflows</h3>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Get answers from your data pipelines or any big tech that can be extended with one click.
                </p>
              </div>
            </div>

            {/* Ask in natural language */}
            <div className="gradient-card rounded-xl p-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">💬</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Ask in natural language and get trustable answers
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Upload while assisting there is an authenticated from the analyst overall.
                </p>
              </div>
            </div>

            {/* Workflow Orchestration */}
            <div className="gradient-card rounded-xl p-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">⚙️</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Workflow Orchestration: Build Smart Data Pipelines
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Streamline complex data transformations and deploy live models intelligently direct trigger from expert to insight.
                </p>
              </div>
            </div>

            {/* Task Management */}
            <div className="gradient-card rounded-xl p-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📋</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Task Management: Orchestrate Tasks at Scale
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Write directly. Stent tasks, assign to appropriate level queries across your entire queries data model.
                </p>
              </div>
            </div>

            {/* Advanced Analytics */}
            <div className="gradient-card rounded-xl p-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-full h-32 bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">📈</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Advanced Analytics: Connect Everything, Analyze Anywhere
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Integrate with 100+ data sources and Excel, but sophisticated clustering and predictive analytics with enterprise grade governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Insights Faster Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Build insights faster
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent, fast, and familiar. 10x is the best way to work with your data and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontier Intelligence */}
            <div className="feature-card-blue rounded-xl p-6 text-center">
              <div className="w-full h-24 bg-blue-900/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-3xl">🧠</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Frontier Intelligence</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Powered by a mix of purpose-built and fine-tuned LLMs, in every insight end User Analytics team.
              </p>
            </div>

            {/* Feels Familiar */}
            <div className="feature-card-teal rounded-xl p-6 text-center">
              <div className="w-full h-24 bg-teal-900/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-3xl">👥</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Feels Familiar</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Import all your statements, frames, and schema and work.
              </p>
            </div>

            {/* Privacy Options */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-6 text-center">
              <div className="w-full h-24 bg-red-900/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-3xl">🔒</div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Privacy Options</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                If you enable Privacy Mode your data is never shared outside your model. Your AI SOC 2 compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Loved by world-class analysts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="gradient-card rounded-xl p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "10x has completely transformed how we approach data. This language queries. We get to build-to-last by language queries down to hours every day, and the insights are incredibly accurate."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-foreground">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Senior Data Scientist</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="gradient-card rounded-xl p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The AI pipeline development is a game-changer! Amazing speed up data insights happens in minutes. The accuracy and speed are unmatched."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-foreground">Marcus Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Analytics Director</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="gradient-card rounded-xl p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Finally we can biggest concern, but this CI/CD experience our big data experience. I give us the confidence to adopt it enterprise-wide."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  E
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-foreground">Emma Thompson</div>
                  <div className="text-sm text-muted-foreground">Chief Data Officer</div>
                </div>
              </div>
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
