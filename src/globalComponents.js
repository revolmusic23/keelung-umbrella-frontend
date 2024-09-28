import LoadingCircle from './components/LoadingCircle.vue';
import CardImage from './components/CardImage.vue';
import ErrorModal from './components/Modal/ErrorModal.vue';

export default {
  install: (app) => {
    app.component('XLoadingCircle', LoadingCircle);
    app.component('XCardImage', CardImage);
    app.component('XErrorModal', ErrorModal);
  },
};
