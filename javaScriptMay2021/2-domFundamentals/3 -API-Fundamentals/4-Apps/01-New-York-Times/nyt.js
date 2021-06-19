const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1
const key = "aFg50wmUrLsyzAkJrBcGxOh5hhHrorIP"; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//RESULTS SECTION
const section = document.querySelector("section");
nav.style.display = "none";

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function fetchResults(e) {
  e.preventDefault();
  if (startDate.value !== "") {
    console.log(startDate.value);
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    url += "&end_date=" + endDate.value;
  }

  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value;
    //console log
    console.log("URL:", url);

  //1
  fetch(url)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      displayResults(json); //1 & //3
    });
}

function displayResults(json) {
  let articles = json.response.docs;

  while (section.firstChild) {
      section.removeChild(section.firstChild); //1
  }

  if(articles.length >= 10){
      nav.style.display = 'block'; //shows the nav display if 10 items are in the array
  } else {
      nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
  }

  if (articles.length === 0) {
    console.log("No Results");
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement("article");
      let heading = document.createElement("h2");
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

      let current = articles[i]; //2
      console.log("Current:", current); //3

      link.href = current.web_url; //4
      link.textContent = current.headline.main; //5

      para.textContent = 'Keywords: ';

      for(let j = 0; j < current.keywords.length; j++) {
          let span = document.createElement('span');
          span.textContent += current.keywords[j].value + ' ';
          para.appendChild(span);
      }

      if(current.multimedia.length > 0) {
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
          img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
      
    }
  }
}

function nextPage(e) {
    pageNumber++; //1
    fetchResults(e); //2
    console.log("Page number:", pageNumber); 
}

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    }else {
        return; //3
    }
    fetchResults(e); //4
    console.log("Page:", pageNumber);
}
