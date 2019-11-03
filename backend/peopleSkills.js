const data = {
  labels: ['JSX', 'JS', 'Node.js', 'React', 'Angular', 'HTML', 'Redux', 'ESLint', 'NPM'],
  datasets: [
    {
      label: 'Alice',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 100, 81, 56, 55, 40]
    },
    {
      label: 'Felix',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
    ]
}

// whole db :)
export const peopleSkills = {
  alice: {
    JSX: 90,
    JS: 100,
    'Node.js': 60,
    React: 90,
    Angular: 80,
    HTML: 70,
    Redux: 70,
    ESlint: 100,
    NPM: 90
  },
  bob: {
    JSX: 90,
    JS: 80,
    'Node.js': 100,
    React: 100,
    Angular: 20,
    HTML: 100,
    Redux: 70,
    ESlint: 100,
    NPM: 90
  },
  felix: {
    JSX: 10,
    JS: 60,
    'Node.js': 10,
    React: 10,
    Angular: 100,
    HTML: 50,
    Redux: 0,
    ESlint: 0,
    NPM: 0
  },
}
