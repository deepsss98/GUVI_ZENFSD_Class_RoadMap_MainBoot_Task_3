//Resume data in JSON format

let myResume={
  "Basic_Details": {
    "Name: ": "Deepika Sundarajan",
    "Email: ": "deepsss98@gamil.com",
    "Phone: ":  8778123456,
    "Degree: ": "B.E",
    "Location: ": {
      "Address: ": "No.47/86 2nd Street M.M Nagar U.K.T Malai",
      "PostalCode: ": 620102,
      "City: ": "Trichy",
      "State: ": "Tamilnadu",
      "Country: ": "India"
    },
    "Work_Profiles: ": 
      {
        "Linkedin_Profile: ": "https://www.linkedin.com/in/deepika-sundararaj-7547b9115/",
        "Github_Profile: ":"https://github.com/deepsss98"
      }
    
  },
  "Objective": ["Resourceful DevOps Engineer with 3 years of experience accompanied by proven knowledge of application development, troubleshooting and providing efficient solutions for issues. Aiming to be associated with a progressive organization that gives scope to apply my knowledge and to work towards the growth of the organization while enriching my analytical and technical skills through continual learning."],
  
  "Work_Experience":
    {
      "Company Name: ": "Tata Consultancy Services",
      "Position: ": "System Engineer",
      "StartDate: ": "2019-05-06",
      "EndDate: ": "2022-06-03",
      "Job Description: ": "DevOps Engineer as part of Service Assurance Team in a Telecom project [TCL].Monitored FMS & Data Analysis System in a Telecom project by providing functional deliverables and change requests.",
    },
  "Project_Experience":
    {
      "Shell_Scripting":["•	Automated routine/daily tasks via Shell scripting for boosting productivity & efficiency."],
      "L2_Operations_Daily_Activities":["•	Directed troubleshooting and resolution of complex issues in production environments.","•	Played a key role in architectural discussions to design solutions and ensure successful deployment."],
      "DB_related_development_tasks":["•	Initiated and developed DB Objects like Packages, procedures and functions for process enhancement related to Applications","•	Implemented Partitioning and Indexing SQL Feature concept in Tables for improvement in Application performance."],
      "Certification_and_Awards":["•	E1 Proficiency in Shell Scripting and PL/SQL Competency","•	Received On the Spot award and Star Awards for the project deliverables."]
       
    },
  "Education": {
    "College Details: ": {
      "College_institution: ": "Vel Tech Multi Tech Dr.RR & Dr.SR Engineering College",
      "Department: ": "Computer Science and Engineering",
      "StudyType: ": "fulltime",
      "Batch_start_year: ": 2015,
      "Batch_end_year: ": 2019,
      "GPA: ": 8.0,
    },
    "School Details: ":  {
        "School_institution: ": "St.Joseph's Convent",
        "Board: ": "State Board",
        "StudyType: ": "fulltime",
        "SSLC Percentage: ": "95%",
        "12th Percentage: ":"90%"
      }
   },
  "Technical_Skills_and_Extra_Curriculars":
  [
    {"Skills: ":
    {"Tools_Used: ": ["•	Oracle SQL Developer","•	Putty","•	Eclipse","•	Postman API"],
     "Languages: ": ["•	Shell scripting","•	PL/SQL","•	Javascript"],
    "Operating_System: ": ["•	Red Hat Linux","•	Cent OS","•	Windows"]}
    },

   {"Languages_known: ": ["•	Tamil","•	English"] },
   {"Interests: ":
    {
      "Sports: ":["•	Zonal and District -Level Chess Player during School Days"],
      "Art_and_Craft: ":["•	Interested in painting and making crafts using household wastes"]
    }}]
}


//Displaying Output of JSON Resume Data using all For loops
document.body.style.backgroundColor = "hotpink"; 
document.write("<b>")
document.write("Basic_Details: ");
document.write("</b>")
document.write("<br>");

//first - normal for loop to display the basic details

for(i=0;i<Object.keys(myResume.Basic_Details).length;i++)
{
  let k=Object.keys(myResume.Basic_Details)[i];
  document.write("<b>")
  document.write(k);
  document.write("</b>")
  typeof(myResume.Basic_Details[k])!=="object"?
  document.write(myResume.Basic_Details[k]):loopNestedObj(myResume.Basic_Details[k]);
  document.write("<br>");
}

document.write("<br>");
document.write("<b>")
document.write("Work_Experience: ");
document.write("</b>")
document.write("<br>");

//second - for in loop to display Work Experience details

for (let x in myResume.Work_Experience) {
 document.write("<b>")
 document.write(x);
 document.write("</b>")
 typeof(myResume.Basic_Details[x])!=="object"?
 document.write(myResume.Work_Experience[x]):loopNestedObj(myResume.Work_Experience[x]);
 document.write("<br>");
}

document.write("<br>");
document.write("<b>")
document.write("Education: ");
document.write("</b>");

//third - for each loop to display Education details also used to loop over nested objects - used to loop over basic details

function loopNestedObj(myResume) {
  Object.keys(myResume).forEach(key => {
       document.write("<br>")
       if (typeof myResume[key] === "object") 
       {
       document.write("<b>")
       isNaN(key)===true?document.write(key):"";
       document.write("</b>")
       loopNestedObj(myResume[key]);
       document.write("<br>")
       }
       else 
       {
        document.write("<b>")
        isNaN(key)===true?document.write(key):"";
        document.write("</b>")
        document.write(myResume[key]);
       }
  });
}

loopNestedObj(myResume.Education);

//four - for of loop to display Skills,Languanges Known and interests

for (let y of myResume.Technical_Skills_and_Extra_Curriculars) {
  loopNestedObj(y);
}

