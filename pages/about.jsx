import { useState } from 'react';

const TechStackDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AboutPage = ({ title, role, name, education, hobbies, skills, techStack }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{`My name is ${name}. I am a ${role} Frontend Mobile Developer.`}</p>
      <p>{`I am currently a student at ${education} in Yogyakarta, particularly at AMIKOM Yogyakarta.`}</p>
      <p>{`In my free time, I enjoy ${hobbies.join(', ')}.`}</p>
      <p>{`I have skills in ${skills.join(', ')}.`}</p>
      <p>{`Here are some technologies in my stack:`}</p>

      <TechStackDropdown title="Programming Languages" items={techStack.programmingLanguages} />
      <TechStackDropdown title="Web Development" items={techStack.webDevelopment} />
      <TechStackDropdown title="Mobile Development" items={techStack.mobileDevelopment} />
      <TechStackDropdown title="Design and Multimedia" items={techStack.designAndMultimedia} />
      <TechStackDropdown title="Database" items={techStack.database} />
      <TechStackDropdown title="Version Control" items={techStack.versionControl} />
      <TechStackDropdown title="DevOps and Tools" items={techStack.devOpsAndTools} />
      <TechStackDropdown title="Other" items={techStack.other} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'About',
      role: 'Frontend Mobile Developer',
      name: 'Rizky Eka Haryadi',
      education: 'AMIKOM Yogyakarta',
      hobbies: ['gaming', 'travelling', 'coding'],
      skills: ['React', 'React Native', 'JavaScript', 'HTML', 'CSS'],
      techStack: {
        programmingLanguages: ['Swift', 'Dart', 'Kotlin', 'C', 'C#', 'C++', 'JavaScript', 'Java'],
        webDevelopment: ['HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS'],
        mobileDevelopment: ['Android', 'Flutter', 'iOS'],
        designAndMultimedia: ['Adobe Illustrator', 'Adobe XD', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Lightroom', 'Figma', 'Sketch', 'Blender'],
        database: ['MongoDB', 'SQLite', 'MySQL'],
        versionControl: ['GitHub', 'Git'],
        devOpsAndTools: ['Firebase', 'Docker', 'Netlify', 'Heroku', 'NPM'],
        other: ['Trello', 'Arduino', 'Apache', 'Canva', 'Adobe Audition', 'Adobe Premiere Pro'],
      },
    },
  };
}

export default AboutPage;
