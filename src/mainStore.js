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
          period: 'Jan 2023 - Present',
          title: 'Front End Developer',
          type: 'Full Time',
          icon: 'Flyscan',
          tasks:
            'Developed end-to-end complex features, from backend implementation to frontend integration, ensuring seamless functionality across the application. Proficient in conducting comprehensive testing to guarantee robustness and quality assurance.',
          place: 'Montreal, QC',
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
          icon: 'Zmartests',
          tasks: 'Create new application using .Net and Blazor',
          place: 'Montreal, QC',
          techStack: ['.Net', 'Blazor']
        },
        {
          name: 'Nixa',
          period: 'Nov 2020 - May 2021',
          title: 'Front End Developer',
          type: 'Full Time',
          icon: 'Nixa',
          tasks:
            'Create applications using: HTML, CSS, JavaScript, Python (Django), PHP (Symphony, WordPress), Ionic (with Angular)',
          place: 'Montreal, QC',
          techStack: ['SASS', 'Bootstrap', 'Django', 'Symphony', 'Wordpress', 'Ionic', 'Angular']
        },
        {
          name: 'Consoltec',
          period: 'Jan 2020 - Nov 2020',
          title: 'Front End Developer',
          type: 'Full Time',
          icon: 'Consoltec',
          tasks:
            'Create new functionalities, bugs fixed, make pages responsive and accessible. Technologies used: Angular JS, Bootstrap, Kendo UI.',
          place: 'Montreal, QC',
          techStack: ['Angular', 'Bootstrap', 'Kendo UI', 'JQuery']
        }
      ],
      projects: [
        {
          name: 'Resume',
          description:
            'The purpose of this project is to create a resume using Vue 3 and Tailwind. I used Pinia for state management, GitHub actions for CI/CD and Vite for the build process.',
          date: 'May 2024',
          gitHubLink: 'https://github.com/alexandru-constantin-hub/Resume',
          status: 'Finished',
          techStack: ['Vue', 'Pinia', 'Tailwind']
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
            experience: 'one year of self learning'
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
          icon: 'GeraldGodin',
          place: 'Montreal, QC'
        },
        {
          title: 'Software Applications Specialist',
          school: 'Vanier College',
          type: 'AEC',
          date: '2019 - 2020',
          icon: 'Vanier',
          place: 'Montreal, QC'
        },
        {
          title: 'Human Resources Management',
          school: 'Alexandru Ioan Cuza University',
          type: 'Master',
          date: '2019 - 2020',
          icon: 'AlexandruIoanCuza',
          place: 'Iasi, Roumania'
        },
        {
          title: 'Business Administration',
          school: 'Alexandru Ioan Cuza University',
          type: 'Bachelor',
          date: '1992 - 1997',
          icon: 'AlexandruIoanCuzaß',
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
    }
  }
})
