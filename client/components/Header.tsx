import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
            <Link 
              to="/pricing" 
              className={`transition-colors ${currentPage === 'pricing' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/features" 
              className={`transition-colors ${currentPage === 'features' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Features
            </Link>
            
            {/* Use Cases Dropdown - NO ARROW */}
            <div className="relative group">
              <button className={`transition-colors ${currentPage?.startsWith('use-cases') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}>
                Use Cases
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
            
            <Link 
              to="/enterprise" 
              className={`transition-colors ${currentPage === 'enterprise' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Enterprise
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${currentPage === 'blog' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Blog
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors ${currentPage === 'careers' ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
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
                to="/use-cases/finance" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Finance Use Cases
              </Link>
              <Link 
                to="/use-cases/marketing" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketing Use Cases
              </Link>
              <Link 
                to="/use-cases/data-science" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Data Science Use Cases
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
  );
}
