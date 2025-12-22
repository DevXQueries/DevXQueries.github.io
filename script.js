const projects = [
    {
        id: 'flashcard-app',
        title: 'FlashCard App',
        description: 'A powerful memorization tool built with Jetpack Compose for modern UI/UX.',
        fullDescription: 'FlashCard App is designed to help users memorize information efficiently. Built natively for Android using Jetpack Compose, it offers a smooth and responsive interface. The app features secure authentication via Firebase and integrates AdMob for monetization while maintaining a user-friendly experience.',
        image: './iconlogo.png',
        tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Firebase', 'AdMob'],
        link: '#', // TODO: Add Play Store link when available
        version: '1.0.0',
        lastUpdated: 'Dec 22, 2024',
        features: [
            'Modern UI built with Jetpack Compose',
            'Secure user authentication with Firebase',
            'Cloud sync for flashcard decks',
            'Spaced repetition algorithm',
            'Ad-supported (AdMob integration)'
        ],
        policies: {
            privacy: 'We prioritize user privacy. Personal data collected via Firebase Auth is used solely for account management and synchronization. AdMob may collect anonymous data to serve relevant ads.',
            terms: 'By using this app, you agree to our terms. The app is provided "as is". We reserve the right to modify services or ads at any time.',
            support: 'For support, please contact us via the developer email on the Play Store listing.'
        }
    },
    {
        id: 'quizzly',
        title: 'Quizzly',
        description: 'Exam preparation and progress tracking app for competitive exams.',
        fullDescription: 'Quizzly helps users prepare for competitive examinations (such as UPSC) by providing practice quizzes, study materials, and progress tracking. It uses a personalized approach to help users focus on weak areas.',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1080&auto=format&fit=crop',
        tags: ['Android', 'Firebase', 'Google Auth', 'Education'],
        link: '#',
        version: '1.0.0',
        lastUpdated: 'Dec 22, 2024',
        features: [
            'Practice quizzes and mock exams',
            'Progress tracking',
            'Offline study materials',
            'Google Sign-In',
            'Personalized insights'
        ],
        policies: {
            // Policies are handled via separate page
        }
    }
];

const projectsGrid = document.getElementById('projectsGrid');

function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="window.location.href='projects/${project.id}.html'">
            <div class="project-image" style="background-image: url('${project.image}')"></div>
            <div class="project-card-content">
                <div class="project-header">
                    <span class="version">v${project.version}</span>
                    <span class="last-updated">${project.lastUpdated}</span>
                </div>
                <h3>${project.title}</h3>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <div class="project-footer">
                    <span class="view-btn">Details & Policies &rarr;</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initial render
renderProjects();
