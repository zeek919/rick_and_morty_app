/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { RADIO_SLIDER_BUTTON, RADIO_MENU } from './constants/characterSlider';
import { classToggler } from './utils/classToggler';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
classToggler(RADIO_SLIDER_BUTTON, RADIO_MENU, 'arrow-slide', 'radio-menu-slide');
