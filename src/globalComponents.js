import LoadingCircle from './components/LoadingCircle.vue';
import CardImage from './components/CardImage.vue';

export default {
  install: (app) => {
    app.component('XLoadingCircle', LoadingCircle);
    app.component('XCardImage', CardImage);
  },
};
