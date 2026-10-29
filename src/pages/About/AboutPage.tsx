import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import CVSection from '../../components/common/CVAccordion';

const AboutPage: React.FC = () => {
  const education = [
    {
      title: 'London South Bank University',
      content: (
        <div className="space-y-2">
          <p className="font-normal text-primary">BSc in Internet Computing (2007–2010)</p>
          <p className="italic">Graduated with First Class Honours</p>
        </div>
      ),
    },
    {
      title: 'Esher College',
      content: (
        <div className="space-y-2">
          <p className="font-normal text-primary">A-Levels & AS-Levels (2002–2004)</p>
          <p className="text-sm">A-Level in Information Technology; AS-Levels in IT, Biology, Chemistry, and General Studies.</p>
        </div>
      ),
    },
    {
      title: 'Wimbledon College',
      content: (
        <div className="space-y-2">
          <p className="font-normal text-primary">GCSEs (1999–2002)</p>
          <p className="text-sm">Including Maths, Science (Double Award), English, Information Technology, Design Technology, French, Geography, Physical Education, and Religious Education.</p>
        </div>
      ),
    },
  ];

  const experience = [
    {
      title: 'Front End Developer - Intelliflo Ltd',
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-normal text-primary">January 2019 – Present</span>
          </div>
          <p>Driving front-end development and UI Engineering for <a className="text-primary" href="https://www.intelliflo.com/" target="_blank" rel="noopener noreferrer">intelliflo</a>, the UK's leading provider
of software for financial advisers.</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Continuous UI/UX improvements for intelliflo office, prioritizing <span className="text-primary">consistency</span> and <span className="text-primary">accessibility</span>.</li>
            <li>Crafted <span className="text-primary">scalable</span> front-end <span className="text-primary">components</span> using HTML, SASS/SCSS, JavaScript, and Razor.</li>
            <li>Assisted the transition from a monolithic structure to a Micro Frontend (<span className="text-primary">MFE</span>) approach using React.</li>
            <li>Worked with teams to style and integrate <span className="text-primary">React</span> based MFEs into legacy Razor views as well as migrate legacy Razor views into new React based MFEs.</li>
            <li>Promoted front-end best practices, including <span className="text-primary">semantic markup</span>, adoption of modern development practices, and performance optimization.</li>
            <li>Co-architected component libraries, <span className="text-primary">UI pattern guidelines</span>, and global styling standards across engineering teams, ensuring best practices, performance, and accessibility compliance.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Web Developer - Dermalogica UK Ltd',
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-normal text-primary">August 2012 – December 2018</span>
          </div>
          <p>Provided front-end development for Dermalogica's UK digital ecosystem.</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Created <span className="text-primary">responsive</span>, mobile-first interfaces to ensure seamless user journeys.</li>
            <li>Developed and maintained key customer-facing features — including the online booking system.</li>
            <li>Implemented clean, <span className="text-primary">maintainable</span> front-end code using HTML5, CSS3, <span className="text-primary">JavaScript</span>, jQuery, and <span className="text-primary">Razor</span> in ASP.NET MVC.</li>
            <li>Collaborated closely with cross departmental teams to <span className="text-primary">deliver</span> new campaigns, product launches, and seasonal updates at pace.</li>
            <li>Boosted site performance and <span className="text-primary">SEO</span> through semantic markup, asset optimisation, and iterative refinements.</li>
            <li>Aided integrations with backend systems, payment flows, and <span className="text-primary">content management processes</span>.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Web Developer & Consultant - Freelance',
      content: (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-normal text-primary">August 2010 – Present</span>
          </div>
          <p>Offers <span className="text-primary">end-to-end web design and development</span> for small businesses, creatives, and independent clients.</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Crafted <span className="text-primary">bespoke websites</span> with a strong focus on usability, clarity, and mobile-first layouts.</li>
            <li>Produced lightweight, maintainable front-end code using HTML, CSS, JavaScript, and <span className="text-primary">WordPress/PHP</span>.</li>
            <li>Gave advice on branding, <span className="text-primary">UX improvements</span>, content structure, and technical decision-making.</li>
            <li>Applied performance optimisations, accessibility improvements, and <span className="text-primary">SEO-friendly markup</span>.</li>
            <li>Offered ongoing support, updates, and enhancements for <span className="text-primary">long-term reliability</span>.</li>
          </ul>
        </div>
      ),
    },
  ];

  const skills = [
    { category: 'Front End', items: ['HTML', 'CSS', 'SASS', 'JS', 'TypeScript', 'React', 'Bootstrap', 'Tailwind', 'jQuery'] },
    { category: 'UX & Design', items: ['Figma', 'Photoshop', 'Rapid Prototyping'] },
    { category: 'Backend & DevOps', items: ['Git', 'AWS', 'C#', 'SQL', 'Docker', 'Kubernetes'] },
    { category: 'Design Patterns', items: ['BEM', 'MFE', 'MVC', 'OOP'] },
    { category: 'Tools', items: ['Claude Code', 'GitHub', 'Visual Studio', 'VS Code', 'Terminal', 'Vite', 'Webpack', 'Sublime Text', 'SSMS'] },
  ];

  return (
    <PageWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="flex flex-col items-center mb-8">
            <div className="relative inline-block mb-6">
                <img
                  src="/img/me-02-bw.jpg"
                  alt="Ben Weltman"
                  className="w-full h-auto rounded-lg object-cover border-4 border-slate-200 dark:border-[#2a322c]"
                />
            </div>
          </div>
          <div className="sticky top-24 p-6 bg-[#f1f4f3] dark:bg-[#242a26] rounded-lg border border-slate-200 dark:border-[#2a322c] space-y-8">
            <div>
              <h3 className="font-normal text-lg mb-3 text-primary">Contact Details</h3>
              <div className="space-y-3 text-sm opacity-80">
                <a href="mailto:ben@benweltman.com" className="flex items-center gap-3 hover:text-primary">
                  <div className="w-[18px] flex justify-center">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <span>ben@benweltman.com</span>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=Poole+Dorset+UK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <div className="w-[18px] flex justify-center">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <span>Based in Poole, Dorset, UK</span>
                </a>
                <a href="https://uk.linkedin.com/in/bsweltman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <div className="w-[18px] flex justify-center">
                    <span className="bi bi-linkedin text-[18px]"></span>
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/benweltman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <div className="w-[18px] flex justify-center">
                    <span className="bi bi-github text-[18px]"></span>
                  </div>
                  <span>GitHub</span>
                </a>
                <a href="https://codepen.io/benweltman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <div className="w-[18px] flex justify-center">
                    <span
                      className="block w-[18px] h-[18px] bg-current dark:bg-current [mask-image:url('https://blog.codepen.io/wp-content/uploads/2023/09/logo-black.png')] [mask-size:contain] [mask-repeat:no-repeat] dark:hidden"
                      aria-hidden="true"
                    />
                    <span
                      className="block w-[18px] h-[18px] bg-current dark:bg-current hidden dark:block [mask-image:url('https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png')] [mask-size:contain] [mask-repeat:no-repeat]"
                      aria-hidden="true"
                    />
                  </div>
                  <span>CodePen</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-normal text-lg mb-3 text-primary">Skills</h3>
              {skills.map(skillGroup => (
                <div key={skillGroup.category} className="space-y-2">
                  <p className="text-xs font-normal uppercase tracking-wider text-slate-600 dark:text-[#a3aaa5]">{skillGroup.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-2 py-1 text-xs rounded-md bg-[#f1f4f3] dark:bg-[#2a322c] border border-slate-200 dark:border-[#343d37]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-normal text-lg mb-3 text-primary">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Music', 'Film', 'Food', 'Cooking', 'Sports', 'Sci-fi', 'Anime', 'Japan', 'Warhammer 40K', 'Martial Arts', 'Gardening', 'Vistagazing'].map(item => (
                  <span key={item} className="px-2 py-1 text-xs rounded-md bg-[#f1f4f3] dark:bg-[#2a322c] border border-slate-200 dark:border-[#343d37]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-5xl font-normal text-primary mb-4">About Me</h1>
          <p className="text-base opacity-80 max-w-3xl mb-6 leading-relaxed">
            Since 2010, I’ve worked as a Front End Developer (UI Engineer) and consultant, engineering web applications and interfaces across a range of industries. Following six and a half years at Dermalogica UK, I joined Intelliflo - the UK's leading financial SaaS provider - in 2019 as a Front End Developer (UI Engineer).<br /><br />
            Working inside a dedicated software engineering culture has been instrumental in honing my technical depth. While I bring full-stack context to my work, my focus and passion are firmly on front-end delivery: crafting scalable design systems, writing clean CSS/TypeScript, and building semantic, fully accessible user interfaces.<br /><br />
            Collaborating alongside a talented team of UI specialists at Intelliflo has provided an incredible environment for pushing the boundaries of modern CSS, component architecture, and design systems. Whether engineering enterprise-scale SaaS applications or delivering custom MFEs, I thrive on turning complex UI challenges into clean, accessible, and maintainable digital products.
          </p>
          <CVSection title="Experience" items={experience} defaultOpenIndex={0} />
          <CVSection title="Education" items={education} defaultOpenIndex={0}/>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
