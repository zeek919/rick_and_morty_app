/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { classToggler } from './utils/classToggler';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
