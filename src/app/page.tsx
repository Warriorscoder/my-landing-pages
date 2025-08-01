import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const aniketResume = {
    name: "ANIKET ANAND BHARANE",
    email: "aniketbharane2004@gmail.com",
    phone: "+91-7499008410",
    linkedIn: "https://www.linkedin.com/in/aniket-bharane-208453257/",
    github: "https://github.com/Warriorscoder",
    location: "Maharashtra, India",
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        school: "Indian Institute of Information Technology, Kota",
        gradDate: "Expected 2026",
        gpa: "7.2 CGPA"
      }
    ],
    experience: [
      {
        title: "Web Developer",
        company: "DreamsCloud Tech (Remote)",
        dates: "May 2025 - Aug 2025",
        summary: "Worked on a School ERP System to streamline academic and administrative workflows, creating a modular Transport Management subsystem with full CRUD APIs and a React UI. Participated in Agile sprints, code reviews, and Git version control.",
        techStack: "React.js, Redux, Express.js, MongoDB, SCSS."
      },
      {
        title: "Full Stack Web Developer Intern",
        company: "Swabhiman Foundation (Remote)",
        dates: "Jun 2025 - Aug 2025",
        summary: "Led a team of 4 for 'Aapna Network' to connect rural skilled workers. Implemented and tested routes using Postman and handled team task management and peer reviews.",
        techStack: "Express.js, MongoDB, Next.js, Tailwind CSS."
      }
    ],
    skills: {
      languages: "C, C++, JavaScript, TypeScript",
      frameworks: "React.js, Next.js",
      uiLibraries: "Shadcn, Aceternity, React Bits",
      tools: "GitHub, TailwindCSS, Postman, Figma, PostgreSQL",
      softSkills: "Communication, Leadership, Teamwork"
    }
  };

  return (
    <>
    <div className={`${inter.className} ${styles.page}`}>
     <header className={`${styles.header}`}>
      <div className={`${styles.headerContainer}`}>
        <h1 className={`${styles.title}`}>{aniketResume.name}</h1>
        <nav className={`${styles.navLinks}`}>
          <Link href="#about" className={`${styles.navLink}`}>About</Link>
          <Link href="#experience" className={`${styles.navLink}`}>Experience</Link>
          <Link href="#portfolio-info" className={`${styles.navLink}`}>This Site</Link>
        </nav>
      </div>
    </header>

      <main className={`${styles.main}`}>
        {/* About Me Section */}
        <section id="about" className={`${styles.section} mb-12`}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* <div className="text-center">
              <Image
                className="rounded-full border-4 border-gray-200"
                src="https://placehold.co/150x150/E2E8F0/A0AEC0?text=AB"
                alt="Aniket Bharane"
                width={150}
                height={150} />
            </div> */}
            <div>
              <h2 className={`${styles.sectionTitle}`}>About Me</h2>
              <p className={`${styles.sectionText}`}>
                I am a passionate and driven B.Tech student in Computer Science and Engineering with a focus on web development. My skills include building responsive user dashboards, integrating secure user management, and developing full-stack applications. I am a strong communicator and leader, always eager to learn and take on new challenges.
              </p>
              <div className={`${styles.contactLinks} mt-4`}>
                <Link href={`mailto:${aniketResume.email}`} className={`${styles.contactLink}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  <span>{aniketResume.email}</span>
                </Link>
                <Link href={`tel:${aniketResume.phone}`} className={`${styles.contactLink}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  <span>{aniketResume.phone}</span>
                </Link>
                <Link href={aniketResume.github} target="_blank" rel="noopener noreferrer" className={`${styles.contactLink}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.095 8.197-11.411 0-6.627-5.373-12-12-12z" /></svg>
                  <span>GitHub</span>
                </Link>
                <Link href={`https://www.linkedin.com/in/${aniketResume.linkedIn}`} target="_blank" rel="noopener noreferrer" className={`${styles.contactLink}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`${styles.section} mb-12`}>
          <h2 className={`${styles.sectionTitle}`}>Experience & Internships</h2>
          <div className="space-y-6">
            {aniketResume.experience.map((job, index) => (
              <div key={index} className={`${styles.experienceItem}`}>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-500">{job.company} | {job.dates}</p>
                <p className="mt-2">{job.summary}</p>
                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold">Tech Stack:</span> {job.techStack}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About This Website & Contact Section */}
        <section id="portfolio-info" className={`${styles.section}`}>
          <h2 className={`${styles.sectionTitle}`}>About This Website</h2>
          <div className="space-y-4">
            <p>This website is a showcase of my skills in modern web development. It&apos;s a statically generated site built with Next.js, and it demonstrates a decoupled architecture by using Contentful as a headless CMS.</p>
            <p className="text-sm text-gray-500">
              - The page layout is dynamically generated based on a `layoutConfig` field, which stores the component order and IDs in JSON.
              <br />
              - The content for each component is fetched via the Contentful GraphQL API.
              <br />
              - This approach allows for maximum flexibility, as the page can be entirely reconfigured without code changes.
            </p>
            <h3 className="text-xl font-bold mt-6">Contact Info</h3>
            <p>Feel free to reach out to me via email or connect with me on social media.</p>
            <div className={`${styles.contactLinks} mt-4`}>
              <Link href={`mailto:${aniketResume.email}`} className={`${styles.contactLink}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span>{aniketResume.email}</span>
              </Link>
              <Link href={aniketResume.github} target="_blank" rel="noopener noreferrer" className={`${styles.contactLink}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.197-6.095 8.197-11.411 0-6.627-5.373-12-12-12z" /></svg>
                <span>GitHub</span>
              </Link>
              <Link href={`https://www.linkedin.com/in/${aniketResume.linkedIn}`} target="_blank" rel="noopener noreferrer" className={`${styles.contactLink}`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        
      </section>
    </main>
    <footer className={`${styles.footer}`}>
        <p className={`${styles.footerText}`}>
          &copy; {new Date().getFullYear()} {aniketResume.name}. All rights reserved.
        </p>
      </footer>
    </div>
    </>
  );
}
