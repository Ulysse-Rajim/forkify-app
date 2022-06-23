// [2] Import icons with parcel
import 'core-js/stable';
import { receiveMessageOnPort } from 'worker_threads';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// console.log(icons);

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// [1] - get recipe details from the API and change properties naming

const controlRecipes = async function () {
  try {
    // [5] get recipe hash from the HTML
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // [1.1] Loading recipe
    await model.loadRecipe(id);

    // [1.2] Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

// controlRecipes();

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
