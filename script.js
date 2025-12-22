const projects = [
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
    }
];

const projectsGrid = document.getElementById('projectsGrid');
// Modal elements removed as part of multi-page refactor

function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="window.location.href='policies/${project.id}.html'">
            <div class="project-image" style="background-image: url('${project.image}')"></div>
            <div class="project-card-content">
                <div class="project-header">
                    <span class="version">v${project.version}</span>
                    <span class="last-updated">${project.lastUpdated}</span>
                </div>
                <h3>${project.title}</h3>
                <div class="tags">
                    ${project.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="project-footer">
                    <span class="view-btn">Details & Policies &rarr;</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Modal logic removed

// Initial render
renderProjects();
