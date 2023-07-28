  import { Router } from './router.js';

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

const logo = document.getElementById('logo');
const pageHome = document.getElementById('pageHome');
const pageUniverse = document.getElementById('pageUniverse');
const pageExploration = document.getElementById('pageExploration');

logo.addEventListener('click', () => {
  router.route();
  pageHome.classList.add('selected');
  pageUniverse.classList.remove('selected');
  pageExploration.classList.remove('selected');
});
pageHome.addEventListener('click', () => {
  router.route();
  pageHome.classList.add('selected');
  pageUniverse.classList.remove('selected');
  pageExploration.classList.remove('selected');
});
pageUniverse.addEventListener('click', () => {
  router.route();
  pageHome.classList.remove('selected');
  pageUniverse.classList.add('selected');
  pageExploration.classList.remove('selected');
});
pageExploration.addEventListener('click', () => {
  router.route();
  pageHome.classList.remove('selected');
  pageUniverse.classList.remove('selected');
  pageExploration.classList.add('selected');
});

router.handle();

//TODO: Arrumar quando navegar pela seta do navegador tem que trocar o selected
// TODO: Quando atualizar a página tem que colocar o selected correto conforme a página que está atualmente

window.onpopstate = () => router.handle();