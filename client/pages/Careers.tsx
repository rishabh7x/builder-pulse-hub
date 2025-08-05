import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="careers" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Build the Future of{" "}
            <span className="text-primary">Data Analytics</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join our team of passionate engineers, designers, and analysts who are revolutionizing how organizations understand their data.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Join 10x?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building something special. Join us in creating the next generation of data analytics tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission-Driven */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Mission-Driven Work</h3>
              <p className="text-muted-foreground">
                Make a real impact by democratizing data analytics and helping organizations make better decisions.
              </p>
            </div>

            {/* Growth & Learning */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth & Learning</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities, conference attendance, and professional development budget.
              </p>
            </div>

            {/* Work-Life Balance */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible remote work, unlimited PTO, and a culture that values your personal time and well-being.
              </p>
            </div>

            {/* Competitive Benefits */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Competitive Benefits</h3>
              <p className="text-muted-foreground">
                Competitive salaries, equity, health insurance, retirement plans, and comprehensive benefits package.
              </p>
            </div>

            {/* Cutting-Edge Tech */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Tech</h3>
              <p className="text-muted-foreground">
                Work with the latest technologies, AI/ML frameworks, and modern development practices.
              </p>
            </div>

            {/* Inclusive Culture */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inclusive Culture</h3>
              <p className="text-muted-foreground">
                Diverse, inclusive, and collaborative environment where everyone's voice is heard and valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our growing team. We're hiring across multiple departments.
            </p>
          </div>

          <div className="space-y-6">
            {/* Engineering Positions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Senior Full-Stack Engineer</h3>
                  <p className="text-muted-foreground">Engineering • San Francisco, CA / Remote</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <p className="text-muted-foreground">
                Build scalable web applications and APIs that power our analytics platform. Experience with React, Node.js, and cloud infrastructure required.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Machine Learning Engineer</h3>
                  <p className="text-muted-foreground">Engineering • New York, NY / Remote</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <p className="text-muted-foreground">
                Develop and deploy ML models for automated analytics. Experience with Python, TensorFlow/PyTorch, and MLOps pipelines preferred.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">DevOps Engineer</h3>
                  <p className="text-muted-foreground">Engineering • Austin, TX / Remote</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <p className="text-muted-foreground">
                Build and maintain our cloud infrastructure. Experience with AWS/GCP, Kubernetes, and CI/CD pipelines required.
              </p>
            </div>

            {/* Product & Design */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Senior Product Designer</h3>
                  <p className="text-muted-foreground">Design • Remote</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <p className="text-muted-foreground">
                Design intuitive user experiences for complex data analytics workflows. Experience with Figma, user research, and design systems required.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Product Manager</h3>
                  <p className="text-muted-foreground">Product • San Francisco, CA</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <p className="text-muted-foreground">
                Drive product strategy and roadmap for our analytics platform. Experience with B2B SaaS products and data analytics preferred.
              </p>
            </div>

            {/* Sales & Marketing */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Sales Representative</h3>
                  <p className="text-muted-foreground">Sales • New York, NY</p>
                </div>
                <Button variant="outline">Apply Now</Button>
              </div>
              <p className="text-muted-foreground">
                Drive enterprise sales and build relationships with large organizations. Experience selling technical products to data teams required.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a role that fits?</p>
            <Button variant="outline">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">��</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Obsession</h3>
              <p className="text-muted-foreground">
                We put our customers at the center of everything we do, constantly seeking to understand and solve their challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new ideas, challenge conventions, and continuously push the boundaries of what's possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe the best solutions come from diverse perspectives working together toward a common goal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We hold ourselves to the highest standards and strive for excellence in everything we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              "Working at 10x has been incredible. The team is brilliant, the problems we're solving are fascinating, and the impact we're making on our customers is real and meaningful."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                A
              </div>
              <div>
                <div className="font-semibold text-foreground">Alex Chen</div>
                <div className="text-sm text-muted-foreground">Senior Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Ready to Join Our Team?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the next step in your career and help us build the future of data analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              View All Positions
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn About Our Culture
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
