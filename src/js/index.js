/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { toggle } from './utils/toggle';

toggle(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
