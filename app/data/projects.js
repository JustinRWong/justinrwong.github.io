// TODO Add a couple lines about each project
const data = [
  {
    title: 'Actionmap',
    subtitle: 'CS 169A: Software Engineering',
    link: 'https://actionmap03.herokuapp.com/',
    image: '/images/projects/actionmap.jpg',
    date: '2020-08-12',
    desc: 'ActionMap seeks to provide an integrated, seamless, and shareable platform that makes it easier for voters to connect with the progressive community while at the same time enabling progressive organizations, candidates, and elected leaders to reach new activists.'
      + ' My team and I leveraged the MVC design pattern in Ruby on Rail to design and implement the Representative, News Articles, Issues, and Ratings models and controllers. Additionally, we integrated with Google Civic Information API, whlie rendering a Counties Map.'
      + ' Following test-driven development and standard git standards, we familiarized ourselves with Agile software engineering tools and behaviors, including a scrum board, travis CI, heroku, sprint planning, codecov, git, and database management.',
  }, {
    title: 'Pintos OS Extensions',
    subtitle: 'CS 162: Opreating Systems',
    link: 'https://inst.eecs.berkeley.edu/~cs162/su20/',
    image: '/images/projects/pintosOS.jpg',
    date: '2020-06-18 through 2020-08-14 ',
    desc: 'A university group project involving the extension of a simple OS named ‘Pintos’. '
      + 'Tasks included the ability to run user programs, extending the system with threads, scheduling multiple threads efficiently, a buffer cache with extensible files, subdirectories, and virtual memory. '
      + 'The project placed emphasis on concurrency (implementing OS-level semaphores), debugging large systems and memory management.',
  }, {
    title: 'Database System',
    subtitle: 'Java • Selinger Optimisation • SQL • Relational Algebra',
    link: 'https://cs186berkeley.net/',
    image: '/images/projects/dbms.png',
    date: '2019-08-28 through 2019-12-10',
    desc: 'As part of CS 186: Databases, I built a fully functional, optimized relational database throughout the semseter. '
      + 'First, I started building a SQL parser. Then, I implemented B+ Trees using an index system. '
      + 'After, I logic for joins operations, such as partial, inner, outer, and equi-joins. '
      + 'Finally, I translated incoming queries into relational algebra and performed Selingere optimization to find the most efficient way to compute the query results, given the sizes and clustering of each data set. '
      + 'You can email me for a copy.',
  }, {
    title: 'Older Projects',
    subtitle: 'Will soon be updated',
    link: 'https://github.com/JustinRWong?tab=repositories',
    image: '/images/projects/sfpano.png',
    date: '---',
    desc: 'Coming soon',
  },
];

export default data;
