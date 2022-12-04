let myResume={
    "basics": {
      "name": "Deepika Sundarajan",
      "email": "deepsss98@gamil.com",
      "phone":  8778123456,
      "degree": "B.E",
      "location": {
        "address": "No.47/86 2nd Street M.M Nagar U.K.T Malai",
        "postalCode": 620102,
        "city": "Trichy",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/deepika-sundararaj-7547b9115/",
          "github":"https://github.com/deepsss98"
        }
      ]
    },
    "Objective":["Resourceful DevOps Engineer with 3 years of experience accompanied by proven knowledge of application development, troubleshooting and providing efficient solutions for issues. Aiming to be associated with a progressive organization that gives scope to apply my knowledge and to work towards the growth of the organization while enriching my analytical and technical skills through continual learning."],
    
    "Work_Experience": [
      {
        "company": "Tata Consultancy Services",
        "position": "System Engineer",
        "startDate": "2019-05-06",
        "endDate": "2022-06-03",
        "summary": "DevOps Engineer as part of Service Assurance Team in a Telecom project [TCL].•	Monitored FMS & Data Analysis System in a Telecom project by providing functional deliverables and change requests.",
      }
    ],
    "Project_Experience": [
      {
        "Shell_Scripting":"Automated routine/daily tasks via Shell scripting for boosting productivity & efficiency.",
        "L2_Operations_Daily_Activities":["Directed troubleshooting and resolution of complex issues in production environments.","•	Played a key role in architectural discussions to design solutions and ensure successful deployment."],
        "DB_related_development_tasks":["Initiated and developed DB Objects like Packages, procedures and functions for process enhancement related to Applications","•	Implemented Partitioning and Indexing SQL Feature concept in Tables for improvement in Application performance."],
        "Certification_and_Awards":["E1 Proficiency in Shell Scripting and PL/SQL Competency","Received On the Spot award and Star Awards for the project deliverables."]
         
      }
    ],
    "education": [
      {
        " College_institution": "Vel Tech Multi Tech Dr.RR & Dr.SR Engineering College",
        "department": "Computer Science and Engineering",
        "studyType": "fulltime",
        "batch_start_year": 2015,
        "batch_end_year": 2019,
        "gpa": 8.0,
      },
        {
          "School_institution": "St.Joseph's Convent",
          "Board": "State Board",
          "studyType": "fulltime",
          "SSLC Percentage": "95%",
          "12th Percentage":"90%"
        }
      ],
    "skills": [
      {
        "Tools_Used": ["Oracle SQL Developer","Putty","Eclipse","Postman API"],
        "Languages": ["Shell scripting","PL/SQL","Javascript"],
        "Operating_System": ["Red Hat Linux","Cent OS","Windows"]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "Sports":"Zonal and District -Level Chess Player during School Days",
      }
    ]
  }
  
  //for loop to print Educational qualification 
  console.log("Educational Qualification mentioned in Resume using normal for loop: ");
  for(i=0;i<Object.keys(myResume.education).length;i++)
  {
  console.log(myResume.education[i]);
  }

  //for in loop to print Tools_Used Skills
  console.log('\n'+"List of Tools used mentioned in resume using for in loop: ");
  for(let a in myResume.skills[0].Tools_Used)
  {
      console.log(myResume.skills[0].Tools_Used[a]);
  }
  //for of loop to print languages known in resume
  console.log('\n'+"List of languages known mentioned in resume using for of loop: ");
  for(let y of myResume.skills[0].Languages)
  {
    console.log(y);
  }

//for each loop to print the objective of my resume
console.log('\n'+"Objective of my resume mentioned in resume using for each loop:");
myResume.Objective.forEach(element => {
    console.log(element);
});