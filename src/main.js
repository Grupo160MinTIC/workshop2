import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// News Section: API
// ---------------------------

const queryAPI = async (movieTitle, movieCanvas) => {

    let urlData = `http://www.omdbapi.com/?apikey=190d558a&t=${movieTitle}&type=movie`;

    try {

        const resultText = await fetch(urlData, { method: 'GET' });
        const dataMovie = await resultText.json();

        console.log(dataMovie);
        printMovie(dataMovie, movieCanvas);

    }
    catch (error) {
        console.log(error);
    }
};

const printMovie = (dataMovie, movieCanvas) => {

    // Elements creation
    const news_card = document.createElement("div");
    news_card.classList.add('card', 'm-2', 'shadow', 'rounded');
    news_card.style.width = '50%';

    const news_card_img = document.createElement("img");
    news_card_img.classList.add('card-img-top');
    news_card_img.src = dataMovie.Poster;
    news_card_img.style.width = 'auto';
    news_card_img.style.height = '200px';
    news_card_img.style.objectFit = 'scale-down';

    const news_card_body_1 = document.createElement("div");
    news_card_body_1.classList.add('card-body');

    const news_card_title = document.createElement("h5");
    news_card_title.classList.add('card-title', 'text-center', 'font-weight-bold');
    news_card_title.innerHTML = dataMovie.Title;

    const news_card_text = document.createElement("p");
    news_card_text.classList.add('card-text');
    news_card_text.innerHTML = dataMovie.Plot;

    const news_card_body_2 = document.createElement("div");
    news_card_body_2.classList.add('card-body');

    const news_card_link = document.createElement("a");
    news_card_link.classList.add('card-link');
    news_card_link.innerHTML = 'Ver en IMDB...';
    news_card_link.href = `https://www.imdb.com/title/${dataMovie.imdbID}/`;
    news_card_link.target = '_blank';


    // Elements assembly
    news_card_body_2.appendChild(news_card_link);

    news_card_body_1.appendChild(news_card_title);
    news_card_body_1.appendChild(news_card_text);

    news_card.appendChild(news_card_img);
    news_card.appendChild(news_card_body_1);
    news_card.appendChild(news_card_body_2);

    // Print
    const canvas = document.getElementById(movieCanvas);
    canvas.appendChild(news_card);

}
queryAPI('shopaholic', 'movieCanvas1')
queryAPI('zoolander 2', 'movieCanvas1');
queryAPI('prada', 'movieCanvas2');
queryAPI('coco before chanel', 'movieCanvas2');

// ---------------------------
// News Section: API



new Vue({
    store,
    render: h => h(App)
}).$mount('#app')