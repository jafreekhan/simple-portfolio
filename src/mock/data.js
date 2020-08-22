import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jafree',
  subtitle: 'I like to make stuff with code',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Web Developer with enthusiasm and focus on Full Stack Development.',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the computer science field.',
  paragraphThree: 'Feel free to contact me via email at any time - jafree282@gmail.com',
  resume: 'https://drive.google.com/file/d/1i8J2rLC60tPstNHvg1G1hch23ovz2pJx/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'facerecognition.JPG',
    title: 'Face Recognition App',
    info:
      "A full-stack web application using Express, React, Node and NoSQL which allows you to identify the detection of faces in any image supplied. This was achieved thanks to Clarifai's artificial intelligence API.",
    info2: 'I used React, Node, Express.js and NoSQL in order to create this web application.',
    url: 'https://smart-brain-new-app.herokuapp.com/',
    repo: 'https://github.com/jafreekhan/smart-brain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bingo.JPG',
    title: 'College Application App',
    info:
      'A full-stack web application using Django and React, this app allows students to generate College Recomendation based on their grades, high school and location.',
    info2:
      "Developed with 3 other team members using Django, React and Django's built in NoSQL database to create this web application.",
    url: 'https://github.com/Omarfos/CSE416',
    // repo: 'https://github.com/Omarfos/CSE416', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.JPG',
    title: 'Robo Friends',
    info: 'React App that showcases the power of react with some cards as Robots',
    info2: 'It is super cool to look at',
    url: 'https://jafreekhan.github.io/Robofriends/',
    repo: 'https://github.com/jafreekhan/Robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'backgroundGenerator.JPG',
    title: 'Background Generator',
    info: 'Customize your ideal background gradient with the help of this app',
    info2: '',
    url: 'https://jafreekhan.github.io/backgroundGenerator/',
    repo: 'https://github.com/jafreekhan/backgroundGenerator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's talk",
  email: 'jafree282@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/jafreekomeness/',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jafree-khan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jafreekhan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
