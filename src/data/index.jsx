import { nanoid } from 'nanoid';

import { FaHtml5, FaCss3, FaSass, FaBootstrap, FaJs, FaReact } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';

import img1 from '../assets/img/project-1.png';
import img2 from '../assets/img/project-2.png';
import img3 from '../assets/img/project-3.png';
import img4 from '../assets/img/project-4.png';
import img5 from '../assets/img/project-5.png';
import img6 from '../assets/img/project-6.png';
import img7 from '../assets/img/project-7.png';
import img8 from '../assets/img/project-8.png';
import img9 from '../assets/img/project-9.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML',
    icon: <FaHtml5 className='h-16 w-16 text-violet-500' />,
    text: 'HTML expert, creating structurally sound and visually appealing web pages for optimal user experiences."',
  },
  {
    id: nanoid(),
    title: 'CSS',
    icon: <FaCss3 className='h-16 w-16 text-violet-500' />,
    text: 'CSS specialist, designing responsive layouts for visually pleasing and user-friendly websites.',
  },
  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <BiLogoTailwindCss className='h-16 w-16 text-violet-500' />,
    text: 'Tailwind lover, using its utility-first approach for quick and consistent web styling.',
  },
  {
    id: nanoid(),
    title: 'Sass',
    icon: <FaSass className='h-16 w-16 text-violet-500' />,
    text: 'Sass user, streamlining CSS development for maintainable and modular stylesheets."',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className='h-16 w-16 text-violet-500' />,
    text: 'Bootstrap enthusiast, using its responsive grid and components for efficient and consistent designs.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-violet-500' />,
    text: 'JavaScript pro, developing dynamic web applications with seamless user interactions.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-violet-500' />,
    text: 'Advanced React developer, building efficient and interactive front-end applications with a focus on modular and scalable architecture.',
  },
  {
    id: nanoid(),
    title: 'RESTful APIs',
    icon: <TbApi className='h-16 w-16 text-violet-500' />,
    text: 'Expert in designing and consuming RESTful APIs, ensuring smooth communication and robust functionality in web applications.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: 'https://ecommerce-burakbilgili.vercel.app/',
    github: 'https://github.com/akaBaytar/e-commerce',
    title: 'E-Commerce',
    text: 'E-commerce website using HTML5, CSS, and vanilla JavaScript. Product and shopping cart features are stored in localstorage.',
    tags: ['html5', 'css', 'responsive', 'carousel', 'javascript'],
  },
  {
    id: nanoid(),
    img: img2,
    url: 'https://burakbilgili-house-marketplace.vercel.app/',
    github: 'https://github.com/akaBaytar/house-marketplace',
    title: 'House Marketplace',
    text: 'House Marketplace project, where homeowners can list their properties for sale or rent and potential buyers or tenants can explore the available options.',
    tags: ['react', 'firebase', 'authentication', 'fullstack'],
  },
  {
    id: nanoid(),
    img: img3,
    url: 'https://sip-n-shiver.vercel.app/',
    github: 'https://github.com/akaBaytar/sip-n-shiver',
    title: "Sip 'n Shiver",
    text: "Sip 'n Shiver is a React app where you can search for cocktails using the CocktailDB API.",
    tags: ['react', 'axios', 'react-router-dom', 'react-query'],
  },
  {
    id: nanoid(),
    img: img4,
    url: 'https://feedback-app-akabaytar.vercel.app/',
    github: 'https://github.com/akaBaytar/feedback-app',
    title: 'Feedback App',
    text: 'Frontend feedback app project, feedback entries are currently hardcoded, allowing users to add, delete, and modify entries.',
    tags: ['react', 'react-router-dom'],
  },
  {
    id: nanoid(),
    img: img5,
    url: 'https://flixify-burakbilgili.vercel.app/',
    github: 'https://github.com/akaBaytar/flixify-project',
    title: 'Flixify',
    text: 'Flixify is a movie and TV show search application developed using React and Vite. The frontend is styled using Tailwind CSS.',
    tags: ['react', 'api', 'responsive', 'mobile-first', 'tailwindcss'],
  },
  {
    id: nanoid(),
    img: img6,
    url: 'https://tailwind-burakbilgili.vercel.app/',
    github: 'https://github.com/akaBaytar/landing-pages',
    title: 'Tailwind Landing Pages',
    text: 'Responsive landing pages I coded during my Tailwind learning journey. Designs were taken from the Frontend Mentor website.',
    tags: ['landing-pages', 'challenge', 'tailwindcss'],
  },
  {
    id: nanoid(),
    img: img7,
    url: 'https://moviesiteburakbilgili.vercel.app/',
    github: 'https://github.com/akaBaytar/sanat-sepet',
    title: 'Sanat Sepet',
    text: 'Responsive project I created using HTML, CSS, and JavaScript. I predominantly utilized CSS features, and I particularly enjoy the transition effects in the navbar and trend cards.',
    tags: ['responsive', 'css', 'html', 'javascript'],
  },
  {
    id: nanoid(),
    img: img8,
    url: 'https://restaurant-cerasus.vercel.app/',
    github: 'https://github.com/akaBaytar/restaurant-cerasus',
    title: 'Restaurant Cerasus',
    text: 'A fictional multi-page restaurant project styled with SCSS and named after my hometown.',
    tags: ['javascript', 'html', 'scss', 'carousel'],
  },
  {
    id: nanoid(),
    img: img9,
    url: 'https://burakbilgili-github-api.vercel.app/',
    github: 'https://github.com/akaBaytar/github-finder',
    title: 'Github Finder',
    text: 'Github Finder is a React application developed using React and Vite. This project allows users to search for other users GitHub profiles.',
    tags: ['react', 'vite', 'github', 'api'],
  },
];
