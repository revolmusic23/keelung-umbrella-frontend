import LoadingCircle from './components/LoadingCircle.vue';
import CardImage from './components/CardImage.vue';
import ErrorModal from './components/Modal/ErrorModal.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';

export default {
  install: (app) => {
    app.component('XLoadingCircle', LoadingCircle);
    app.component('XCardImage', CardImage);
    app.component('XErrorModal', ErrorModal);
    app.component('XScrollToTopButton', ScrollToTopButton);
  },
};
