import EditView from '../view/edit-view.js';
import PointView from '../view/point-view.js';
import FormView from '../view/form-view.js';
import EventListView from "../view/event-list-view.js";
import {render} from "../render";
export default class EventPresenter {
  eventListComponent = new EventListView();

  constructor({containerView}) {
    this.eventListContainer = containerView;
  }

  init() {
    render(this.eventListComponent, this.eventListContainer);
    render(new EditView(), this.eventListComponent.getElement());
    render(new FormView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventListComponent.getElement());
    }

  }
}
