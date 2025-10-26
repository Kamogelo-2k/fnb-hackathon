// Sample job data
const jobData = [
    {
        id: 1,
        title: "Front-End Developer",
        company: "Kamogelo Tech Hub",
        location: "Remote",
        salary: "R25,000 – R35,000",
        employmentType: "Full-Time",
        workType: "Remote",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 2,
        title: "Delivery Driver",
        company: "ASAP Foods",
        location: "Onsite",
        salary: "R8,000 – R12,000",
        employmentType: "Contract",
        workType: "Onsite",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 3,
        title: "Graphic Designer",
        company: "UrbanPixel Studio",
        location: "Hybrid",
        salary: "R10,000 – R18,000",
        employmentType: "Part-Time",
        workType: "Hybrid",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 4,
        title: "Data Entry Clerk",
        company: "QuickAdmin SA",
        location: "Remote",
        salary: "R5,000 – R8,000",
        employmentType: "Internship",
        workType: "Remote",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 5,
        title: "Marketing Assistant",
        company: "BrightWave Media",
        location: "Onsite",
        salary: "R15,000 – R20,000",
        employmentType: "Full-Time",
        workType: "Onsite",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 6,
        title: "IT Support Technician",
        company: "Nexa Systems",
        location: "Hybrid",
        salary: "R18,000 – R25,000",
        employmentType: "Full-Time",
        workType: "Hybrid",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 7,
        title: "Social Media Manager",
        company: "BrandBoost Agency",
        location: "Remote",
        salary: "R12,000 – R22,000",
        employmentType: "Contract",
        workType: "Remote",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 8,
        title: "Warehouse Assistant",
        company: "BuildRight Supplies",
        location: "Onsite",
        salary: "R9,000 – R13,000",
        employmentType: "Full-Time",
        workType: "Onsite",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 9,
        title: "Junior Accountant",
        company: "FinSolve Accounting",
        location: "Hybrid",
        salary: "R14,000 – R19,000",
        employmentType: "Full-Time",
        workType: "Hybrid",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 10,
        title: "Web Developer Intern",
        company: "CloudVerse",
        location: "Remote",
        salary: "R5,500 – R7,000",
        employmentType: "Internship",
        workType: "Remote",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 11,
        title: "Call Centre Agent",
        company: "CustomerFirst SA",
        location: "Onsite",
        salary: "R9,000 – R15,000",
        employmentType: "Full-Time",
        workType: "Onsite",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 12,
        title: "Content Writer",
        company: "EchoWords Media",
        location: "Remote",
        salary: "R10,000 – R14,000",
        employmentType: "Contract",
        workType: "Remote",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 13,
        title: "Sales Representative",
        company: "GreenEnergy Co.",
        location: "Onsite",
        salary: "R13,000 – R18,000 + Commission",
        employmentType: "Full-Time",
        workType: "Onsite",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 14,
        title: "Software Engineer",
        company: "ByteWorks Africa",
        location: "Hybrid",
        salary: "R30,000 – R45,000",
        employmentType: "Full-Time",
        workType: "Hybrid",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 15,
        title: "Virtual Assistant",
        company: "TaskPro Services",
        location: "Remote",
        salary: "R6,000 – R10,000",
        employmentType: "Part-Time",
        workType: "Remote",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 16,
        title: "Barista",
        company: "BrewCulture Café",
        location: "Onsite",
        salary: "R7,000 – R9,000",
        employmentType: "Part-Time",
        workType: "Onsite",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 17,
        title: "UI/UX Designer",
        company: "FlowVision",
        location: "Hybrid",
        salary: "R22,000 – R32,000",
        employmentType: "Full-Time",
        workType: "Hybrid",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 18,
        title: "Security Guard",
        company: "SafeLine Protection",
        location: "Onsite",
        salary: "R8,000 – R11,000",
        employmentType: "Contract",
        workType: "Onsite",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 19,
        title: "Digital Marketing Analyst",
        company: "AdPro Digital",
        location: "Remote",
        salary: "R18,000 – R27,000",
        employmentType: "Full-Time",
        workType: "Remote",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 20,
        title: "Project Coordinator",
        company: "Apex Builders",
        location: "Onsite",
        salary: "R20,000 – R28,000",
        employmentType: "Full-Time",
        workType: "Onsite",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 21,
        title: "HR Assistant",
        company: "PeopleBridge HR",
        location: "Hybrid",
        salary: "R6,000 – R9,000",
        employmentType: "Internship",
        workType: "Hybrid",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 22,
        title: "Tutor (Math & Science)",
        company: "EduConnect",
        location: "Remote",
        salary: "R12,000 – R17,000",
        employmentType: "Part-Time",
        workType: "Remote",
        isUrgent: false,
        isSaved: false
    },
    {
        id: 23,
        title: "Business Analyst",
        company: "CoreLogic Solutions",
        location: "Hybrid",
        salary: "R25,000 – R38,000",
        employmentType: "Full-Time",
        workType: "Hybrid",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 24,
        title: "Mobile App Developer",
        company: "CodeForge Labs",
        location: "Remote",
        salary: "R28,000 – R40,000",
        employmentType: "Contract",
        workType: "Remote",
        isUrgent: true,
        isSaved: false
    },
    {
        id: 25,
        title: "Cleaner",
        company: "CleanPro Services",
        location: "Onsite",
        salary: "R6,000 – R8,000",
        employmentType: "Full-Time",
        workType: "Onsite",
        isUrgent: true,
        isSaved: false
    }
];

// Possible city locations to assign to jobs (randomized for demo)
const CITY_LOCATIONS = [
    'Johannesburg',
    'Cape Town',
    'Durban',
    'Pretoria',
    'Port Elizabeth',
    'Bloemfontein',
    'East London',
    'Polokwane',
    'Rustenburg',
    'Nelspruit',
    'Kimberley'
];

// Assign random fullLocation/city to each job if not already provided
function assignRandomLocations() {
    jobData.forEach(job => {
        if (!job.city && !job.fullLocation) {
            const city = CITY_LOCATIONS[Math.floor(Math.random() * CITY_LOCATIONS.length)];
            job.city = city;
            job.fullLocation = `${city}, South Africa`;
        } else if (job.city && !job.fullLocation) {
            job.fullLocation = `${job.city}, South Africa`;
        }
    });
}

