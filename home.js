// let heroInfo = {
//     name: "Minh Cường",
//     job: "freelance react developer",
//     imgUrl: "https://picsum.photos/200/300",
//   };
//   let hero = JSON.stringify(heroInfo);
//   localStorage.setItem("heroInfo",JSON.stringify(heroInfo));
//   let listHero = localStorage.getItem(heroInfo);
//   let listHeroParser = JSON.parse(listHero);
//   console.log(listHeroParser);


//   let personalDetail = {
//     name: "Minh Cường",
//     dob: "06 June 1995",
//     spokenLanguages: ["English", "France", "German"],
//     nationality: "Vietnam",
//     interest: ["Music", "Reading", "Journey"],
//     techs: [
//       {
//         id: 1,
//         imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
//         techName: "Android",
//         exp: 2,
//       },
//       {
//         id: 2,
//         imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
//         techName: "Angular",
//         exp: 1,
//       },
//       {
//         id: 3,
//         imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
//         techName: "Bootstrap",
//         exp: 3,
//       },
//       {
//         id: 4,
//         imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
//         techName: "Vue",
//         exp: 2,
//       },
//       {
//         id: 5,
//         imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
//         techName: "React",
//         exp: 2 / 3,
//       },
//       {
//         id: 6,
//         imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
//         techName: "Mongodb",
//         exp: 0.25,
//       },
//       {
//         id: 7,
//         imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
//         techName: "Laravel",
//         exp: 1,
//       },
//       {
//         id: 8,
//         imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
//         techName: "Node.js",
//         exp: 5 / 6,
//       },
//     ],
//   };
//   let personal =JSON.stringify(personalDetail);
//   localStorage.setItem("personalDetail",JSON.stringify(personalDetail));
//   let listPersonal = localStorage.getItem(personalDetail);
//   let listPersonalParser = JSON.parse(listPersonal);
//   console.log(listPersonalParser);
//   //
//   let projects = [
//     {
//       id: 1,
//       imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
//       projectName: "Auto Drive Project",
//       link: "https://abcd-example.com",
//       tags: ["Angular", "React", "Jquery"],
//     },
//     {
//       id: 2,
//       imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
//       projectName: "Ecommerce Project",
//       link: "https://abcd-example.com",
//       tags: ["Bootstrap", "CSS", "Javascript"],
//     },
//     {
//       id: 3,
//       imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
//       projectName: "Chat Application",
//       link: "https://abcd-example.com",
//       tags: ["MongoDB", "Javascript"],
//     },
//     {
//       id: 4,
//       imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
//       projectName: "Social Media Platform",
//       link: "https://abcd-example.com",
//       tags: ["Vue", "Javascript"],
//     },
//     {
//       id: 5,
//       imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
//       projectName: "Image Sharing Platform",
//       link: "https://abcd-example.com",
//       tags: ["React", "Javascript"],
//     },
//   ];
//   let project =JSON.stringify(projects);
//   localStorage.setItem("projects",JSON.stringify(projects));
//   let listProject = localStorage.getItem(projects);
//   let listProjectParser = JSON.parse(listProject);
//   console.log(listProjectParser);




let heroInfos = []
heroInfos.push(JSON.parse(localStorage.getItem("heroInfo")))
console.log(heroInfos);
let heroName = document.getElementById("heroName")
let heroJob = document.getElementById("heroJob")
let heroImg = document.getElementById("heroImg")
function render1(){
    heroName.textContent = `Hello I'm ${heroInfos[0].name}`
    heroJob.textContent = `I'm a ${heroInfos[0].job}`
}
render1()


let personalDetails = []
personalDetails.push(JSON.parse(localStorage.getItem("personalDetail")))
console.log(personalDetails);
let dateOfBirth = document.getElementById("dateOfBirth")
let languages = document.getElementById("languages")
let nationality = document.getElementById("nationality")
let interest = document.getElementById("interest")
function render(){
    dateOfBirth.textContent = personalDetails[0].dob
    nationality.textContent = personalDetails[0].nationality
    languages.textContent = personalDetails[0].spokenLanguages.join(" - ")
    interest.textContent = personalDetails[0].interest.join(", ")
}
render();


