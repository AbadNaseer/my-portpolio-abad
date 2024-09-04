export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring AI/ML models and cloud-native applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Angular Code Summarization",
    des: "Created a tool for summarizing Angular code and integrated an AI model to improve project navigation and understanding.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Sales Product Website",
    des: "I developed the 'Sales Product Website' to provide a seamless online shopping experience.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Top Travel Advisor App",
    des: "A REAL Software-as-a-Service app with personalized recommendations, itinerary management, and real-time updates for seamless trip planning and enjoyable travel experiences.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Gym Management Web App",
    des: "Efficiently manage memberships, track workouts, and schedule classes with our MERN stack web app.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Abad on our Gym Management Web App was a game-changer. His expertise in the MERN stack was evident from the start. Abad's ability to turn complex requirements into a seamless, user-friendly application was remarkable. If you need a reliable developer who excels in full-stack web development, Abad is your go-to expert.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Abad Naseer on our project was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abad's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and brand, Abad is the ideal partner.",
    name: "Sarah Lee",
    title: "CEO of TechFlow Inc.",
  },
  {
    quote:
      "Abad's expertise in MERN stack development was key to the success of our travel web app project. His technical skills and strategic approach ensured a smooth development process. If you're looking to enhance your web platform with top-notch development, Abad is the perfect choice.",
    name: "David Kim",
    title: "CTO of Wanderlust Travel",
  },
  {
    quote:
      "Abad's deep knowledge of AI/ML and cloud-native applications made our project a resounding success. His ability to integrate advanced technologies into practical solutions is impressive. For any AI-driven or cloud-based project, Abad is the expert you want on your team.",
    name: "Emily Rodriguez",
    title: "Lead Data Scientist at InnovateX",
  },
  {
    quote:
      "If you're looking for someone who can deliver a high-performance web solution using modern tech stacks like MERN, look no further than Abad. His commitment to excellence and his ability to exceed client expectations make him a standout developer.",
    name: "John Smith",
    title: "Founder of WebCore Solutions",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI web App Dev - NextSapian Group",
    desc: "Designed, developed, and deployed AI web app for my client.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/AbadNaseer"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/abadVoiceOfPak"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/abadnaseer/"
  },
];
