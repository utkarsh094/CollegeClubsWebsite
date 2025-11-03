// Club data
const clubsData = [
    {
        id: 1,
        name: "STES Rocketry Club",
        category: "technical",
        vision: "To become a globally recognized student-led team known for engineering excellence, inspire young minds across India by demonstrating that hard work and determination lead to success, and bridge the gap between learning and real-world impact through practical applications.",
        teamLead: "Shrinivas Hase",
        achievements: [
            "89th place globally in the COTS category.<br>The APJ rocket achieved an apogee of 10,000 feet at the Spaceport America Cup 2018",
            "Successfully launched 8 rockets ",
            "Securing 3rd in category and 8th worldwide.<br>In the 2022 Latin American Space Challenge, our rocket 'Midnight Sun' competed in the 1 km solid motor category against teams from nine countries",
            "Secured 2nd place in India and 6th overall.<br>In 2021, the team participated in the Latin American Space Challenge (LASC) in São Paulo, Brazil, with 'The Perfect Game.' Competing in the 0.5 km height target category."
        ],
        projects: {
            current: [
                "The Vikrant rocket, which is yet to launch, is designed to reach an apogee of 1 kilometer. Powered by a liquid engine, it brings a sophisticated propulsion approach to this year’s LASC competition",
                "The Kaioken rocket, which is yet to launch, is expected to achieve a remarkable apogee of 4 kilometers. With its advanced design, it holds great promise for future.",
                "The Sahasra rocket, which is yet to launch, is expected to achieve an impressive apogee of 1 kilometer."
            ],
            past: [
                "The Demogorgon rocket made a lasting impression with its consistent performance and reliability in several competitions. Its successful launches highlighted the strength of its engineering design.",
                "APJ II, designed for the Spaceport America Cup 2019, featured key enhancements like a superior telemetry system and upgraded GPS modules. Overcoming recovery challenges, it achieved 99% flight accuracy.",
                "In the 2022 Latin American Space Challenge, our rocket 'Midnight Sun' competed in the 1 km solid motor category against teams from nine countries. It was our debut with an SRAD rocket, developed entirely in-house with a custom-built solid motor, securing 3rd in category and 8th worldwide."
            ]
        },
        sponsors: ["ANSYS","JM Space", "Solid Works", "Altium", "STES","Mr.Akash Sureka"],
        contact: {
            website:"https://stesrocketry.in",
            phone: "+91 88611 83457",
            social: "@stesrocketry"
        },
        photos: ["source.images/stesrocket1.jpg",
            "source.images/stesrocket2.jpg",
            "source.images/stesrocket3.jpg",
            "source.images/stesrocket4.jpg",
            "source.images/stesrocket5.jpg",
            "source.images/stesrocket6.jpg",
            "source.images/stesrocket7.jpg"]
    },
    {
        id: 2,
        name: "STES Racing",
        category: "sports",
        vision: "Building the fastest, most innovative racing vehicles while developing engineering excellence.<br> Each year, we build award-winning racercars that aim to push the envelop,bringing together India's brightest engineers in process.",
        teamLead: "Deep ",
        achievements: [
            "SR 23 2022-2023<br>5th in Business Logic Case.<br> 3rd in Design.<br>3rd in Skidpad.<br>Overall 3rd in Dynamics.<br>Overall 4th",
            "SR 22<br>2021-2022<br>9th in Business Logic Case.<br>3rd in Design.<br>Overall 4th in Virtuals.",
            "SR 18<br>2017-2018<br>5th in Business Logic Case.<br>25th in Cost Report.<br>31st in Design."
        ],
        projects: {
            current: [
                "Formula Electric 2025 car development",
                "Autonomous racing prototype",
                "Aerodynamics optimization study"
            ],
            past: [
                "Formula Combustion racing car",
                "Go-kart chassis development",
                "Electric motor efficiency project"
            ]
        },
        sponsors: ["Sinhgad Institutes", "VUKAN", "Red Bull", "Motul","Calspan","SolidWorks","My Pit Crew"],
        contact: {
            website:"stesracing.org",
            email: "stesracing@gmail.com",
            phone: "+91 7083046303",
            social: "@STESRACING",
        },
        photos: ["source.images/stesrace1.jpg",
             "source.images/stesrace2.jpg",
             "source.images/Team Photo",
             "source.images/Victory Celebration"]
    },
    {
        id: 3,
        name: "Art Circle",
        category: "creative",
        vision: "Fostering creativity and artistic expression across all mediums and styles",
        teamLead: "Sarthak Kokne",
        achievements: [
            "Firodiya Karandak:2020 Winner and 2024 Finalist",
            "Won SPPU Jallosh",
            "Won Dajikaka Gadgil Karandak 2025"

        ],
        projects: {
            current: [
                "Jhangadgutta Drama in Dajikaka Dadgil Karandak 2025",
                "Sahi Shikka Drama in Symbiosis Karandak 2025",
                "Uttaresha Drama in Firodiya Karandak 2025"
            ],
            past: [
                "Rakaas Drama in Firodiya Karandak 2020",
                "To ka Apan Drama at Bharat Natya Madir 2024",
                "Riwaj Drama in Firodiya Karandak 2023"
            ]
        },
        sponsors: ["Singhad College Art Club"],
        contact: {
            website: "https://youtube.com/@scoeartcircle6332?si=b1gZgn9JLIAHXfsE",
            phone: "8010225321",
            social: "scoe_artcircle"
        },
        photos: ["source.images/artclub1.jpg",
             "source.images/artclub2.jpg",
              "source.images/artclub3.jpg",
               "source.images/artcllub4.jpg"]
    },
    {
        id: 4,
        name: "STES Robotics Club",
        category: "technical",
        vision: "Our creed is to push Areal Robotic",
        teamLead: "Yash Pawar",
        achievements: [
            "Champions - Regional Robotics Competition 2024",
            "Best Innovation Award for AI integration",
            "Successfully deployed 5 autonomous robots"
        ],
        projects: {
            current: [
                "Autonomous campus delivery robot",
                "AI-powered waste sorting system",
                "Humanoid robot development"
            ],
            past: [
                "Line-following competition robot",
                "Robotic arm for assembly tasks",
                "Drone surveillance system"
            ]
        },
        sponsors: ["Google AI", "NVIDIA", "Arduino", "Boston Dynamics Foundation"],
        contact: {
            website:"https://www.linkedin.com/company/stesrobotics/",
            email: " stesrobotics@gmail.com ",
            phone: "+1-234-567-8904",
            social: "@STESROBOTICS"
        },
        photos: ["source.images/stesrobo1.jpg",
             "source.images/stesrobo2.jpg",
              "source.images/stesrobo3.jpg",
               "source.images/stesrobo4.jpg",
                "source.images/stesrobo5.jpg"]
    },
    {
        id: 5,
        name: "Google Development Group",
        category: "technical",
        vision: "Empowering students with cutting-edge Google technologies and development skills",
        teamLead: "Priya Sharma",
        achievements: [
            "Hosted 15 successful tech talks",
            "500+ students trained in Google Cloud",
            "3 apps published on Google Play Store"
        ],
        projects: {
            current: [
                "Campus management Android app",
                "Machine learning study assistant",
                "Cloud-based student portal"
            ],
            past: [
                "COVID-19 tracking app",
                "Virtual campus tour application",
                "Firebase-powered event management system"
            ]
        },
        sponsors: ["Google for Education", "Google Cloud", "Android Developer Program"],
        contact: {
            email: "gdg@college.edu",
            phone: "+1-234-567-8905",
            social: "@collegegdg"
        },
        photos: ["Tech Talk", "Coding Session", "App Launch", "Google Workshop"]
    },
    {
        id: 6,
        name: "STES Hyperion",
        category: "creative",
        vision: "Documenting campus life and giving voice to student experiences through quality journalism",
        teamLead: "Darshan More",
        achievements: [
            "Winner - Best College Publication 2024",
            "50,000+ monthly online readers",
            "Featured in National Student Media Awards"
        ],
        projects: {
            current: [
                "Digital magazine platform development",
                "Podcast series launch",
                "Video journalism expansion"
            ],
            past: [
                "Annual print magazine publication",
                "Campus event coverage series",
                "Alumni interview project"
            ]
        },
        sponsors: ["Campus Media Group", "Local Printing Company", "Adobe Creative Suite"],
        contact: {
            website:"http://www.steshyperion.com",
            email: "teamhyperion@gmail.com",
            phone: "+91 8080939614",
            social: "@TEAM.HYPERION"
        },
        photos: ["source.images/hypersion1.jpg",
             "source.images/hypersion2.jpg",
              "source.images/hypersion3.jpg",
              "source.images/hypersion4.jpg",
              "source.images/hypersion5.jpg",
              "source.images/hypersion6.jpg",
               "source.images/hypersion7.jpg"]
    }
];

