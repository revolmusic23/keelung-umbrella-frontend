import LoadingCircle from './components/LoadingCircle.vue';
import CardImage from './components/CardImage.vue';

import BaseModal from './components/Modal/BaseModal.vue';
import ErrorModal from './components/Modal/ErrorModal.vue';

import ScrollToTopButton from './components/Buttons/ScrollToTopButton.vue';
import GoToSubmissionsButton from './components/Buttons/GoToSubmissionsButton.vue';
import LayoutButtons from './components/Buttons/LayoutButtons.vue';

export default {
  install: (app) => {
    app.component('XLoadingCircle', LoadingCircle);
    app.component('XCardImage', CardImage);

    app.component('XBaseModal', BaseModal);
    app.component('XErrorModal', ErrorModal);

    app.component('XScrollToTopButton', ScrollToTopButton);
    app.component('XGoToSubmissionsButton', GoToSubmissionsButton);
    app.component('XLayoutButtons', LayoutButtons);
  },
};
