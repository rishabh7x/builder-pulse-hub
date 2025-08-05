import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataScienceUseCase() {
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
                    
                    <Link to="/use-cases/data-science" className="flex items-center space-x-3 p-3 rounded-lg bg-accent/20 border border-accent/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🔬</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">Data Science</h4>
                        <p className="text-sm text-muted-foreground">Automate complex analyses with ease</p>
                      </div>
                    </Link>
                    
                    <Link to="/use-cases/scientific-research" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">🧪</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover/item:text-primary">Scientific Research</h4>
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
            <span className="text-foreground">Data Science</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-white text-4xl">🔬</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Data Science Use Cases
          </h1>
          
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Accelerate complex analysis with auto data science workflows. From demand planning to inventory optimization, 10x empowers data scientists to build sophisticated models and extract insights at scale.
          </p>
        </div>
      </section>

      {/* Advanced Analytics Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Advanced Analytics Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform complex data into actionable insights with automated machine learning and advanced statistical modeling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Capacity Planning */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sales Capacity Planning</h3>
              <p className="text-muted-foreground mb-6">
                Predict optimal sales team size and structure using advanced demand modeling. Analyze pipeline capacity, predict future needs, and optimize resource allocation.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Demand forecasting models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Territory optimization analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Performance prediction models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Resource allocation optimization</span>
                </li>
              </ul>
              
              <Button className="bg-orange-600 hover:bg-orange-700">Learn More →</Button>
            </div>

            {/* Sales Forecasting */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sales Forecasting</h3>
              <p className="text-muted-foreground mb-6">
                Build sophisticated forecasting algorithms that adapt to changing market conditions. Predict revenue, identify trends, and optimize planning horizons.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Time series forecasting models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Multi-variate trend analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Seasonal pattern detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Confidence interval modeling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Automated model selection</span>
                </li>
              </ul>
              
              <Button className="bg-red-600 hover:bg-red-700">Learn More →</Button>
            </div>

            {/* Territory & Quota Planning */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Territory & Quota Planning</h3>
              <p className="text-muted-foreground mb-6">
                Optimize sales territories and quotas using data-driven insights. Balance workload, maximize coverage, and ensure fair quota distribution.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Geographic optimization models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Workload balancing algorithms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Quota fairness analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Market potential modeling</span>
                </li>
              </ul>
              
              <Button className="bg-orange-600 hover:bg-orange-700">Learn More →</Button>
            </div>

            {/* Demand & Inventory Planning */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/20 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Demand & Inventory Planning</h3>
              <p className="text-muted-foreground mb-6">
                Optimize inventory levels and predict demand patterns using advanced analytics. Minimize costs while maintaining service levels.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Demand sensing algorithms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Inventory optimization models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Supply chain risk analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Safety stock calculations</span>
                </li>
              </ul>
              
              <Button className="bg-red-600 hover:bg-red-700">Learn More →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Data Scientists Choose 10x */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Data Scientists Choose 10x
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for data scientists who need powerful tools and rapid iteration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accelerated Development</h3>
              <p className="text-muted-foreground text-sm">
                Build and deploy models 10x faster with automated feature engineering and model selection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Access cutting-edge algorithms and statistical methods through an intuitive interface.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
              <p className="text-muted-foreground text-sm">
                Run complex computations on cloud infrastructure that scales with your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration Tools</h3>
              <p className="text-muted-foreground text-sm">
                Share models, collaborate on analysis, and deploy insights across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white">
            Ready to Accelerate Your Data Science?
          </h2>
          
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join data science teams building sophisticated models and generating insights faster than ever.
          </p>

          <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8">
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
