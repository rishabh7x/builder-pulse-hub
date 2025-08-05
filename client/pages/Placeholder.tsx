import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
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

            {/* CTA Button */}
            <Button variant="outline" className="hidden md:block">
              Download
            </Button>
          </div>
        </div>
      </header>

      {/* Placeholder Content */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🚧</div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8">
            {description || "This page is coming soon. We're working hard to bring you amazing content!"}
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Want to help us build this page? Continue prompting to add more content!
            </p>
            <Link to="/">
              <Button>
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
