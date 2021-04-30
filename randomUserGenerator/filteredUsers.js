const users = [
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    firstName: "Marlis",
    lastName: "Perrin",
    pronouns: "she/her",
    location: "Schangnau, Nidwalden, Switzerland",
    email: "marlis.perrin@example.com",
    password: "master",
    meetingsAttended: 7,
    description:
      "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 3,
      lookingForHelpWith: [
        "Python",
        "C",
        "C#",
        "Java",
        "Angular",
        "SEO",
        "AEM",
        "ASP.NET",
        "Data Structures",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    firstName: "Julian",
    lastName: "Santana",
    pronouns: "he/him",
    location: "Gandía, Cataluña, Spain",
    email: "julian.santana@example.com",
    password: "wilson",
    meetingsAttended: 6,
    description:
      "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 10,
      lookingForHelpWith: [
        "Python",
        "C",
        "C#",
        "Java",
        "Angular",
        "SEO",
        "AEM",
        "ASP.NET",
        "Data Structures",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
    firstName: "Solange",
    lastName: "Fogaça",
    pronouns: "she/her",
    location: "Coronel Fabriciano, Pernambuco, Brazil",
    email: "solange.fogaca@example.com",
    password: "2112",
    meetingsAttended: 6,
    description:
      "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 2,
      lookingForHelpWith: [
        "Python",
        "C",
        "C#",
        "Java",
        "Angular",
        "SEO",
        "AEM",
        "ASP.NET",
        "Data Structures",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    firstName: "Birgitta",
    lastName: "Hein",
    pronouns: "she/her",
    location: "Bad Wilsnack, Thüringen, Germany",
    email: "birgitta.hein@example.com",
    password: "foreplay",
    meetingsAttended: 2,
    description:
      "Graduated a web development bootcamp and have no experience in the field and am looking for guidance into my new career",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 2,
      lookingForHelpWith: ["JavaScript", "React", "TypeScript", "CSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
    firstName: "Sienna",
    lastName: "Harris",
    pronouns: "she/her",
    location: "Invercargill, Taranaki, New Zealand",
    email: "sienna.harris@example.com",
    password: "tractor",
    meetingsAttended: 2,
    description: "Software Engineer with 19 years experience in the field",
    mentor: {
      yearsExperience: 19,
      hoursSpentWithMentees: 9,
      hoursSpentThisWeek: 11,
      menteesAssigned: 3,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/85.jpg",
    firstName: "Neil",
    lastName: "Hicks",
    pronouns: "he/him",
    location: "St Albans, West Glamorgan, United Kingdom",
    email: "neil.hicks@example.com",
    password: "windsor",
    meetingsAttended: 9,
    description: "Software Engineer with 9 years experience in the field",
    mentor: {
      yearsExperience: 9,
      hoursSpentWithMentees: 44,
      hoursSpentThisWeek: 6,
      menteesAssigned: 1,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    firstName: "Holly",
    lastName: "Davies",
    pronouns: "she/her",
    location: "Hamilton, Hawke'S Bay, New Zealand",
    email: "holly.davies@example.com",
    password: "mann",
    meetingsAttended: 2,
    description: "Software Engineer with 27 years experience in the field",
    mentor: {
      yearsExperience: 27,
      hoursSpentWithMentees: 36,
      hoursSpentThisWeek: 3,
      menteesAssigned: 3,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    firstName: "Katharina",
    lastName: "Sasse",
    pronouns: "she/her",
    location: "Egeln, Sachsen, Germany",
    email: "katharina.sasse@example.com",
    password: "soccer",
    meetingsAttended: 9,
    description: "Software Engineer with 1 years experience in the field",
    mentor: {
      yearsExperience: 1,
      hoursSpentWithMentees: 31,
      hoursSpentThisWeek: 16,
      menteesAssigned: 2,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    firstName: "Ege",
    lastName: "Eronat",
    pronouns: "he/him",
    location: "Burdur, Malatya, Turkey",
    email: "ege.eronat@example.com",
    password: "mandrake",
    meetingsAttended: 1,
    description:
      "Looking to advance my career in the fi eld of web development and need a mentor to help me on this path",
    mentee: {
      desire: "looking to advance my career",
      gradyear: 2019,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 13,
      lookingForHelpWith: [
        "Python",
        "C",
        "WordPress",
        "ASP.NET",
        "Data Structures",
        "Alogrithms",
        "Management",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
    firstName: "Ndrea",
    lastName: "Barbosa",
    pronouns: "she/her",
    location: "Barbacena, Mato Grosso, Brazil",
    email: "ndrea.barbosa@example.com",
    password: "santa",
    meetingsAttended: 8,
    description:
      "Looking to advance my career in the fi eld of web development and need a mentor to help me on this path",
    mentee: {
      desire: "looking to advance my career",
      gradyear: 2019,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 2,
      lookingForHelpWith: [
        "Python",
        "C",
        "WordPress",
        "ASP.NET",
        "Data Structures",
        "Alogrithms",
        "Management",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
    firstName: "Edgar",
    lastName: "Morris",
    pronouns: "he/him",
    location: "Sunshine Coast, Victoria, Australia",
    email: "edgar.morris@example.com",
    password: "hottest",
    meetingsAttended: 1,
    description:
      "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 4,
      lookingForHelpWith: [
        "Python",
        "C",
        "C#",
        "Java",
        "Angular",
        "SEO",
        "AEM",
        "ASP.NET",
        "Data Structures",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    firstName: "Mestan",
    lastName: "Abadan",
    pronouns: "she/her",
    location: "Zonguldak, Nevşehir, Turkey",
    email: "mestan.abadan@example.com",
    password: "slowhand",
    meetingsAttended: 8,
    description: "Software Engineer with 9 years experience in the field",
    mentor: {
      yearsExperience: 9,
      hoursSpentWithMentees: 9,
      hoursSpentThisWeek: 14,
      menteesAssigned: 2,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    firstName: "Lisa",
    lastName: "Fields",
    pronouns: "she/her",
    location: "Swords, Leitrim, Ireland",
    email: "lisa.fields@example.com",
    password: "oregon",
    meetingsAttended: 1,
    description:
      "Graduated a web development bootcamp and have no experience in the field and am looking for guidance into my new career",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 13,
      lookingForHelpWith: ["JavaScript", "React", "TypeScript", "CSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/96.jpg",
    firstName: "Fabio",
    lastName: "Laurent",
    pronouns: "he/him",
    location: "Toulouse, Paris, France",
    email: "fabio.laurent@example.com",
    password: "1952",
    meetingsAttended: 4,
    description: "Software Engineer with 26 years experience in the field",
    mentor: {
      yearsExperience: 26,
      hoursSpentWithMentees: 39,
      hoursSpentThisWeek: 19,
      menteesAssigned: 0,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    firstName: "Lauren",
    lastName: "Carvalho",
    pronouns: "she/her",
    location: "Abaetetuba, Mato Grosso do Sul, Brazil",
    email: "lauren.carvalho@example.com",
    password: "patty",
    meetingsAttended: 1,
    description:
      "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 7,
      lookingForHelpWith: [
        "Python",
        "C",
        "C#",
        "Java",
        "Angular",
        "SEO",
        "AEM",
        "ASP.NET",
        "Data Structures",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
    firstName: "Kaya",
    lastName: "Köybaşı",
    pronouns: "he/him",
    location: "Kocaeli, Mardin, Turkey",
    email: "kaya.koybasi@example.com",
    password: "lions",
    meetingsAttended: 5,
    description: "Software Engineer with 28 years experience in the field",
    mentor: {
      yearsExperience: 28,
      hoursSpentWithMentees: 43,
      hoursSpentThisWeek: 13,
      menteesAssigned: 0,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/39.jpg",
    firstName: "Misty",
    lastName: "Garrett",
    pronouns: "she/her",
    location: "Irvine, Oklahoma, United States",
    email: "misty.garrett@example.com",
    password: "metro",
    meetingsAttended: 9,
    description:
      "Bootcamp Graduate with a background in engineering looking for career guidance to leverage both of these passion",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 0,
      lookingForHelpWith: [
        "Python",
        "C",
        "C#",
        "Java",
        "Angular",
        "SEO",
        "AEM",
        "ASP.NET",
        "Data Structures",
      ],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    firstName: "Mélina",
    lastName: "Perrin",
    pronouns: "she/her",
    location: "Montpellier, Alpes-Maritimes, France",
    email: "melina.perrin@example.com",
    password: "trauma",
    meetingsAttended: 9,
    description:
      "Graduated a web development bootcamp and have no experience in the field and am looking for guidance into my new career",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 0,
      lookingForHelpWith: ["JavaScript", "React", "TypeScript", "CSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
    firstName: "Cleópatra",
    lastName: "Castro",
    pronouns: "she/her",
    location: "Águas Lindas de Goiás, Amapá, Brazil",
    email: "cleopatra.castro@example.com",
    password: "small",
    meetingsAttended: 1,
    description: "Software Engineer with 0 years experience in the field",
    mentor: {
      yearsExperience: 0,
      hoursSpentWithMentees: 12,
      hoursSpentThisWeek: 3,
      menteesAssigned: 1,
      hourlyWage: 30,
      hasExperienceIn: ["JavaScript", "TypeScript", "CSS", "HTML", "SCSS"],
    },
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    firstName: "Connor",
    lastName: "Ruiz",
    pronouns: "he/him",
    location: "Ventura, South Carolina, United States",
    email: "connor.ruiz@example.com",
    password: "13131313",
    meetingsAttended: 0,
    description:
      "Graduated a web development bootcamp and have no experience in the field and am looking for guidance into my new career",
    mentee: {
      desire: "looking for a job",
      gradyear: 2021,
      isLookingForMentor: true,
      education: "UNC Coding Bootcamp",
      hoursSpentWithMentor: 13,
      lookingForHelpWith: ["JavaScript", "React", "TypeScript", "CSS"],
    },
  },
];
module.exports = users;