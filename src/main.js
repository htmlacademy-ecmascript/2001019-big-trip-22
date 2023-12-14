import FilterView from './view/filter-view.js';
import {render} from './render.js';
import SortView from './view/sort-view';
import EventPresenter from './presenter/event-presenter';

const filters = document.querySelector('.trip-controls__filters');
const events = document.querySelector('.trip-events');

const eventPresenter = new EventPresenter({containerView: events});

render(new FilterView(), filters);
render(new SortView(), events);

eventPresenter.init();
