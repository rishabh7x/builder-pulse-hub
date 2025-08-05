import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ScientificResearchUseCase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-xl font-bold text-foreground">
                10x.in
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              
              {/* Use Cases Dropdown */}
              <div className="relative group">
                <button className="text-foreground font-medium flex items-center space-x-1">
                  <span>Use Cases</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 space-y-2">
                    <Link to="/use-cases/finance" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">💰</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover/item:text-primary">Finance</h4>
                        <p className="text-sm text-muted-foreground">Accurately forecast financial trends</p>
                      </div>
                    </Link>
                    
                    <Link to="/use-cases/marketing" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">📈</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover/item:text-primary">Marketing</h4>
                        <p className="text-sm text-muted-foreground">Turn messy data into clear insights</p>
                      </div>
                    </Link>
                    
                    <Link to="/use-cases/data-science" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🔬</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover/item:text-primary">Data Science</h4>
                        <p className="text-sm text-muted-foreground">Automate complex analyses with ease</p>
                      </div>
                    </Link>
                    
                    <Link to="/use-cases/scientific-research" className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20 border border-accent/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🧪</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Scientific Research</h4>
                        <p className="text-sm text-muted-foreground">Analyze, visualize, and extract insights</p>
                      </div>
                    </Link>
                    
                    <Link to="/use-cases/education" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🎓</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover/item:text-primary">Education</h4>
                        <p className="text-sm text-muted-foreground">Create and share workflows with students</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
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
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/use-cases" className="hover:text-foreground transition-colors">Use Cases</Link>
            <span>/</span>
            <span className="text-foreground">Scientific Research</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-white text-4xl">🧪</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Scientific Research Use Cases
          </h1>
          
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Analyze, visualize, and extract insights from complex research data. From lab performance to clinical research, 10x empowers researchers with advanced analytics and collaborative tools.
          </p>
        </div>
      </section>

      {/* Research Analytics Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Research Analytics Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced tools for experimental research, methodology compliance, and peer-reviewed insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lab Performance Analysis */}
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-600/10 border border-teal-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lab Performance Analysis</h3>
              <p className="text-muted-foreground mb-6">
                Track experimental throughput and outcomes with advanced statistical analysis to identify patterns and optimize lab protocols.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Experimental throughput optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Quality control monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Resource utilization analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Equipment performance tracking</span>
                </li>
              </ul>
              
              <Button className="bg-teal-600 hover:bg-teal-700">Learn More →</Button>
            </div>

            {/* CARO Reporting */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-600/10 border border-cyan-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">CARO Reporting</h3>
              <p className="text-muted-foreground mb-6">
                Streamline clinical reporting with automated CARO compliance monitoring and regulatory documentation.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">Automated compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">Regulatory documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">Audit trail management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm">Risk assessment analytics</span>
                </li>
              </ul>
              
              <Button className="bg-cyan-600 hover:bg-cyan-700">Learn More →</Button>
            </div>

            {/* Cohort Accounting */}
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-600/10 border border-teal-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cohort Accounting</h3>
              <p className="text-muted-foreground mb-6">
                Track and analyze participant populations across longitudinal studies with sophisticated cohort management tools.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Population tracking analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Dropout pattern analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Enrollment forecasting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Demographic stratification</span>
                </li>
              </ul>
              
              <Button className="bg-teal-600 hover:bg-teal-700">Learn More →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Research Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Demonstrable impact for research institutions using 10x for scientific discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
              <p className="text-muted-foreground">Faster data processing</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">99.5%</div>
              <p className="text-muted-foreground">Accuracy in results</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">60%</div>
              <p className="text-muted-foreground">Reduction in analysis time</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <p className="text-muted-foreground">Reproducible workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Researchers Choose 10x */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Researchers Choose 10x
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built for scientific rigor and collaborative research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scientific Accuracy</h3>
              <p className="text-muted-foreground text-sm">
                Built-in statistical validation ensures your research meets the highest scientific standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Workflows</h3>
              <p className="text-muted-foreground text-sm">
                Create reproducible analysis pipelines that can be shared and validated by peers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Meet FDA, CARO, and other regulatory requirements with automated compliance monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Standards</h3>
              <p className="text-muted-foreground text-sm">
                Export to standard research formats and integrate with existing scientific software ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white">
            Accelerate Your Research Impact
          </h2>
          
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join research institutions using 10x to advance scientific discovery and collaboration.
          </p>

          <Button size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-semibold px-8">
            Start Free Trial
          </Button>
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
