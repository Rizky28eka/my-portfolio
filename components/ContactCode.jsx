import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'rizky28eka@gmail.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  {
    social: 'github',
    link: 'Rizky28eka',
    href: 'https://github.com/rizky28eka',
  },
  {
    social: 'linkedin',
    link: 'Rizky28eka',
    href: 'https://www.linkedin.com/in/Rizky28eka/',
  },
  {
    social: 'instagram',
    link: 'rzkyhryd._',
    href: 'https://www.instagram.com/iamnitinr',
  },
  {
    social: 'stackoverflow',
    link: 'Rizky28eka',
    href: 'https://stackoverflow.com/users/12039478/rizky28eka',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
