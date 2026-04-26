function ProjectCard({ num, type, title, demoLink, codeLink, tags, description, highlight, videoSrc, isInProgress }) {
  const linksHtml = `
    ${demoLink ? `<a href="${demoLink}" target="_blank" rel="noreferrer" class="ch ch-l">▶ Demo</a>` : ''}
    ${codeLink ? `<a href="${codeLink}" target="_blank" rel="noreferrer" class="ch ch-g">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      Code
    </a>` : ''}
    ${isInProgress ? `<span class="ch ch-w">⚙ In Progress</span>` : ''}
  `;

  const tagsHtml = tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  const previewHtml = isInProgress || !videoSrc ? `
    <div class="ppreview ppreview--wip">
      <span class="ppreview-wip-label">⚙ Media Placeholder</span>
    </div>
  ` : `
    <div class="ppreview">
      <iframe
        src="${videoSrc}"
        frameborder="0"
        allow="autoplay; encrypted-media"
        loading="lazy"
        tabindex="-1"
        aria-hidden="true"
      ></iframe>
    </div>
  `;

  return `
    <div class="pj" data-pj>
      <div class="pj-bg"></div>
      <div class="pnum">${num}</div>
      <div class="pbody">
        <div class="phead">
          <div>
            <div class="ptype">${type}</div>
            <h3 class="ptitle">${title}</h3>
          </div>
          <div class="plinks">
            ${linksHtml}
          </div>
        </div>
        <div class="pbottom">
          <div>
            <div class="ptags">
              ${tagsHtml}
            </div>
            ${previewHtml}
          </div>
          <div>
            <p class="pdesc">${description}</p>
            <div class="pimp">
              <div class="pimp-l">Why it matters</div>
              <div class="pimp-t">${highlight}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function Projects() {
  return `
    <section id="work">
      <div class="w">
        <div class="sl">01 — Selected Work</div>
        <h2 class="sh wtitle">Things I've shipped.</h2>
        <div class="pl">
          ${ProjectCard({
            num: '01',
            type: 'Case Study · Full-Stack',
            title: 'Project Alpha',
            demoLink: '#',
            codeLink: '#',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            description: 'A comprehensive full-stack application that solves a real-world problem with an elegant UI and robust backend architecture.',
            highlight: 'Demonstrates ability to handle complex state management and seamless API integrations.',
            videoSrc: '',
            isInProgress: false
          })}
          
          ${ProjectCard({
            num: '02',
            type: 'Product · Design',
            title: 'Project Beta',
            demoLink: '#',
            codeLink: '#',
            tags: ['UI/UX', 'Figma', 'CSS'],
            description: 'A highly polished user interface focusing on micro-interactions and smooth user experiences.',
            highlight: 'Showcases attention to detail, typography, and responsive design principles.',
            videoSrc: '',
            isInProgress: false
          })}
          
          ${ProjectCard({
            num: '03',
            type: 'In Progress · Research',
            title: 'Project Gamma',
            demoLink: null,
            codeLink: null,
            tags: ['Next.js', 'Experimental'],
            description: 'An experimental project exploring new technologies and architectural patterns.',
            highlight: 'Illustrates continuous learning and willingness to push boundaries.',
            videoSrc: '',
            isInProgress: true
          })}
        </div>
      </div>
    </section>
    <div class="divr"></div>
  `;
}