// Chat bot FAQ data
const chatFAQ = [
    {
        id: 1,
        question: "What is Side Hustle Hub?",
        answer: "Side Hustle Hub is a modern job-hunting platform that connects job seekers with employers. Users can create professional profiles, apply for jobs, and get matched with opportunities that fit their skills and experience."
    },
    {
        id: 2,
        question: "How do I create an account?",
        answer: "Click the Sign Up button on the homepage. You can register using your email, Google account, or LinkedIn profile. Once registered, you can complete your profile and start searching for jobs."
    },
    {
        id: 3,
        question: "Is it free to use?",
        answer: "Yes, creating an account and applying for jobs is completely free for job seekers. Employers may have paid options for posting or promoting job listings."
    },
    {
        id: 4,
        question: "How do I apply for a job?",
        answer: "Once you find a job that matches your skills, click Apply Now. You can submit your CV directly through the platform or link your online portfolio."
    },
    {
        id: 5,
        question: "Can I upload my CV or resume?",
        answer: "Yes! You can upload your CV in PDF or DOCX format under your profile settings. This helps employers discover your profile faster."
    },
    {
        id: 6,
        question: "How do I edit or update my profile?",
        answer: "Go to My Profile → Edit Profile, where you can update your skills, experience, and education anytime."
    },
    {
        id: 7,
        question: "How do I get better job matches?",
        answer: "Complete your profile, include detailed work experience, and regularly update your preferred job titles and locations. The more complete your profile, the better your matches."
    },
    {
        id: 8,
        question: "How do employers contact me?",
        answer: "Employers can send you direct messages or interview invitations through your inbox in the app. You'll also receive email notifications."
    },
    {
        id: 9,
        question: "Can I post a job as an employer?",
        answer: "Yes. Simply switch to an Employer Account and click Post a Job. Fill in the job details, and your listing will go live once approved."
    },
    {
        id: 10,
        question: "How do I report fake or scam job posts?",
        answer: "Click Report Job under the listing, or message our support team. We review all reports to keep our platform safe."
    },
    {
        id: 11,
        question: "What if I forgot my password?",
        answer: "Click Forgot Password on the login page and follow the instructions to reset it via email."
    },
    {
        id: 12,
        question: "How can I contact support?",
        answer: "You can message us through the chat, or email support@[yourdomain].com for further assistance."
    },
    {
        id: 13,
        question: "How do I delete my account?",
        answer: "Go to Account Settings → Delete Account. All your data will be permanently removed from our system within 7 days."
    },
    {
        id: 14,
        question: "Can I search for remote or freelance jobs?",
        answer: "Yes! You can filter job listings by Job Type (remote, freelance, part-time, or full-time) to suit your preferences."
    },
    {
        id: 15,
        question: "How do I stay updated on new jobs?",
        answer: "Enable Job Alerts in your account to receive notifications whenever a new position matching your skills is posted."
    }
];

let chatState = 'initial'; // 'initial', 'question_selected'

// Global state
let currentSection = 'home';
let savedJobs = [];
let appliedJobs = [];
let interviewJobs = [];
let achievedJobs = [];
let filteredJobs = [...jobData];
let currentJobCategory = 'saved';
let userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    occupation: 'Software Developer',
    location: 'Johannesburg, South Africa',
    email: 'john.doe@example.com',
    phone: '+27 11 123 4567',
    visibleToEmployers: true,
    qualifications: 'Bachelor of Computer Science, AWS Certified Developer',
    jobPreferences: 'Full-time remote or hybrid positions in software development',
    hideJobDetails: '',
    readyToWork: true,
    resumes: []
};

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const jobsContainer = document.getElementById('jobsContainer');
const savedJobsContainer = document.getElementById('savedJobs');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessageBtn = document.getElementById('sendMessage');
const jobSearch = document.getElementById('jobSearch');
const locationSearch = document.getElementById('locationSearch');
const notificationBtn = document.getElementById('notificationBtn');
const notificationsPanel = document.getElementById('notificationsPanel');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupSearch();
    setupChatBot();
    setupEditProfile();
    setupJobCategories();
    setupNotifications();
    // Assign demo/random city locations to jobs so users can search by city/country
    assignRandomLocations();
    renderJobs();
    updateNotificationBadge();
    updateProfileDisplay();
    updateJobCounts();
}

// Navigation functionality
function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.dataset.section;
            switchSection(section);
        });
    });
}

function switchSection(section) {
    // Update active nav item (only for main navigation sections)
    if (['home', 'my-jobs', 'chatbot', 'profile'].includes(section)) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === section) {
                item.classList.add('active');
            }
        });
    }

    // Update active content section
    contentSections.forEach(content => {
        content.classList.remove('active');
        if (content.id === section) {
            content.classList.add('active');
        }
    });

    currentSection = section;

    // Load section-specific content
    if (section === 'my-jobs') {
        renderJobCategory(currentJobCategory);
    }
}

// Search functionality
function setupSearch() {
    jobSearch.addEventListener('input', debounce(filterJobs, 300));
    locationSearch.addEventListener('input', debounce(filterJobs, 300));
}

// Notifications data and UI
const notificationsData = [
    { id: 1, text: 'Job seekers who receive notification get hired 60% faster', meta: 'Tip' },
    { id: 2, text: 'Updating profile makes it easier for employers to find you', meta: 'Profile' },
    { id: 3, text: 'Keep your job search going and apply for another job today', meta: 'Reminder' },
    { id: 4, text: 'You can see how your applications are going in My Jobs', meta: 'Info' }
];

function setupNotifications() {
    if (!notificationBtn || !notificationsPanel) return;

    notificationBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleNotificationsPanel();
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!notificationsPanel.classList.contains('hidden')) {
            // if click is outside panel and not on the bell
            if (!notificationsPanel.contains(e.target) && e.target !== notificationBtn && !notificationBtn.contains(e.target)) {
                closeNotificationsPanel();
            }
        }
    });

    // Populate initially
    renderNotifications();
}

function renderNotifications() {
    if (!notificationsPanel) return;

    const unreadCount = notificationsData.length; // demo: all are unread

    const header = `
        <div class="notifications-header">
            <h4>Notifications</h4>
        </div>
    `;

    const list = `
        <div class="notifications-list">
            ${notificationsData.map(n => `
                <div class="notification-item" data-id="${n.id}">
                    <div class="icon"><i class="fas fa-bell"></i></div>
                    <div>
                        <div class="text">${n.text}</div>
                        <div class="meta">${n.meta}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const footer = `
        <div class="notifications-footer">
            <button class="small-btn" id="closeNotifications">Close</button>
        </div>
    `;

    notificationsPanel.innerHTML = header + list + footer;

    // Wire up close button
    const closeBtn = document.getElementById('closeNotifications');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeNotificationsPanel);
    }

    // Update badge to show unread count
    updateNotificationBadge();
}

function toggleNotificationsPanel() {
    if (!notificationsPanel) return;
    if (notificationsPanel.classList.contains('hidden')) {
        notificationsPanel.classList.remove('hidden');
        notificationsPanel.setAttribute('aria-hidden', 'false');
        // hide badge when opened
        const badge = document.querySelector('.notification-badge');
        if (badge) badge.style.display = 'none';
    } else {
        closeNotificationsPanel();
    }
}

function closeNotificationsPanel() {
    if (!notificationsPanel) return;
    notificationsPanel.classList.add('hidden');
    notificationsPanel.setAttribute('aria-hidden', 'true');
    // if there are still notifications, show badge count again
    updateNotificationBadge();
}

function filterJobs() {
    const jobQuery = jobSearch.value.toLowerCase();
    const locationQuery = locationSearch.value.toLowerCase();

    filteredJobs = jobData.filter(job => {
        const matchesJob = job.title.toLowerCase().includes(jobQuery) || 
                          job.company.toLowerCase().includes(jobQuery);

        // Match against work-type location (Remote/Onsite/Hybrid) OR the assigned city/fullLocation
        const workLocation = job.location ? job.location.toLowerCase() : '';
        const city = job.city ? job.city.toLowerCase() : '';
        const fullLocation = job.fullLocation ? job.fullLocation.toLowerCase() : '';

        const matchesLocation = workLocation.includes(locationQuery) || city.includes(locationQuery) || fullLocation.includes(locationQuery);
        return matchesJob && matchesLocation;
    });

    renderJobs();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Job rendering
function renderJobs() {
    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>No jobs found</p>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }

    jobsContainer.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    
    // Add event listeners to job cards
    addJobCardListeners();
}

