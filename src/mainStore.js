import { defineStore } from 'pinia'

export const useStore = defineStore('mainStore', {
  state: () => {
    return {
      currentTheme: 'auto',
      primaryBgColor: 'bg-blue-600',
      secondaryBgColor: 'bg-gray-50',
      primaryColor: 'text-blue-600',
      secondaryColor: 'text-slate-500',
      companies: [
        {
          name: 'Flyscan',
          period: 'Jan 2023 - Jul 2024',
          title: 'Front End Developer',
          type: 'Full Time',
          tasks:
            'Developed end-to-end complex features, from backend implementation to frontend integration, ensuring seamless functionality across the application. Proficient in conducting comprehensive testing to guarantee robustness and quality assurance.',
          place: 'Montreal, QC',
          webAddress: 'https://flyscan.com',
          techStack: [
            'Vue',
            'Tailwind',
            'Laravel',
            'Docker',
            'Inertia.js',
            'Pest',
            'Dusk',
            'Storybook',
            'Figma'
          ]
        },
        {
          name: 'Zmartests',
          period: 'JDec 2021 - Dec 2022',
          title: 'Front End Developer',
          type: 'Internship',
          tasks: 'Create new application using .Net and Blazor',
          place: 'Montreal, QC',
          webAddress: 'https://zmartests.com',
          techStack: ['.Net', 'Blazor']
        },
        {
          name: 'Nixa',
          period: 'Nov 2020 - May 2021',
          title: 'Front End Developer',
          type: 'Full Time',
          tasks:
            'Create applications using: HTML, CSS, JavaScript, Python (Django), PHP (Symphony, WordPress), Ionic (with Angular)',
          place: 'Montreal, QC',
          webAddress: 'https://nixa.ca',
          techStack: ['SASS', 'Bootstrap', 'Django', 'Symphony', 'Wordpress', 'Ionic', 'Angular']
        },
        {
          name: 'Consoltec',
          period: 'Jan 2020 - Nov 2020',
          title: 'Front End Developer',
          type: 'Full Time',
          tasks:
            'Create new functionalities, bugs fixed, make pages responsive and accessible. Technologies used: Angular JS, Bootstrap, Kendo UI.',
          place: 'Montreal, QC',
          webAddress: 'https://consoltec.ca',
          techStack: ['Angular', 'Bootstrap', 'Kendo UI', 'JQuery']
        }
      ],
      projects: [
        {
          name: 'Excel Insights',
          description: [
            {
              title: 'About ExcelInsights.net',
              body: 'ExcelInsights.net is an educational platform designed to help users learn Microsoft Excel in a simple, structured, and interactive way.'
            },
            {
              title: '🔍 Key Features',
              list: [
                "Clear explanations of Excel's main functionalities, organized by topics and subtopics.",
                'Each page includes a feedback poll: “Useful” / “Not Useful” to gather user insights.',
                'Easy-to-navigate layout with:',
                [
                  'A sidebar menu for quick access to main page sections.',
                  '“Next / Previous” buttons for smooth topic-to-topic navigation.'
                ],
                'A personal dashboard where users can track their learning progress across all topics.'
              ]
            },
            {
              title: '🧩 Excel Add-in Integration',
              list: [
                'Custom-built Excel Add-in allows users to complete tasks related to each topic directly inside Excel.',
                'After completing a task, users can click a "Check" button to verify and track completion.',
                'Once all tasks in a topic are completed, progress can be saved and viewed on the ExcelInsights.net dashboard.',
                'Promotes hands-on learning by combining web content with in-Excel practice.'
              ]
            }
          ],
          techStackDescription: [
            {
              section: 'Frontend',
              description:
                'Built using React with Gatsby.js for static site generation. Tailwind CSS is used for styling, and content is authored in MDX files, combining Markdown with JSX for flexibility.'
            },
            {
              section: 'Backend',
              description:
                'A custom API built with Laravel (PHP) handles user progress tracking, feedback polling, and syncing with the Excel Add-in.'
            },
            {
              section: 'Excel Add-In',
              description:
                'Developed with React and TypeScript, using Office Scripts. It allows users to complete tasks within Excel and sync their progress with the main web app.'
            }
          ],
          date: 'March 2025',
          projectLink: 'https://excelInsights.net',
          status: 'Deployed and live',
          techStack: [
            'Gatsby js',
            'React',
            'Tailwind',
            'Laravel',
            'Office Script',
            'PHP',
            'MySQL',
            'Python'
          ]
        },
        {
          name: 'Tic Tac Toe',
          description:
            'Create a react project that allows two players to play Tic Tac Toe. The project is developed using React and Tailwind.',
          date: 'June 2024',
          gitHubLink: 'https://github.com/alexandru-constantin-hub/TicTacToe',
          status: 'Finished',
          techStack: ['React', 'Tailwind', 'Vite']
        },
        {
          name: 'Resume',
          description:
            'The purpose of this project is to create a resume using Vue 3 and Tailwind. I used Pinia for state management, GitHub actions for CI/CD and Vite for the build process.',
          date: 'May 2024',
          gitHubLink: 'https://github.com/alexandru-constantin-hub/Resume',
          status: 'Finished',
          techStack: ['Vue', 'Pinia', 'Tailwind']
        },
        {
          name: 'Renovation',
          description:
            'The aim of this project is to put together services providers and clients. The project is developed in ASP.NET.',
          date: 'September 2023',
          gitHubLink: 'hhttps://github.com/alexandru-constantin-hub/renovation',
          status: 'Finished',
          techStack: ['ASP.net']
        },
        {
          name: 'Simple calculator',
          description:
            'TA project made in JAVA. The calculator can do basic operations like addition, subtraction, multiplication, division, square root, and percentage.',
          date: 'February 2019',
          gitHubLink: 'hhttps://github.com/alexandru-constantin-hub/renovation',
          status: 'Finished',
          techStack: ['Java']
        }
      ],
      technologies: ['Angular', 'Vue', 'React', 'Laravel', '.Net / Blazor', 'Javascript'],
      skills: {
        'Front End Frameworks': {
          Vue: {
            icon: 'vuejs',
            experience: '> two years of experience'
          },
          Angular: {
            icon: 'angular',
            experience: 'one year of experience'
          },
          React: {
            icon: 'react',
            experience: '> one year of experience'
          }
        },
        'Back End Frameworks': {
          Laravel: {
            icon: 'vuejs',
            experience: '> two years of experience'
          },
          'Net / Blazor': {
            icon: 'angular',
            experience: '> one year of experience'
          }
        },
        Testing: {
          Pest: {
            icon: 'vuejs',
            experience: '> two years of experience'
          },
          Dusk: {
            icon: 'angular',
            experience: '> one year of experience'
          }
        },
        'CSS Frameworks': {
          Tailwind: {
            icon: 'vuejs',
            experience: '> two years of experience'
          },
          Bootstrap: {
            icon: 'angular',
            experience: '> four year of experience'
          }
        },
        UI: {
          Figma: {
            icon: 'vuejs',
            experience: '> six months of experience'
          }
        }
      },
      education: [
        {
          title: 'Web development',
          school: 'Cegep Gerald-Godin',
          type: 'AEC',
          date: '2021 - 2022',
          webAddress: 'https://cgodin.qc.ca',
          place: 'Montreal, QC'
        },
        {
          title: 'Software Applications Specialist',
          school: 'Vanier College',
          type: 'AEC',
          date: '2019 - 2020',
          webAddress: 'https://vaniercollege.qc.ca',
          place: 'Montreal, QC'
        },
        {
          title: 'Human Resources Management',
          school: 'Alexandru Ioan Cuza University',
          type: 'Master',
          date: '2019 - 2020',
          webAddress: 'https://uaic.ro',
          place: 'Iasi, Roumania'
        },
        {
          title: 'Business Administration',
          school: 'Alexandru Ioan Cuza University',
          type: 'Bachelor',
          date: '1992 - 1997',
          webAddress: 'https://uaic.ro',
          place: 'Iasi, Roumania'
        }
      ]
    }
  },
  actions: {
    changeTheme(theme) {
      this.currentTheme = theme
      const htmlClasses = document.querySelector('html').classList

      if (theme === 'auto') {
        localStorage.removeItem('theme')
        htmlClasses.remove('dark')
      }

      if (this.currentTheme === 'dark') {
        localStorage.theme = 'dark'
        htmlClasses.add('dark')
      }

      if (this.currentTheme === 'light') {
        localStorage.theme = 'light'
        htmlClasses.remove('dark')
      }
    },
    getTheme() {
      const currentTheme = localStorage.theme || 'auto'
      const htmlClasses = document.querySelector('html').classList
      if (currentTheme === 'dark') {
        htmlClasses.add('dark')
      }
      return (this.currentTheme = currentTheme)
    },
    getFavicon(webAddress) {
      if (!webAddress) {
        return ''
      }
      return `https://www.google.com/s2/favicons?domain=${webAddress}&sz=256`
    }
  }
})
