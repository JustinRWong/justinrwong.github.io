const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Justin R. Wong',
    heading: 'WELCOME TO MY PERSONAL WEBSITE',
  },
  {
    route: '/about',
    title: 'About | Justin R. Wong',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Justin R. Wong',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Justin R. Wong',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Justin R. Wong',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
