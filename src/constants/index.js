import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gdsc,
  wow,
  beingdev,
  bdev,
  gpt,
  shop,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer Member",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Oct 2021 - May 2022",
    points: [
      "Contributed to the growth and success of the GDSC by serving as a dedicated web developer member in the 2nd year, actively participating in various projects and initiatives.",
    ],
  },
  {
    title: "Google DSC Lead",
    company_name: "Google Developer Student Clubs",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "July 2022 - June 2023",
    points: [
      "Led the Google Developer Student Club (GDSC) as a GDSC Lead in the 3rd year, organizing successful workshops, events, and coding competitions, engaging and inspiring fellow students to pursue careers in technology.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Being Developer",
    icon: beingdev,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Vice Chair",
  //   company_name: "GeeksForGeeks Student Chapter",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
    "Thank you for building and nurturing a vibrant developer community on your campus. Thank you for reaching out to hundreds of students to create awareness about your club, and helping them become better developers.",
    name: "GDSC India",
    designation: "Community Manager",
    company: "Google DSC",
    image: "https://prakalp-2002.web.app/assets/gdsc-f71af2fd.png",
  },
  {
    testimonial:
      "Your hard work, commitment, and collaboration have played a pivotal role in the success of the project. The website we've created together stands as a testament to your valuable contributions, and your efforts have motivated us to push for even greater achievements in the future. Thank you for being such an integral part of this journey.",
    name: "Mayur N. (Former GDSE Member):",
    designation: "Project Manager",
    company: "SIEMENS",
    image: "https://www.secunet.com/fileadmin/user_upload/01_Seitencontent/Produkt-_und_Serviceseiten/Industry/1Siemens_Logo.jpg",
  },
  {
    testimonial:
      "Your exceptional skills, dedication, and teamwork have made a significant impact on the success of this project. Your contributions have not only resulted in a remarkable website but have also inspired us to strive for excellence in all our future endeavors.",
    name: "Siddhesh Nikam",
    designation: "Engineer",
    company: "LTIMindTree",
    image: "https://scontent.cdninstagram.com/v/t51.2885-19/361108662_826612798684832_1347121411853358939_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fJxi8hHYIyEAX8P2c05&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD8IbRlM3WJvm38AhkR5NBbVCmAfSd8cHPJ05HK2b2Mcg&oe=64F49C2B",
  },
];

const projects = [
  {
    name: "Shopping App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/PRAKALP-PANDE/ShoppingApp",
  },
  {
    name: "ChatGPT Clone",
    description:
      "ChatGPT Clone is an AI language model based on the GPT-3.5 architecture developed by OpenAI. It is designed to generate human-like responses to text-based prompts and engage in conversation with users. The model has been trained on a vast amount of text data and can provide information, answer questions, and assist with various tasks.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "openAI",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/PRAKALP-PANDE/ChatGPT-Clone",
  },
  {
    name: "Being Developer",
    description:
      "A service-based project built using React.js and Firebase is a dynamic web application that offers various services to users. It leverages React.js to create an interactive user interface that allows users to access and utilize the services provided. Firebase, a comprehensive platform, is used for backend services such as authentication.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bdev,
    source_code_link: "https://github.com/PRAKALP-PANDE/BeingDeveloper",
  },
];

export { services, technologies, experiences, testimonials, projects };