function createJobCard(job) {
    // Render urgent as a tag so it appears next to salary / job type
    const urgentTag = job.isUrgent ? `<div class="job-tag urgent"><i class="fas fa-bolt"></i>Urgently hiring</div>` : '';
    const salaryTag = job.salary ? `<div class="job-tag salary"><i class="fas fa-check"></i>${job.salary}</div>` : '';
    const employmentTag = `<div class="job-tag employment"><i class="fas fa-check"></i>${job.employmentType}</div>`;
    const workTypeTag = job.workType ? `<div class="job-tag work-type"><i class="fas fa-location-dot"></i>${job.workType}</div>` : '';
    
    return `
        <div class="job-card" data-job-id="${job.id}">
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <!-- Display assigned city / full location under company for searching -->
            <div class="job-place">${job.fullLocation || job.city || job.location}</div>
            <div class="job-location">${job.location}</div>
            <div class="job-tags">
                ${salaryTag}
                ${employmentTag}
                ${workTypeTag}
                ${urgentTag}
            </div>
            <div class="job-actions">
                <button class="apply-btn" onclick="showJobModal(${job.id})">
                    <i class="fas fa-paper-plane"></i>
                    Easily apply
                </button>
                <div class="job-card-actions">
                    <button
                        class="save-btn ${job.isSaved ? 'saved' : ''}"
                        aria-pressed="${job.isSaved ? 'true' : 'false'}"
                        onclick="toggleSaveJob(${job.id})"
                        title="${job.isSaved ? 'Remove bookmark' : 'Save job'}"
                    >
                        <i class="fas fa-bookmark"></i>
                        <span class="save-label">${job.isSaved ? 'Saved' : 'Save'}</span>
                    </button>

                    <button
                        class="hide-btn"
                        onclick="(confirm('Hide this job from the list?') ? hideJob(${job.id}) : null)"
                        title="Hide job"
                        aria-label="Hide job"
                    >
                        <i class="fas fa-eye-slash"></i>
                        <span class="hide-label">Hide</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Generate pseudo-random, job-specific details for display in the modal
function generateJobDetails(job) {
    // Small helper to pick items deterministically based on job id
    const pick = (arr, offset = 0) => arr[(job.id + offset) % arr.length];

    const descriptions = [
        `Join ${job.company} as a ${job.title} to help build user-centric products and services. You'll work closely with cross-functional teams to design, implement and iterate on features.`,
        `We're looking for a motivated ${job.title} to join our growing team at ${job.company}. You'll contribute to projects from ideation through deployment and help shape product direction.`,
        `${job.company} needs a ${job.title} who can deliver reliable solutions, mentor junior staff, and champion best practices across the team.`
    ];

    const responsibilitiesPool = [
        'Design, develop and maintain application features.',
        'Collaborate with designers and product managers to define user stories.',
        'Write clean, testable, and efficient code.',
        'Participate in code reviews and mentoring.',
        'Optimize applications for performance and scalability.',
        'Create and maintain technical documentation.'
    ];

    const requirementsPool = [
        '3+ years of relevant experience or strong portfolio.',
        'Proficiency with JavaScript/TypeScript and modern frameworks.',
        'Familiarity with RESTful APIs and asynchronous programming.',
        'Strong problem-solving skills and attention to detail.',
        'Excellent communication and teamwork skills.'
    ];

    const benefitsPool = [
        'Competitive salary and performance bonuses.',
        'Opportunities for growth and professional development.',
        'Flexible working hours and remote options.',
        'Healthcare benefits and wellness programs.',
        'Generous leave policies and team retreats.'
    ];

    // Build lists of 3 items each (unique picks)
    const responsibilities = [];
    const requirements = [];
    const benefits = [];

    for (let i = 0; i < 3; i++) {
        responsibilities.push(pick(responsibilitiesPool, i));
        requirements.push(pick(requirementsPool, i));
        benefits.push(pick(benefitsPool, i));
    }

    return {
        jobType: job.employmentType || 'Not specified',
        description: pick(descriptions, 1),
        responsibilities,
        requirements,
        benefits
    };
}

// Show a modal with generated job details and actions
function showJobModal(jobId) {
    const job = jobData.find(j => j.id === jobId);
    if (!job) return;

    const details = generateJobDetails(job);

    const modal = document.getElementById('jobModal');
    const modalContent = document.getElementById('jobModalContent');
    const overlay = document.getElementById('jobModalOverlay');
    const closeBtn = document.getElementById('jobModalClose');

    modalContent.innerHTML = `
        <h2 id="jobModalTitle">${job.title}</h2>
        <div class="modal-company">${job.company} • <span class="modal-place">${job.fullLocation || job.city || job.location}</span></div>
        <div class="modal-worktype">Work type: <strong>${job.workType || job.location || 'N/A'}</strong></div>
        <div class="modal-jobtype">Job type: <strong>${details.jobType}</strong></div>

        <section class="modal-section">
            <h3>Description</h3>
            <p>${details.description}</p>
        </section>

        <section class="modal-section two-col">
            <div>
                <h3>Key responsibilities</h3>
                <ul>
                    ${details.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h3>Requirements</h3>
                <ul>
                    ${details.requirements.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
        </section>

        <section class="modal-section">
            <h3>Benefits</h3>
            <ul>
                ${details.benefits.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </section>

        <div class="modal-actions">
            <button class="btn btn-primary" id="modalApplyBtn">Apply</button>
            <button class="btn btn-secondary" id="modalReportBtn">Report</button>
        </div>
    `;

    // Show modal
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');

    // Wire up buttons
    const modalApplyBtn = document.getElementById('modalApplyBtn');
    const modalReportBtn = document.getElementById('modalReportBtn');

    // If the job is already in the applied list, hide the Apply button in the modal
    const isAlreadyApplied = appliedJobs.find(j => j.id === jobId);
    if (isAlreadyApplied && modalApplyBtn) {
        modalApplyBtn.style.display = 'none';
        // show a small note for clarity
        const note = document.createElement('div');
        note.className = 'modal-applied-note';
        note.textContent = 'You already applied for this job.';
        const actions = modalContent.querySelector('.modal-actions');
        if (actions && actions.parentNode) {
            actions.parentNode.insertBefore(note, actions);
            note.style.marginBottom = '0.5rem';
            note.style.color = '#6b7280';
            note.style.fontSize = '0.95rem';
        }
    }

    const onApply = () => {
        // call existing applyToJob logic
        applyToJob(jobId);
        closeJobModal();
    };

    const onReport = () => {
        reportJob(jobId);
        closeJobModal();
    };

    if (modalApplyBtn) modalApplyBtn.addEventListener('click', onApply, { once: true });
    if (modalReportBtn) modalReportBtn.addEventListener('click', onReport, { once: true });

    // Close handlers
    const closeHandler = (e) => {
        if (e.target === overlay || e.target === closeBtn) {
            closeJobModal();
        }
    };

    overlay.addEventListener('click', closeHandler);
    closeBtn.addEventListener('click', closeHandler);

    // Escape key to close
    const escHandler = (e) => {
        if (e.key === 'Escape') closeJobModal();
    };
    document.addEventListener('keydown', escHandler);

    function closeJobModal() {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        // cleanup listeners
        overlay.removeEventListener('click', closeHandler);
        closeBtn.removeEventListener('click', closeHandler);
        document.removeEventListener('keydown', escHandler);
    }
}

function addJobCardListeners() {
    // Additional event listeners can be added here if needed
}

// Job actions
function applyToJob(jobId) {
    const job = jobData.find(j => j.id === jobId);
    alert(`Applying to ${job.title} at ${job.company}`);
}

