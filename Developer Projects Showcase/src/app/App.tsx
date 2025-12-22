import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProjectCard, Project } from './components/ProjectCard';
import { ProjectDetailsSheet } from './components/ProjectDetailsSheet';
import { motion } from "motion/react";

// Mock Data
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CloudDash Analytics',
    description: 'A comprehensive dashboard for monitoring cloud infrastructure metrics in real-time.',
    fullDescription: 'CloudDash Analytics is an enterprise-grade solution designed to provide real-time visibility into complex cloud infrastructures. By aggregating metrics from AWS, Azure, and Google Cloud, it offers a unified view of server health, network traffic, and cost analysis. The platform utilizes WebSocket connections for live updates and implements advanced caching strategies to ensure performance at scale.',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvamVjdCUyMGRhc2hib2FyZCUyMG1vZGVybiUyMHVpfGVufDF8fHx8MTc2NjM3MzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'Node.js', 'AWS'],
    link: 'https://example.com/clouddash',
    version: '2.4.0',
    lastUpdated: 'Oct 24, 2024',
    features: [
      'Real-time metric visualization with sub-second latency',
      'Customizable alert thresholds via email and Slack',
      'Multi-cloud resource aggregation',
      'Role-based access control (RBAC)',
      'Historical data export and reporting'
    ],
    policies: {
      privacy: 'CloudDash Analytics collects minimal usage data to improve service quality. We do not store sensitive infrastructure credentials; instead, we use secure, limited-scope access tokens. All data is encrypted at rest and in transit.',
      terms: 'By using CloudDash, you agree to our acceptable use policy. The software is provided "as is" without warranty of any kind. Users are responsible for maintaining the security of their account credentials.',
      support: 'Enterprise support is available 24/7 with a 1-hour response time SLA. Standard tier support is available via email with a 24-hour response time.'
    }
  },
  {
    id: '2',
    title: 'FinTrack Mobile',
    description: 'Personal finance tracking application with AI-powered budget recommendations.',
    fullDescription: 'FinTrack Mobile empowers users to take control of their finances through automated expense tracking and intelligent budgeting. The app connects securely to bank accounts using Plaid integration, automatically categorizing transactions and providing personalized insights. The AI engine analyzes spending habits to suggest realistic budget adjustments and savings goals.',
    image: 'https://images.unsplash.com/photo-1762340276397-db7ca4ee6ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NjYzNzM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Firebase', 'AI/ML', 'Redux'],
    link: 'https://example.com/fintrack',
    version: '1.2.1',
    lastUpdated: 'Nov 12, 2024',
    features: [
      'Automated transaction import via Plaid',
      'AI-driven spending categorization',
      'Custom budget goals and tracking',
      'Monthly financial health reports',
      'Dark mode and biometric authentication'
    ],
    policies: {
      privacy: 'We prioritize your financial privacy. All banking data is tokenized and never stored on our servers. We do not sell user data to third parties. Anonymized aggregation is used solely for training our recommendation models.',
      terms: 'FinTrack is a financial tool, not a financial advisor. Users should consult with professionals for investment advice. Subscription renewal occurs automatically unless cancelled 24 hours prior to the end of the period.',
      support: 'Support is available via the in-app chat feature or email. We aim to resolve all billing inquiries within 48 hours.'
    }
  },
  {
    id: '3',
    title: 'CodeStream IDE',
    description: 'A collaborative code editor built for remote pair programming teams.',
    fullDescription: 'CodeStream IDE redefines remote collaboration for development teams. It features a high-performance code editor based on Monaco, with built-in video conferencing and real-time cursor tracking. Developers can share terminals, run tests synchronously, and debug together in a unified environment, eliminating the friction of screen sharing.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwc2NyZWVuJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY2MzczNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Electron', 'WebRTC', 'React', 'GraphQL'],
    link: 'https://example.com/codestream',
    version: '3.0.0',
    lastUpdated: 'Dec 05, 2024',
    features: [
      'Low-latency collaborative editing (OT based)',
      'Integrated high-quality video and voice chat',
      'Shared terminal sessions',
      'Git integration with visual conflict resolution',
      'Plugin system for language support'
    ],
    policies: {
      privacy: 'Session content, including code and voice data, is peer-to-peer encrypted and does not pass through our recording servers unless explicitly enabled for archival purposes. Minimal metadata is logged for service optimization.',
      terms: 'The software is licensed under a proprietary EULA. Redistribution or reverse engineering is prohibited. Commercial use requires a valid team license.',
      support: 'Community support is available via our Discord server. Priority email support is provided for paid team plans.'
    }
  },
  {
    id: '4',
    title: 'Nexus Infrastructure',
    description: 'IaC visualization tool that maps Terraform configurations to visual diagrams.',
    fullDescription: 'Nexus Infrastructure bridges the gap between code and architecture. By parsing Terraform state files, it generates interactive, auto-updating diagrams of your cloud infrastructure. This tool helps DevOps teams validate architecture, identify orphaned resources, and generate documentation automatically.',
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGNsb3VkJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjYzNzM0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Go', 'Vue.js', 'Terraform', 'D3.js'],
    link: 'https://example.com/nexus',
    version: '0.9.5-beta',
    lastUpdated: 'Jan 15, 2025',
    features: [
      'Automatic diagram generation from .tfstate',
      'Dependency graph visualization',
      'Cost estimation overlay',
      'Drift detection alerts',
      'Export to SVG, PNG, and PDF'
    ],
    policies: {
      privacy: 'Nexus runs entirely locally or within your private VPC. No infrastructure data is sent to our servers. Usage telemetry is optional and disabled by default.',
      terms: 'During the beta period, the software is free for non-commercial use. We reserve the right to change pricing models for the 1.0 release.',
      support: 'Beta users can submit bug reports via GitHub Issues. Guaranteed support SLAs are not available for beta versions.'
    }
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section id="projects" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work, showcasing technical depth, problem-solving skills, and attention to user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start a Project?</h2>
              <p className="opacity-90 max-w-2xl mx-auto mb-8">
                I'm currently available for freelance work and consulting opportunities. Let's discuss how we can build something great together.
              </p>
              <button className="bg-background text-foreground hover:bg-muted transition-colors px-6 py-3 rounded-md font-semibold">
                Get in Touch
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <ProjectDetailsSheet 
        project={selectedProject} 
        isOpen={isDetailsOpen} 
        onClose={handleCloseDetails} 
      />
    </div>
  );
}