// DOM elements
const clubsGrid = document.getElementById('clubsGrid');
const searchBox = document.getElementById('searchBox');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('clubModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector(".nav-links");
mobileMenu.addEventListener("click", () => navLinks.classList.toggle("active"));

// Initialize the page
function init() {
    renderClubs(clubsData);
    setupEventListeners();
    animateCards();
}

// Render clubs
function renderClubs(clubs) {
    clubsGrid.innerHTML = '';
    clubs.forEach((club, index) => {
        const clubCard = createClubCard(club, index);
        clubsGrid.appendChild(clubCard);
    });
    animateCards();
}

// Create club card
function createClubCard(club, index) {
    const card = document.createElement('div');
    card.className = 'club-card';
    
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <h3>
            <div class="club-icon">${club.name.charAt(0)}</div>
            ${club.name}
        </h3>
        <div class="vision">"${club.vision}"</div>
        <div class="team-lead">Team Lead: ${club.teamLead}</div>
        <div class="achievements">
            <h4>🏆 Recent Achievements</h4>
            <ul>
                ${club.achievements.slice(0, 2).map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
        <div class="contact-info">
            <span><a href="${club.contact.website}" target="_blank" class="btn-link">🌐 ${club.contact.website}</a></span>
            <span> <a href="https://instagram.com/${club.contact.social.replace('@','')}" target="_blank" class="btn-link">📱 ${club.contact.social}</a></span
        </div>
    `;
    
    card.addEventListener('click', () => openModal(club));
    return card;
}

// Open modal with club details
function openModal(club) {
    modalContent.innerHTML = `
        <h2>${club.name}</h2>
        <div class="vision" style="font-size: 1.1rem; margin: 1rem 0;">
            "${club.vision}"
        </div>
        <p><strong>Team Lead:</strong> ${club.teamLead}</p>
        
        <div class="achievements" style="margin: 2rem 0;">
            <h3>🏆 Achievements</h3>
            <ul>
                ${club.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>

        <div style="margin: 2rem 0;">
            <h3>🚀 Projects</h3>
            <div class="project-grid">
                <div>
                    <h4>Current Projects</h4>
                    ${club.projects.current.map(project => `
                        <div class="project-item">${project}</div>
                    `).join('')}
                </div>
                <div>
                    <h4>Past Projects</h4>
                    ${club.projects.past.map(project => `
                        <div class="project-item">${project}</div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div style="margin: 2rem 0;">
            <h3>💼 Sponsors & Funding</h3>
            <div>
                ${club.sponsors.map(sponsor => `
                    <span class="sponsor-tag">${sponsor}</span>
                `).join('')}
            </div>
        </div>

        <div style="margin: 2rem 0;">
            <h3>📸 Photo Gallery</h3>
            <div class="photo-gallery">
                ${club.photos.map(photo => `
                    <div class="photo-placeholder">
                    <img src="${photo}" alt="${club.name}photo">
                    </div>
                `).join('')}
            </div>
        </div>

        <div style="margin: 2rem 0;">
            <h3>📞 Contact Information</h3>
            <p><strong>Email:</strong> ${club.contact.email}</p>
            <p><strong>Phone:</strong> ${club.contact.phone}</p>
            <p><strong>Social:</strong> ${club.contact.social}</p>
            <a href="${club.contact.website}" target="_blank" class="btn-link">🌐${club.contact.website}</a>
            <a href="https://instagram.com/${club.contact.social.replace('@','')}" target="_blank" class="btn-link">📱  ${club.contact.social}</a>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBox.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredClubs = clubsData.filter(club =>
            club.name.toLowerCase().includes(searchTerm) ||
            club.vision.toLowerCase().includes(searchTerm) ||
            club.teamLead.toLowerCase().includes(searchTerm)
        );
        renderClubs(filteredClubs);
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter clubs
            const filter = button.dataset.filter;
            const filteredClubs = filter === 'all' 
                ? clubsData 
                : clubsData.filter(club => club.category === filter);
            renderClubs(filteredClubs);
        });
    });

    // Modal functionality
    closeModal.addEventListener('click', closeModalFunction);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunction();
    });

    // Mobile menu
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunction();
        }
    });
}

// Animate cards on scroll
function animateCards() {
    const cards = document.querySelectorAll('.club-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);