function toggleSaveJob(jobId) {
    const job = jobData.find(j => j.id === jobId);
    job.isSaved = !job.isSaved;
    
    if (job.isSaved) {
        if (!savedJobs.find(j => j.id === jobId)) {
            savedJobs.push(job);
        }
    } else {
        savedJobs = savedJobs.filter(j => j.id !== jobId);
    }
    
    updateNotificationBadge();
    updateJobCounts();
    renderJobs();
    
    // Update the current job category view if we're in my-jobs section
    if (currentSection === 'my-jobs') {
        renderJobCategory(currentJobCategory);
    }
}

function hideJob(jobId) {
    const jobIndex = jobData.findIndex(j => j.id === jobId);
    if (jobIndex > -1) {
        jobData.splice(jobIndex, 1);
        filteredJobs = filteredJobs.filter(j => j.id !== jobId);
        renderJobs();
    }
}

// Saved jobs functionality
function renderSavedJobs() {
    if (savedJobs.length === 0) {
        savedJobsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <p>No saved jobs yet</p>
                <p>Start browsing and save jobs you're interested in</p>
            </div>
        `;
        return;
    }

    savedJobsContainer.innerHTML = savedJobs.map(job => createJobCard(job)).join('');
    
    // Add event listeners to saved job cards
    addJobCardListeners();
}

// Chat bot functionality
function setupChatBot() {
    sendMessageBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Initialize chatbot with question list
    initializeChatBot();
}

function initializeChatBot() {
    // Clear existing messages
    chatMessages.innerHTML = '';
    
    // Add initial bot message with question list
    const initialMessage = document.createElement('div');
    initialMessage.className = 'chat-message bot-message';
    initialMessage.innerHTML = `
        <div class="message-content">
            <p>Hi! I'm your job search assistant. Here are some frequently asked questions. Please select a number to get the answer:</p>
            <div class="question-list">
                ${chatFAQ.map((faq, index) => `
                    <div class="question-item" onclick="selectQuestion(${faq.id})">
                        <span class="question-number">${index + 1}.</span>
                        <span class="question-text">${faq.question}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    chatMessages.appendChild(initialMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatState = 'initial';
}

function selectQuestion(questionId) {
    const selectedFAQ = chatFAQ.find(faq => faq.id === questionId);
    if (!selectedFAQ) return;
    
    // Add user's selected question
    addChatMessage(selectedFAQ.question, 'user');
    
    // Add bot's answer
    setTimeout(() => {
        addChatMessage(selectedFAQ.answer, 'bot');
        
        // Add follow-up options
        setTimeout(() => {
            addFollowUpOptions();
        }, 500);
    }, 1000);
    
    chatState = 'question_selected';
}

function addFollowUpOptions() {
    const followUpMessage = document.createElement('div');
    followUpMessage.className = 'chat-message bot-message';
    followUpMessage.innerHTML = `
        <div class="message-content">
            <p>Is there anything else I can help you with?</p>
            <div class="follow-up-options">
                <button class="follow-up-btn" onclick="showAllQuestions()">Start New Chat</button>
                <button class="follow-up-btn" onclick="askCustomQuestion()">Ask Custom Question</button>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(followUpMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showAllQuestions() {
    const questionsMessage = document.createElement('div');
    questionsMessage.className = 'chat-message bot-message';
    questionsMessage.innerHTML = `
        <div class="message-content">
            <p>Here are all the frequently asked questions. Please select a number to get the answer:</p>
            <div class="question-list">
                ${chatFAQ.map((faq, index) => `
                    <div class="question-item" onclick="selectQuestion(${faq.id})">
                        <span class="question-number">${index + 1}.</span>
                        <span class="question-text">${faq.question}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    chatMessages.appendChild(questionsMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatState = 'initial';
}

function askCustomQuestion() {
    const customMessage = document.createElement('div');
    customMessage.className = 'chat-message bot-message';
    customMessage.innerHTML = `
        <div class="message-content">
            <p>Please type your question in the input field below, and I'll do my best to help you!</p>
        </div>
    `;
    
    chatMessages.appendChild(customMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatState = 'custom_question';
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    chatInput.value = '';

    // Handle different chat states
    if (chatState === 'custom_question') {
        // Simulate bot response for custom questions
        setTimeout(() => {
            const response = getCustomBotResponse(message);
            addChatMessage(response, 'bot');
            
            // Add follow-up options
            setTimeout(() => {
                addFollowUpOptions();
            }, 500);
        }, 1000);
    } else {
        // If user types a number, try to select that question
        const questionNumber = parseInt(message);
        if (questionNumber >= 1 && questionNumber <= chatFAQ.length) {
            selectQuestion(questionNumber);
        } else {
            // Show question list again
            setTimeout(() => {
                addChatMessage("Please select a question number from 1-15, or type your own question.", 'bot');
                setTimeout(() => {
                    addFollowUpOptions();
                }, 500);
            }, 1000);
        }
    }
}

function getCustomBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for keywords and provide relevant responses
    if (message.includes('job') || message.includes('work') || message.includes('career')) {
        return "I can help you find the perfect job! Use the job search feature to browse available positions, or complete your profile to get better job matches.";
    } else if (message.includes('profile') || message.includes('edit')) {
        return "You can edit your profile by going to the Profile section and clicking 'Edit Profile'. There you can update your personal information, skills, and upload your resume.";
    } else if (message.includes('apply') || message.includes('application')) {
        return "To apply for a job, simply click the 'Apply Now' button on any job listing. You can submit your CV directly through the platform.";
    } else if (message.includes('salary') || message.includes('pay') || message.includes('money')) {
        return "Salary information is displayed on job listings when available. You can also set your salary expectations in your profile preferences.";
    } else if (message.includes('location') || message.includes('where')) {
        return "You can search for jobs by location using the search bar, or set your preferred location in your profile settings.";
    } else if (message.includes('resume') || message.includes('cv')) {
        return "You can upload your resume in the Edit Profile section. We accept PDF, DOC, and DOCX formats up to 5MB.";
    } else if (message.includes('help') || message.includes('support')) {
        return "I'm here to help! You can ask me any questions about using the platform, or contact our support team at support@[yourdomain].com";
    } else {
        return "I understand you're looking for help. While I don't have a specific answer for that, I'd recommend checking our FAQ list above, or you can contact our support team for personalized assistance. WhatsApp 076 546 6792 Email SideHelp@jobs.co.za.";
    }
}

function addChatMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Notification functionality
function updateNotificationBadge() {
    const badge = document.querySelector('.notification-badge');
    if (!badge) return;

    // If notificationsData exists, use its length as demo unread count; otherwise fall back
    const unread = (typeof notificationsData !== 'undefined') ? notificationsData.length : 3;
    const totalNotifications = savedJobs.length + unread; // keep savedJobs influence for demo

    if (totalNotifications > 0) {
        badge.style.display = '';
        badge.textContent = totalNotifications;
    } else {
        badge.style.display = 'none';
    }
}

// Utility functions
function showLoading() {
    jobsContainer.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner"></i>
            <span>Loading jobs...</span>
        </div>
    `;
}

// Initialize search with default values
function initializeSearch() {
    jobSearch.value = '';
    locationSearch.value = 'South Africa';
}

// Add some demo functionality
function addDemoData() {
    // Add some demo saved jobs
    setTimeout(() => {
        const demoJob = jobData[0];
        demoJob.isSaved = true;
        savedJobs.push(demoJob);
        updateNotificationBadge();
    }, 2000);
}

// Initialize demo data
setTimeout(addDemoData, 2000);

// Edit Profile functionality
function setupEditProfile() {
    const editProfileForm = document.getElementById('editProfileForm');
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', handleProfileSubmit);
        
        // Setup file upload handlers
        setupFileUpload('resume1', 'resume1Info');
        setupFileUpload('resume2', 'resume2Info');
    }
}

function showEditProfile() {
    // Switch to edit profile section
    switchSection('edit-profile');
    
    // Populate form with current profile data
    populateEditForm();
}

function showProfile() {
    // Switch back to profile section
    switchSection('profile');
}

function populateEditForm() {
    // Populate form fields with current profile data
    document.getElementById('firstName').value = userProfile.firstName;
    document.getElementById('lastName').value = userProfile.lastName;
    document.getElementById('occupation').value = userProfile.occupation;
    document.getElementById('location').value = userProfile.location;
    document.getElementById('email').value = userProfile.email;
    document.getElementById('phone').value = userProfile.phone;
    document.getElementById('visibleToEmployers').checked = userProfile.visibleToEmployers;
    document.getElementById('qualifications').value = userProfile.qualifications;
    document.getElementById('jobPreferences').value = userProfile.jobPreferences;
    document.getElementById('hideJobDetails').value = userProfile.hideJobDetails;
    document.getElementById('readyToWork').checked = userProfile.readyToWork;
}

function handleProfileSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    
    // Update user profile
    userProfile.firstName = formData.get('firstName');
    userProfile.lastName = formData.get('lastName');
    userProfile.occupation = formData.get('occupation');
    userProfile.location = formData.get('location');
    userProfile.email = formData.get('email');
    userProfile.phone = formData.get('phone');
    userProfile.visibleToEmployers = formData.get('visibleToEmployers') === 'on';
    userProfile.qualifications = formData.get('qualifications');
    userProfile.jobPreferences = formData.get('jobPreferences');
    userProfile.hideJobDetails = formData.get('hideJobDetails');
    userProfile.readyToWork = formData.get('readyToWork') === 'on';
    
    // Handle file uploads
    const resume1 = formData.get('resume1');
    const resume2 = formData.get('resume2');
    
    if (resume1 && resume1.size > 0) {
        userProfile.resumes[0] = {
            name: resume1.name,
            size: resume1.size,
            file: resume1
        };
    }
    
    if (resume2 && resume2.size > 0) {
        userProfile.resumes[1] = {
            name: resume2.name,
            size: resume2.size,
            file: resume2
        };
    }
    
    // Update profile display
    updateProfileDisplay();
    
    // Show success message
    showNotification('Profile updated successfully!', 'success');
    
    // Switch back to profile section
    showProfile();
}

function updateProfileDisplay() {
    // Update profile card display
    const profileName = document.getElementById('profileName');
    const profileOccupation = document.getElementById('profileOccupation');
    const profileLocation = document.getElementById('profileLocation');
    
    if (profileName) profileName.textContent = `${userProfile.firstName} ${userProfile.lastName}`;
    if (profileOccupation) profileOccupation.textContent = userProfile.occupation;
    if (profileLocation) profileLocation.textContent = userProfile.location;
}

function setupFileUpload(inputId, infoId) {
    const fileInput = document.getElementById(inputId);
    const fileInfo = document.getElementById(infoId);
    
    if (fileInput && fileInfo) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Validate file size (5MB max)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (file.size > maxSize) {
                    fileInfo.innerHTML = '<span class="error">File size exceeds 5MB limit</span>';
                    fileInput.value = '';
                    return;
                }
                
                // Validate file type
                const allowedTypes = ['.pdf', '.doc', '.docx'];
                const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
                if (!allowedTypes.includes(fileExtension)) {
                    fileInfo.innerHTML = '<span class="error">Please upload PDF, DOC, or DOCX files only</span>';
                    fileInput.value = '';
                    return;
                }
                
                // Show success message
                fileInfo.innerHTML = `<span class="success">✓ ${file.name} (${formatFileSize(file.size)})</span>`;
            } else {
                fileInfo.innerHTML = '';
            }
        });
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function signOut() {
    if (confirm('Are you sure you want to sign out?')) {
        // Clear client-side authenticated user
        try { localStorage.removeItem('user'); } catch(e) {}
        // Update UI after sign out
        if (typeof updateProfileUI === 'function') updateProfileUI();
        // Clear user data
        userProfile = {
            firstName: '',
            lastName: '',
            occupation: '',
            location: '',
            email: '',
            phone: '',
            visibleToEmployers: false,
            qualifications: '',
            jobPreferences: '',
            hideJobDetails: '',
            readyToWork: false,
            resumes: []
        };
        
        // Reset form
        const editProfileForm = document.getElementById('editProfileForm');
        if (editProfileForm) {
            editProfileForm.reset();
        }
        
        // Clear file info
        const fileInfos = document.querySelectorAll('.file-info');
        fileInfos.forEach(info => info.innerHTML = '');
        
        // Update profile display
        updateProfileDisplay();
        
        // Show notification
        showNotification('You have been signed out successfully', 'info');
        
        // Switch to home section
        switchSection('home');
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                padding: 1rem;
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
            }
            .notification-success {
                border-left: 4px solid #059669;
            }
            .notification-error {
                border-left: 4px solid #dc2626;
            }
            .notification-info {
                border-left: 4px solid #2563eb;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-content i {
                color: #6b7280;
            }
            .notification-success .notification-content i {
                color: #059669;
            }
            .notification-error .notification-content i {
                color: #dc2626;
            }
            .notification-info .notification-content i {
                color: #2563eb;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Job Categories functionality
function setupJobCategories() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            switchJobCategory(category);
        });
    });
}

function switchJobCategory(category) {
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Update active job list
    document.querySelectorAll('.job-list').forEach(list => {
        list.classList.remove('active');
    });
    document.getElementById(`${category}Jobs`).classList.add('active');
    
    currentJobCategory = category;
    renderJobCategory(category);
}

function renderJobCategory(category) {
    let jobs = [];
    let containerId = '';
    
    switch(category) {
        case 'saved':
            jobs = savedJobs;
            containerId = 'savedJobs';
            break;
        case 'applied':
            jobs = appliedJobs;
            containerId = 'appliedJobs';
            break;
        case 'interviews':
            jobs = interviewJobs;
            containerId = 'interviewJobs';
            break;
        case 'achieved':
            jobs = achievedJobs;
            containerId = 'achievedJobs';
            break;
    }
    
    const container = document.getElementById(containerId);
    
    if (jobs.length === 0) {
        container.innerHTML = getEmptyStateHTML(category);
        return;
    }
    
    container.innerHTML = jobs.map(job => createJobCardWithStatus(job, category)).join('');
    addJobCardListeners();
}

function getEmptyStateHTML(category) {
    const emptyStates = {
        saved: `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <p>No saved jobs yet</p>
                <p>Start browsing and save jobs you're interested in</p>
            </div>
        `,
        applied: `
            <div class="empty-state">
                <i class="fas fa-paper-plane"></i>
                <p>No applications yet</p>
                <p>Apply to jobs to track your progress</p>
            </div>
        `,
        interviews: `
            <div class="empty-state">
                <i class="fas fa-calendar-check"></i>
                <p>No interviews scheduled</p>
                <p>Interviews will appear here when scheduled</p>
            </div>
        `,
        achieved: `
            <div class="empty-state">
                <i class="fas fa-trophy"></i>
                <p>No achievements yet</p>
                <p>Successful applications will appear here</p>
            </div>
        `
    };
    
    return emptyStates[category];
}

function createJobCardWithStatus(job, category) {
    const urgentTag = job.isUrgent ? `<div class="job-tag urgent"><i class="fas fa-bolt"></i>Urgently hiring</div>` : '';
    const salaryTag = job.salary ? `<div class="job-tag salary"><i class="fas fa-check"></i>${job.salary}</div>` : '';
    const employmentTag = `<div class="job-tag employment"><i class="fas fa-check"></i>${job.employmentType}</div>`;
    const workTypeTag = job.workType ? `<div class="job-tag work-type"><i class="fas fa-location-dot"></i>${job.workType}</div>` : '';
    
    let statusTag = '';
    if (category === 'applied') {
        statusTag = '<div class="job-status applied">Applied</div>';
    } else if (category === 'interviews') {
        statusTag = '<div class="job-status interview">Interview Scheduled</div>';
    } else if (category === 'achieved') {
        statusTag = '<div class="job-status achieved">Success!</div>';
    }
    
    return `
        <div class="job-card ${category}" data-job-id="${job.id}">
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <!-- Show assigned city / full location for easier searching -->
            <div class="job-place">${job.fullLocation || job.city || job.location}</div>
            <div class="job-location">${job.location}</div>
            <div class="job-tags">
                ${salaryTag}
                ${employmentTag}
                ${workTypeTag}
                ${urgentTag}
            </div>
            ${statusTag}
            <div class="job-actions">
                <button class="apply-btn" onclick="showJobModal(${job.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
                <div class="job-card-actions">
                    ${category === 'saved' ? `
                        <button class="apply-btn" onclick="applyToJob(${job.id})">
                            <i class="fas fa-paper-plane"></i>
                            Apply Now
                        </button>
                    ` : ''}
                    <!-- Removed Schedule Interview button for 'applied' category as requested -->
                    ${category === 'interviews' ? `
                        <button class="achieved-btn" onclick="markAsAchieved(${job.id})">
                            <i class="fas fa-trophy"></i>
                            Mark as Achieved
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function updateJobCounts() {
    document.getElementById('savedCount').textContent = savedJobs.length;
    document.getElementById('appliedCount').textContent = appliedJobs.length;
    document.getElementById('interviewsCount').textContent = interviewJobs.length;
    document.getElementById('achievedCount').textContent = achievedJobs.length;
}

// Job status management functions
function applyToJob(jobId) {
    // Require sign-in to apply
    if (!isSignedIn()) {
        showSignInModal();
        showNotification('Please sign in to apply for jobs', 'error');
        return;
    }

    const job = jobData.find(j => j.id === jobId);
    if (!job) return;

    // Remove from saved if it exists
    const savedIndex = savedJobs.findIndex(j => j.id === jobId);
    if (savedIndex > -1) {
        savedJobs.splice(savedIndex, 1);
    }

    // Add to applied
    if (!appliedJobs.find(j => j.id === jobId)) {
        appliedJobs.push({...job, status: 'applied'});
    }

    updateJobCounts();
    renderJobCategory(currentJobCategory);
    showNotification('Application submitted successfully!', 'success');
}

function scheduleInterview(jobId) {
    const job = appliedJobs.find(j => j.id === jobId);
    if (!job) return;
    
    // Remove from applied
    const appliedIndex = appliedJobs.findIndex(j => j.id === jobId);
    if (appliedIndex > -1) {
        appliedJobs.splice(appliedIndex, 1);
    }
    
    // Add to interviews
    if (!interviewJobs.find(j => j.id === jobId)) {
        interviewJobs.push({...job, status: 'interview'});
    }
    
    updateJobCounts();
    renderJobCategory(currentJobCategory);
    showNotification('Interview scheduled!', 'success');
}

function markAsAchieved(jobId) {
    const job = interviewJobs.find(j => j.id === jobId);
    if (!job) return;
    
    // Remove from interviews
    const interviewIndex = interviewJobs.findIndex(j => j.id === jobId);
    if (interviewIndex > -1) {
        interviewJobs.splice(interviewIndex, 1);
    }
    
    // Add to achieved
    if (!achievedJobs.find(j => j.id === jobId)) {
        achievedJobs.push({...job, status: 'achieved'});
    }
    
    updateJobCounts();
    renderJobCategory(currentJobCategory);
    showNotification('Congratulations! Job marked as achieved!', 'success');
}

function viewJobDetails(jobId) {
    // open modal instead (keeps backward compatibility)
    showJobModal(jobId);
}

// Report a job (demo behaviour for portfolio)
function reportJob(jobId) {
    const job = jobData.find(j => j.id === jobId);
    if (!job) return;
    job.reported = true;
    showNotification('Thanks — this job has been reported and will be reviewed.', 'info');
}

// --- Simple client-side auth (demo) ---
function isSignedIn() {
    return !!localStorage.getItem('user');
}

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('user')) || null;
    } catch (e) {
        return null;
    }
}

// Accounts helpers: store registered accounts separately from the currently signed-in user
function getAccounts() {
    try {
        return JSON.parse(localStorage.getItem('accounts')) || [];
    } catch (e) {
        return [];
    }
}

function saveAccounts(accounts) {
    try {
        localStorage.setItem('accounts', JSON.stringify(accounts));
    } catch (e) {
        console.error('Failed to save accounts', e);
    }
}

function saveAccount(account) {
    const accounts = getAccounts();
    // replace existing with same email (case-insensitive)
    const idx = accounts.findIndex(a => a.email && a.email.toLowerCase() === (account.email || '').toLowerCase());
    if (idx > -1) accounts[idx] = account; else accounts.push(account);
    saveAccounts(accounts);
}

function seedDemoAccount() {
    const accounts = getAccounts();
    const exists = accounts.find(a => a.email && a.email.toLowerCase() === 'sidehub@gmail.com');
    if (!exists) {
        const demo = {
            firstName: 'Side',
            lastName: 'Hub',
            email: 'SideHub@gmail.com',
            password: 'Side1234',
            occupation: 'Demo User',
            location: 'Remote'
        };
        accounts.push(demo);
        saveAccounts(accounts);
    }
}

function updateProfileUI() {
    const signedInView = document.getElementById('signedInView');
    const signedOutView = document.getElementById('signedOutView');

    if (isSignedIn()) {
        const user = getCurrentUser();
        if (user) {
            const name = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Your Name';
            document.getElementById('profileName').textContent = name;
            document.getElementById('profileOccupation').textContent = user.occupation || 'Professional';
            document.getElementById('profileLocation').textContent = user.location || '';
        }
        if (signedInView) signedInView.style.display = '';
        if (signedOutView) signedOutView.style.display = 'none';
    } else {
        if (signedInView) signedInView.style.display = 'none';
        if (signedOutView) signedOutView.style.display = '';
    }
}

/* signOut handled below (merged with profile cleanup) */

function showSignInModal() {
    const modal = document.getElementById('signInModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function closeSignInModal() {
    const modal = document.getElementById('signInModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

function showCreateAccountModal() {
    const modal = document.getElementById('createAccountModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function closeCreateAccountModal() {
    const modal = document.getElementById('createAccountModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

function switchToCreate() {
    closeSignInModal();
    showCreateAccountModal();
}

function switchToSignIn() {
    closeCreateAccountModal();
    showSignInModal();
}

// Handle sign in and account creation
document.addEventListener('DOMContentLoaded', function() {
    // Seed a demo account so the provided credentials work
    seedDemoAccount();
    updateProfileUI();

    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signinEmail').value.trim();
            const password = document.getElementById('signinPassword').value;

            const accounts = getAccounts();
            const matched = accounts.find(a => a.email && a.email.toLowerCase() === email.toLowerCase() && a.password === password);
            if (matched) {
                // sign in
                localStorage.setItem('user', JSON.stringify(matched));
                closeSignInModal();
                updateProfileUI();
                showNotification('Signed in successfully', 'success');
            } else {
                showNotification('Invalid email or password. Please try again or create an account.', 'error');
            }
        });
    }

    const createForm = document.getElementById('createAccountForm');
    if (createForm) {
        createForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('createFirstName').value.trim();
            const lastName = document.getElementById('createLastName').value.trim();
            const email = document.getElementById('createEmail').value.trim();
            const password = document.getElementById('createPassword').value;

            if (!email || !password) {
                showNotification('Please provide email and password', 'error');
                return;
            }

            const user = {
                firstName,
                lastName,
                email,
                occupation: '',
                location: '',
                // NOTE: Passwords shouldn't be stored like this in a real app
                password
            };

            // Save to accounts store and set as current user
            saveAccount(user);
            localStorage.setItem('user', JSON.stringify(user));
            closeCreateAccountModal();
            updateProfileUI();
            showNotification('Account created and signed in', 'success');
        });
    }
});

    // Auto Apply Feature
    let autoApplyPreferences = JSON.parse(localStorage.getItem('autoApplyPreferences')) || {
        enabled: false,
        jobTitle: '',
        jobLocation: '',
        minSalary: '',
        maxSalary: '',
        jobTypes: [],
        workTypes: [],
        requirements: [],
        immediatelyAvailable: false,
        trialStartDate: null,
        stats: {
            applicationsCount: 0,
            matchesFound: 0,
            daysActive: 0
        }
    };

    function showAutoApply() {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById('auto-apply').classList.add('active');
    
        // Initialize form with saved preferences
        loadAutoApplyPreferences();
        updateAutoApplyStats();
    }

    function loadAutoApplyPreferences() {
        // Toggle switch
        const toggle = document.getElementById('autoApplyToggle');
        toggle.checked = autoApplyPreferences.enabled;
        updateAutoApplyStatus();
    
        // Form fields
        document.getElementById('jobTitle').value = autoApplyPreferences.jobTitle;
        document.getElementById('jobLocation').value = autoApplyPreferences.jobLocation;
        document.getElementById('minSalary').value = autoApplyPreferences.minSalary;
        document.getElementById('maxSalary').value = autoApplyPreferences.maxSalary;
        document.getElementById('immediatelyAvailable').checked = autoApplyPreferences.immediatelyAvailable;
    
        // Job Types
        document.querySelectorAll('input[name="jobType"]').forEach(input => {
            input.checked = autoApplyPreferences.jobTypes.includes(input.value);
        });
    
        // Work Types
        document.querySelectorAll('input[name="workType"]').forEach(input => {
            input.checked = autoApplyPreferences.workTypes.includes(input.value);
        });
    
        // Requirements
        const container = document.getElementById('requirementsContainer');
        container.innerHTML = ''; // Clear existing requirements
    
        autoApplyPreferences.requirements.forEach(req => {
            addRequirementTag(req);
        });
    
        // Add the "Add Requirement" button
        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.className = 'add-requirement-btn';
        addButton.onclick = showRequirementModal;
        addButton.innerHTML = '<i class="fas fa-plus"></i> Add Requirement';
        container.appendChild(addButton);
    }

    function toggleAutoApply() {
        const toggle = document.getElementById('autoApplyToggle');
        autoApplyPreferences.enabled = toggle.checked;
    
        // Start trial if it hasn't started yet
        if (toggle.checked && !autoApplyPreferences.trialStartDate) {
            autoApplyPreferences.trialStartDate = new Date().toISOString();
        }
    
        updateAutoApplyStatus();
        saveAutoApplyPreferences();
    
        showNotification(
            toggle.checked ? 'Auto Apply has been enabled' : 'Auto Apply has been disabled',
            toggle.checked ? 'success' : 'info'
        );
    }

    function updateAutoApplyStatus() {
        const statusElement = document.getElementById('autoApplyStatus');
        statusElement.textContent = autoApplyPreferences.enabled ? 'ON' : 'OFF';
        statusElement.className = autoApplyPreferences.enabled ? 'active' : '';
    }

    function saveAutoApplyPreferences() {
        // Get values from form
        autoApplyPreferences.jobTitle = document.getElementById('jobTitle').value;
        autoApplyPreferences.jobLocation = document.getElementById('jobLocation').value;
        autoApplyPreferences.minSalary = document.getElementById('minSalary').value;
        autoApplyPreferences.maxSalary = document.getElementById('maxSalary').value;
        autoApplyPreferences.immediatelyAvailable = document.getElementById('immediatelyAvailable').checked;
    
        // Get selected job types
        autoApplyPreferences.jobTypes = Array.from(document.querySelectorAll('input[name="jobType"]:checked'))
            .map(input => input.value);
    
        // Get selected work types
        autoApplyPreferences.workTypes = Array.from(document.querySelectorAll('input[name="workType"]:checked'))
            .map(input => input.value);
    
        // Save to localStorage
        localStorage.setItem('autoApplyPreferences', JSON.stringify(autoApplyPreferences));
    }

    function resetAutoApply() {
        if (confirm('Are you sure you want to reset all Auto Apply preferences?')) {
            autoApplyPreferences = {
                enabled: false,
                jobTitle: '',
                jobLocation: '',
                minSalary: '',
                maxSalary: '',
                jobTypes: [],
                workTypes: [],
                requirements: [],
                immediatelyAvailable: false,
                trialStartDate: null,
                stats: {
                    applicationsCount: 0,
                    matchesFound: 0,
                    daysActive: 0
                }
            };
        
            localStorage.removeItem('autoApplyPreferences');
            loadAutoApplyPreferences();
            updateAutoApplyStats();
            showNotification('Auto Apply preferences have been reset', 'info');
        }
    }

    function updateAutoApplyStats() {
        // Update statistics display
        document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = 
            autoApplyPreferences.stats.applicationsCount;
        document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = 
            autoApplyPreferences.stats.matchesFound;
    
        // Calculate days active
        if (autoApplyPreferences.trialStartDate) {
            const startDate = new Date(autoApplyPreferences.trialStartDate);
            const today = new Date();
            const daysActive = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
            document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = daysActive;
        
            // Update trial days remaining
            const daysRemaining = Math.max(14 - daysActive, 0);
            document.querySelector('.trial-info span').textContent = 
                `${daysRemaining} days remaining in trial`;
        }
    }

    function showRequirementModal() {
        // Create and show a modal for adding new requirements
        const requirementTypes = [
            'Experience',
            'Education',
            'Skills',
            'Certifications',
            'Languages'
        ];
    
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-panel">
                <div class="modal-header">
                    <h3>Add Requirement</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
                </div>
                <div class="modal-content">
                    <div class="form-group">
                        <label for="requirementType">Requirement Type</label>
                        <select id="requirementType" class="form-control">
                            ${requirementTypes.map(type => `<option value="${type}">${type}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="requirementValue">Value</label>
                        <input type="text" id="requirementValue" class="form-control" placeholder="Enter requirement details">
                    </div>
                    <div class="auto-apply-footer">
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="addRequirement()">Add</button>
                    </div>
                </div>
            </div>
        `;
    
        document.body.appendChild(modal);
    }

    function addRequirement() {
        const type = document.getElementById('requirementType').value;
        const value = document.getElementById('requirementValue').value;
    
        if (!value.trim()) {
            showNotification('Please enter a requirement value', 'error');
            return;
        }
    
        const requirement = `${type}: ${value}`;
        addRequirementTag(requirement);
    
        // Add to preferences
        autoApplyPreferences.requirements.push(requirement);
        saveAutoApplyPreferences();
    
        // Close modal
        document.querySelector('.modal').remove();
    }

    function addRequirementTag(requirement) {
        const container = document.getElementById('requirementsContainer');
        const tag = document.createElement('div');
        tag.className = 'requirement-tag';
        tag.innerHTML = `
            <span>${requirement}</span>
            <button type="button" class="remove-tag" onclick="removeRequirement('${requirement}')">&times;</button>
        `;
    
        // Insert before the add button
        const addButton = container.querySelector('.add-requirement-btn');
        container.insertBefore(tag, addButton);
    }

    function removeRequirement(requirement) {
        const index = autoApplyPreferences.requirements.indexOf(requirement);
        if (index > -1) {
            autoApplyPreferences.requirements.splice(index, 1);
            saveAutoApplyPreferences();
        }
    
        // Remove the tag from UI
        const tags = document.querySelectorAll('.requirement-tag');
        tags.forEach(tag => {
            if (tag.querySelector('span').textContent === requirement) {
                tag.remove();
            }
        });
    }

    // Add event listeners
    document.addEventListener('DOMContentLoaded', function() {
        const autoApplyForm = document.getElementById('autoApplyForm');
        if (autoApplyForm) {
            autoApplyForm.addEventListener('submit', function(e) {
                e.preventDefault();
                saveAutoApplyPreferences();
                showNotification('Auto Apply preferences saved successfully', 'success');
            });
        }
    });
// Settings Management
function showSettings() {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('settings').classList.add('active');
    
    // Load current settings
    loadSettings();
    
    // Set current device info
    updateDeviceInfo();
}

function loadSettings() {
    // Load saved settings from localStorage or use defaults
    const settings = JSON.parse(localStorage.getItem('userSettings')) || getDefaultSettings();
    
    // Security settings
    document.getElementById('twoFactorAuth').checked = settings.security.twoFactorAuth;
    document.getElementById('thirdPartyApps').checked = settings.security.thirdPartyApps;
    
    // Communication settings
    document.getElementById('emailJobAlerts').checked = settings.communication.emailJobAlerts;
    document.getElementById('emailMessages').checked = settings.communication.emailMessages;
    document.getElementById('emailUpdates').checked = settings.communication.emailUpdates;
    document.getElementById('smsJobAlerts').checked = settings.communication.smsJobAlerts;
    document.getElementById('smsMessages').checked = settings.communication.smsMessages;
    
    // Privacy settings
    document.getElementById('profileVisibility').checked = settings.privacy.profileVisibility;
    document.getElementById('showEmail').checked = settings.privacy.showEmail;
    document.getElementById('showPhone').checked = settings.privacy.showPhone;
    document.getElementById('activityStatus').checked = settings.privacy.activityStatus;
    
    // Add event listeners to all checkboxes
    document.querySelectorAll('.settings-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', saveSettings);
    });
}

function getDefaultSettings() {
    return {
        security: {
            twoFactorAuth: false,
            thirdPartyApps: false
        },
        communication: {
            emailJobAlerts: true,
            emailMessages: true,
            emailUpdates: true,
            smsJobAlerts: false,
            smsMessages: false
        },
        privacy: {
            profileVisibility: true,
            showEmail: false,
            showPhone: false,
            activityStatus: true
        }
    };
}

function saveSettings() {
    const settings = {
        security: {
            twoFactorAuth: document.getElementById('twoFactorAuth').checked,
            thirdPartyApps: document.getElementById('thirdPartyApps').checked
        },
        communication: {
            emailJobAlerts: document.getElementById('emailJobAlerts').checked,
            emailMessages: document.getElementById('emailMessages').checked,
            emailUpdates: document.getElementById('emailUpdates').checked,
            smsJobAlerts: document.getElementById('smsJobAlerts').checked,
            smsMessages: document.getElementById('smsMessages').checked
        },
        privacy: {
            profileVisibility: document.getElementById('profileVisibility').checked,
            showEmail: document.getElementById('showEmail').checked,
            showPhone: document.getElementById('showPhone').checked,
            activityStatus: document.getElementById('activityStatus').checked
        }
    };
    
    localStorage.setItem('userSettings', JSON.stringify(settings));
    showNotification('Settings saved successfully', 'success');
}

function updateDeviceInfo() {
    // Update current device information
    document.getElementById('currentBrowser').textContent = getBrowserInfo();
    document.getElementById('currentPlatform').textContent = getPlatformInfo();
    document.getElementById('lastLogin').textContent = new Date().toLocaleString();
    
    // Add a login history entry
    addLoginHistoryEntry();
}

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browserName;
    
    if (ua.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if (ua.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
    } else if (ua.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
    } else if (ua.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    } else {
        browserName = "Unknown Browser";
    }
    
    return browserName;
}

function getPlatformInfo() {
    const platform = navigator.platform;
    
    if (platform.indexOf("Win") > -1) {
        return "Windows";
    } else if (platform.indexOf("Mac") > -1) {
        return "macOS";
    } else if (platform.indexOf("Linux") > -1) {
        return "Linux";
    } else {
        return platform;
    }
}

function addLoginHistoryEntry() {
    const loginHistory = document.getElementById('loginHistory');
    const entry = document.createElement('div');
    entry.className = 'login-entry';
    entry.innerHTML = `
        <div>
            <strong>${getBrowserInfo()}</strong> on ${getPlatformInfo()}
            <div style="font-size: 0.8rem; color: #6b7280;">${new Date().toLocaleString()}</div>
        </div>
        <i class="fas fa-check-circle" style="color: #059669;"></i>
    `;
    
    // Keep only last 5 entries
    if (loginHistory.children.length >= 5) {
        loginHistory.removeChild(loginHistory.lastChild);
    }
    
    loginHistory.insertBefore(entry, loginHistory.firstChild);
}

// CV Download Management
function showCvDownloadModal() {
    const modal = document.getElementById('cvDownloadModal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    
    // Update resume names if files are uploaded
    updateResumeNames();
}

function closeCvDownloadModal() {
    const modal = document.getElementById('cvDownloadModal');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

function updateResumeNames() {
    const resume1Input = document.getElementById('resume1');
    const resume2Input = document.getElementById('resume2');
    
    document.getElementById('resume1Name').textContent = 
        resume1Input.files.length > 0 ? resume1Input.files[0].name : 'No file uploaded';
    document.getElementById('resume2Name').textContent = 
        resume2Input.files.length > 0 ? resume2Input.files[0].name : 'No file uploaded';
}

function downloadCV(resumeNumber) {
    const resumeInput = document.getElementById(`resume${resumeNumber}`);
    
    if (!resumeInput || !resumeInput.files.length) {
        showNotification('No resume file uploaded yet', 'error');
        return;
    }
    
    const file = resumeInput.files[0];
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    closeCvDownloadModal();
    showNotification(`Resume ${resumeNumber} downloaded successfully`, 'success');
}

// Event Listeners for CV upload
document.addEventListener('DOMContentLoaded', function() {
    const resume1Input = document.getElementById('resume1');
    const resume2Input = document.getElementById('resume2');
    
    if (resume1Input) {
        resume1Input.addEventListener('change', function() {
            document.getElementById('resume1Info').textContent = 
                this.files.length > 0 ? `File selected: ${this.files[0].name}` : '';
        });
    }
    
    if (resume2Input) {
        resume2Input.addEventListener('change', function() {
            document.getElementById('resume2Info').textContent = 
                this.files.length > 0 ? `File selected: ${this.files[0].name}` : '';
        });
    }
});
