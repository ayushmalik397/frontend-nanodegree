var bio = {
    "name": "Ayush Malik",
    "role": "Web Developer",
    "welcomeMessage": "Hi! I'm Ayush, and I love learning and coding",
    "contacts": {
        "mobile": "+91 9872342616",
        "email": "ayushmalik397@gmail.com",
        "github": "ayushmalik397",
        "twitter": "ayushmalik81",
        "location": "India"
    },
    "biopic": "images/biopic.jpg",
    "skills": ["JavaScript", "HTML&CSS", "C", "C++"]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (var e = 0; e < bio.skills.length; e++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Amazon",
        "title": "Summer Intern",
        "location": "Bangaluru,India",
        "dates": "September 2015 - March 2016",
        "description": "As a non-returning undergrad intern, I was paid $5300 a month, and it was non-negotiable. Returning interns and grad students were paid slightly more. I did learn a lot through my project. I coded up my own project from scratch, so I learned a lot of technical skills related to that (mostly for writing a Java applet). I also learned a lot about how to talk to people and understand what they want, and then translate that into a project. Since my project didn't really have a clear definition, I had to shape it myself and I didn't want to do something worthless. Everyone wanted something different, so I had to learn to incorporate everyone's big ideas into something I could accomplish in a summer. In the end, I'm pretty sure my project was scrapped and never touched by anyone when I left. That makes me a little sad, but it's completely understandable considering the state it was in. I learned something through the project, but all its benefits were really for me rather than for the company."
    }, {
        "employer": "Google",
        "title": "Full Stack Develepor",
        "location": "Seattle",
        "dates": "August 2016 - Present",
        "description": "Not being on the main campus is really different! The Seattle office only has around 500 employees, maybe around 50 interns and overall, its feels kindof like a large startup within the big Google corporation. Don’t get me wrong, we get the same perks as other Googlers in the main MountainView Campus-- massages, foozball, pingpong, free food etc-- but we also get to venture into downtown Seattle and other places, without the crazy commute to/from/around San Francisco"
    }]
};
work.display = function() {
    for (var x = 0; x < work.jobs.length; x++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "AM Portfolio",
        "url": "file:///C:/Users/Ayush/Desktop/Udacity/port/portfolio.html",
        "dates": "2016",
        "description": "This web page is my portfolio page, and it was the first project for Udacity's Front-End Nanodegree. The project was built on Sublime Text Editor with Bootstrap, and the project was focused on using Bootstrap’s grid styling system to style the responsive and organized wep page more easily.",
        "images": ["images/port.png", "images/port2.png"]
    }, {
        "title": "AM Resume",
        "url": "file:///C:/Users/Ayush/Desktop/frontend-nanodegree-resume-master/frontend-nanodegree-resume-master/index.html#",
        "dates": "2014",
        "description": "This web page is my resume page, and it was the second project for Udacity's Front-End Nanodegree. The project was built on Sublime Text Editor , and the project was focused on using JSON like objects to manage content more efficiently.",
        "images": ["images/resume.png"]
    }]
};
projects.display = function() {
    for (var v = 0; v < projects.projects.length; v++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[v].title);
        formattedTitle = formattedTitle.replace("%url%", projects.projects[v].url);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[v].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[v].description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
        for (var z = 0; z < projects.projects[v].images.length; z++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[v].images[z]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.display();

var education = {
    "schools": [{
        "name": "Holy Angels Convent School",
        "location": "Muzaffarnagar, India",
        "degree": "Matric",
        "majors": ["Maths"],
        "dates": "2001 - 2015",
        "url": "www.holyangel.in"
    }, {
        "name": "Chitkara University",
        "location": "Patiala, India",
        "degree": "Graduation",
        "majors": ["Web Development"],
        "dates": "2016 - 2019",
        "url": "www.chitkara.edu.in"
    }],
    "onlineCourses": [{
        "title": "Intro to programming",
        "school": "Udacity",
        "dates": "July 2016 - August 2016",
        "url": "https://www.udacity.com/course/ud000"
    }, {
        "title": "Front End Web Develepor",
        "school": "Udacity",
        "dates": "September 2016 - November 2016",
        "url": "https://www.udacity.com/course/nd001"
    }]
};
education.display = function() {
    education.schools.display = function() {
        for (var r = 0; r < education.schools.length; r++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[r].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[r].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[r].degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[r].majors);
            $(".education-entry:last").append(formattedSchoolMajor);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[r].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[r].url);
            $(".education-entry:last").append(formattedSchoolURL);
        }
    };
    education.schools.display();

    education.schools.display = function() {
        $("#education").append(HTMLonlineClasses);
        for (var y = 0; y < education.onlineCourses.length; y++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[y].title);
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[y].school);
            $(".education-entry:last").append(formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[y].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[y].url);
            $(".education-entry:last").append(formattedOnlineURL);

        }
    };
    education.schools.display();
};
education.display();
$("#mapDiv").append(googleMap);