/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { PAGES_ARRAY } from './constants/pages';
import { RequestBuilder } from './services/connectAPI';
import { classToggler } from './utils/classToggler';
import { changePage } from './containers/pageChanger';
import { appendNumberOfPages } from './containers/appendNumberOfPages';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
changePage(PAGES_ARRAY);
const a = RequestBuilder.makePages();
appendNumberOfPages(a);
