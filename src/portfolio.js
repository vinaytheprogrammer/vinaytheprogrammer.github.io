const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Meet Vinay',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vinay Gupta',
  role: 'Full Stack Developer',
  description:
    'A Full Stack Developer designs and implements both front-end and back-end solutions, ensuring seamless integration and functionality across applications.',
  resume: 'https://drive.google.com/file/d/1EitYjBipcmEfBKFUam_gHdJr7LLjr_6n/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/vinaygupta-nitjsr/',
    github: 'https://github.com/vinaytheprogrammer',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dispensary',
    description:
      'The Dispensary Management System streamlines inventory, tracks patient history, and validates patients, addressing campus dispensary needs effectively.',
    stack: ['Reactjs', 'Tailwind', 'Express','Nodejs','MongoDB','Postman','passport'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Dispensary_management_sys',
    livePreview: 'https://dispensary-management-sys.vercel.app/',
  },
  {
    name: 'Blog_Post',
    description:
      'This project provides user authentication, CRUD operations, commenting, profile management, and administrative controls, ensuring a complete and secure experience.',
    stack: ['EJS', 'Mongoose', 'JWT','Thunderbolt'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Blog_Post',
    livePreview: 'https://blog-post-75ip.onrender.com/',
  },
  {
    name: 'ChitChat',
    description:
      'This is an AI-powered chat application designed for engaging conversations, providing intelligent responses, and enhancing user interactions seamlessly.',
    stack: ['JS', 'Gemini', 'CSS3'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Chitchat',
    livePreview: 'https://chitchat-0tk9.onrender.com/',
  },
  {
    name: 'LegisForum',
    description:
      'My first freelance project: a website designed for managing customer workload and providing a seamless interface for query resolution',
    stack: ['Bootstrap', 'Slider', 'CSS'],
    sourceCode: 'https://github.com/vinaytheprogrammer/legis_forum',
    livePreview: 'https://legisforum.org/',
  },
  {
    name: 'Weather_Report',
    description:
      'A WeatherApp utilizing an API to fetch and display real-time weather data, offering accurate forecasts and current conditions.',
    stack: ['JS', 'Weather', 'ExpressJS'],
    sourceCode: 'https://github.com/vinaytheprogrammer/weather_report',
    livePreview: 'https://weather-report-mu-nine.vercel.app/',
  },
  {
    name: 'Encyption Decryption',
    description:
      'Encryption and decryption in C++ using a custom algorithm that maps characters to emojis and handles file-based data storage.',
    stack: ['CPP', 'FileHanding', 'STL'],
    sourceCode: 'https://github.com/vinaytheprogrammer/Encryption_and_Decryption',
    livePreview: '#',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'ReactJS',
  'EJS',
  'MongoDB',
  'Material UI',
  'Git',
  'CI/CD',
  'JWT',
  'Passport',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vinaygupta.nitjsr@gmail.com',
}

export { header, about, projects, skills, contact }
