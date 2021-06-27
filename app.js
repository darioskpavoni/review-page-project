// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// Selectors
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const randomBtn = document.querySelector('.random-btn');

const personImg = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// Event Listeners

// the picture in the HTML is part of the ones specified in const reviews. Therefore I'm ignoring it and forcing the page to load the first picture from here. IT WORKS
document.addEventListener('DOMContentLoaded',nextReview);
nextBtn.addEventListener('click',nextReview);
prevBtn.addEventListener('click',prevReview);
randomBtn.addEventListener('click',randomReview);

// Variables
let currentReview = -1;

// Functions
function nextReview() {
  // console.log(currentReview);
  // Getting the next index
  if (currentReview >= reviews.length-1) {
    currentReview = -1;
  }
  currentReview++;
  // console.log(reviews[currentReview].img);
  // console.log(currentReview);
  // above lines are test code 

  // down here we change the content of the page according to the new index we have
  changeReview(currentReview);
}

function prevReview() {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length-1;
  }
  changeReview(currentReview);
  // console.log(currentReview)
}

function randomReview(){
  // generating random index
  let min = 0;
  let max = reviews.length;
  let randomIndex = Math.floor(Math.random()*(max-min));
  /*  while (randomIndex === currentReview) {
    Math.floor(Math.random()*(max-min));
  } */
  currentReview = randomIndex;
  changeReview(currentReview);
  //console.log(currentReview);
}

function changeReview(newIndex) {
  personImg.src = reviews[newIndex].img;  
  author.textContent = reviews[newIndex].name;
  job.textContent = reviews[newIndex].job;
  info.textContent = reviews[newIndex].text;
}