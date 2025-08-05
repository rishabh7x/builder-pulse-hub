import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            The Future of{" "}
            <span className="text-primary">Data Analytics</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your business with AI-powered insights. From finance to research, 10x delivers intelligent analytics across every industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Explore Use Cases
            </Button>
          </div>

          {/* Industry Showcase */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8">Trusted across industries</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              <Link to="/use-cases/finance" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent/20 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💰</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Finance</span>
              </Link>
              
              <Link to="/use-cases/marketing" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent/20 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📈</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Marketing</span>
              </Link>
              
              <Link to="/use-cases/data-science" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent/20 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🔬</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Data Science</span>
              </Link>
              
              <Link to="/use-cases/scientific-research" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent/20 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🧪</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Research</span>
              </Link>
              
              <Link to="/use-cases/education" className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-accent/20 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">Education</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              One Platform, Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how 10x transforms data analysis across different sectors with specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/use-cases/finance" className="group">
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-6 hover:from-purple-500/20 hover:to-blue-600/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Finance</h3>
                <p className="text-muted-foreground text-sm">Forecast trends, analyze risk, and optimize financial performance with AI-driven insights.</p>
              </div>
            </Link>

            <Link to="/use-cases/marketing" className="group">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 hover:from-green-500/20 hover:to-emerald-600/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Marketing</h3>
                <p className="text-muted-foreground text-sm">Transform campaign data into actionable insights and drive growth with precision targeting.</p>
              </div>
            </Link>

            <Link to="/use-cases/data-science" className="group">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-xl p-6 hover:from-orange-500/20 hover:to-red-600/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Data Science</h3>
                <p className="text-muted-foreground text-sm">Accelerate complex analyses and build predictive models with automated workflows.</p>
              </div>
            </Link>

            <Link to="/use-cases/scientific-research" className="group">
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-600/10 border border-teal-500/20 rounded-xl p-6 hover:from-teal-500/20 hover:to-cyan-600/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Scientific Research</h3>
                <p className="text-muted-foreground text-sm">Streamline research workflows and extract meaningful insights from complex datasets.</p>
              </div>
            </Link>

            <Link to="/use-cases/education" className="group">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-6 hover:from-purple-500/20 hover:to-pink-600/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Education</h3>
                <p className="text-muted-foreground text-sm">Empower students and educators with interactive data analysis and collaborative workflows.</p>
              </div>
            </Link>

            <Link to="/features" className="group">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 hover:from-primary/20 hover:to-accent/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">View All Features</h3>
                <p className="text-muted-foreground text-sm">Explore the complete platform capabilities and see how 10x can transform your workflow.</p>
              </div>
            </Link>
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
