
async function fetchApi(category){
    const uRL = "https://inshorts.vercel.app/news/" + category;
    const newsData = await(await fetch(uRL)).json();
    const newsCards = document.getElementById("news");
    const articles = Object.keys(newsData.data.articles);
    newsCards.innerHTML = "";
    for(var i=0; i<articles.length; i++){
        newsCards.innerHTML += `
        <div class="col-md-4">
        <div class="card p-0 m-2">
            <div class="card-header p-0">
                <span style="text-transform: capitalize;" class="badge bg-success mx-3 mt-2 mb-2">${newsData.data.articles[i].categoryNames[0]}</span>
            </div>
            <img class="imgCrop" src="${newsData.data.articles[i].imageUrl}" alt="">
            <div class="card-body pb-1">
                <h5 class="card-title newsTitle cardText">${newsData.data.articles[i].title}</h5>
                <p class="card-text expandable-text cardText" onclick="toggleText(this)">${newsData.data.articles[i].content}</p>
            </div>
            <div class="card-footer">
                <p class="mb-0">Author Name: ${newsData.data.articles[i].authorName}</p>
            </div>
        </div>
    </div>
        `;
    }
}
// function toggleText(element){
//     element.classList.toggle("expand");
// }

async function loadNews(type){
    const uRL = "https://inshortsapi.vercel.app/news?category=" + type;
    const newsData = await(await fetch(uRL)).json();
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "";
    const articles = Object.keys(newsData.data);
    for(var i=0; i<articles.length; i++){
        newsContainer.innerHTML += `
        <div class="col-md-4">
        <div class="card p-0 m-2">
            <div class="card-header p-0">
                <span style="text-transform: capitalize;" class="badge bg-success mx-3 mt-2 mb-2">${newsData.category}</span>
            </div>
            <img class="imgCrop" src="${newsData.data[i].imageUrl}" alt="">
            <div class="card-body pb-1">
                <h5 class="card-title newsTitle">${newsData.data[i].title}</h5>
                <p class="card-text expandable-text" onclick="toggleText(this)">${newsData.data[i].content}</p>
            </div>
            <div class="card-footer">
                <p class="mb-0">Author Name: ${newsData.data[i].author}</p>
            </div>
        </div>
    </div>
        `;
    }
}