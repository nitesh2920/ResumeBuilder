import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    title: "Software Engineer",
    address: "123 Main St, Anytown, USA",
    summary:
      '<p><span style="color: rgb(13, 13, 13);">Experienced Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Proficient in technology stack including JavaScript, React, and Node.js.</span></p>',
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  workExperience: [
    {
      company: "Tech Corp",
      role: "Software Engineer",
      location: "New York, NY",
      startDate: "2020-01-01",
      endDate: "2022-12-31",
      description:
        "<ul><li>Developed and maintained web applications using React and Node.js.</li><li>Collaborated with cross-functional teams to define and design new features.</li></ul>",
      present: false,
    },
    {
      company: "Innovate LLC",
      role: "Frontend Developer",
      location: "San Francisco, CA",
      startDate: "2018-06-01",
      endDate: "2019-12-31",
      description:
        "<ul><li>Implemented responsive web design techniques to enhance user experience.</li><li>Worked closely with UX designers to translate designs into functional web pages.</li></ul>",
      present: false,
    },
  ],
  education: [
    {
      institute: "State University",
      degree: "B.Sc. Computer Science",
      startDate: "2015-09-01",
      endDate: "2019-05-15",
      present: false,
      address: "City, State, Country",
      detail: "Graduated with a 3.8 GPA.",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      link: "https://github.com/johndoe/e-commerce",
      description:
        '<ul><li><span style="color: rgb(13, 13, 13);">Developed a full-featured e-commerce platform with React and Node.js, including user authentication, product management, and payment processing.</span></li><li><span style="color: rgb(13, 13, 13);">Implemented an intuitive admin panel for managing products and orders.</span></li></ul>',
    },
    {
      name: "Personal Portfolio",
      link: "https://github.com/johndoe/portfolio",
      description:
        '<ul><li><span style="color: rgb(13, 13, 13);">Created a personal portfolio website to showcase projects and skills, built with HTML, CSS, and JavaScript.</span></li><li><span style="color: rgb(13, 13, 13);">Integrated a blog section to share technical articles and tutorials.</span></li></ul>',
    },
  ],
  languages: [
    "English",
    "Spanish",
  ],
  achievements: [
    {
      title: "Hackathon Winner",
      description: "Won 1st place in the 2021 State Hackathon for developing an innovative solution for smart home automation.",
    },
    {
      title: "Employee of the Year",
      description: "Awarded Employee of the Year at Tech Corp for outstanding performance and contributions to key projects.",
    },
  ],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalDetails(state, action) {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    addWorkExperience(state, action) {
      state.workExperience.push(action.payload);
    },
    updateWorkExperience(state, action) {
      const { index, data } = action.payload;
      state.workExperience[index] = data;
    },
    deleteWorkExperience(state, action) {
      const index = action.payload;
      state.workExperience.splice(index, 1);
    },
    addEducation(state, action) {
      state.education.push(action.payload);
    },
    updateEducation(state, action) {
      const { index, data } = action.payload;
      state.education[index] = data;
    },
    deleteEducation(state, action) {
      const index = action.payload;
      state.education.splice(index, 1);
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    addProject(state, action) {
      state.projects.push(action.payload);
    },
    updateProject(state, action) {
      const { index, data } = action.payload;
      state.projects[index] = data;
    },
    deleteProject(state, action) {
      state.projects.splice(action.payload, 1);
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    addAchievement(state, action) {
      state.achievements.push(action.payload);
    },
    updateAchievement(state, action) {
      const { index, data } = action.payload;
      state.achievements[index] = data;
    },
    deleteAchievement(state, action) {
      state.achievements.splice(action.payload, 1);
    },
  },
});

export const {
  updatePersonalDetails,
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  addEducation,
  updateEducation,
  deleteEducation,
  setSkills,
  addProject,
  updateProject,
  deleteProject,
  setLanguages,
  addAchievement,
  updateAchievement,
  deleteAchievement,
} = resumeSlice.actions;
export default resumeSlice.reducer;
