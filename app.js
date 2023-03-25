// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "img/person-6.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "peter jones",
    job: "web designer",
    img:
    "img/person-4.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "intern",
    img:
    "img/person-3.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
    "img/person-2.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "Letty",
    job: "IoT expert",
    img:
    "img/person-5.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 6,
    name: "Patric More",
    job:  "Data Scientist",
    img:
    "img/person-1.jpg",
    text:
      "Sriracha literally Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell.",
  },
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')
//  set starting item

let currentItem = 0
//  on window load initial item

window.addEventListener('DOMContentLoaded',function(){
      showPerson()
}) 

// show review based on item

function showPerson(){
  let item = reviews[currentItem]
  img.src = item.img 
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

// show next review

nextBtn.addEventListener('click', function(){
  currentItem++
  if( currentItem > reviews.length - 1){
    currentItem = 0
  }
  showPerson()
})

// show previous review   

prevBtn.addEventListener('click', function(){
  currentItem--
  if( currentItem < 0){
    currentItem = reviews.length -1
  }
  showPerson()
})

// show random review

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson()
})