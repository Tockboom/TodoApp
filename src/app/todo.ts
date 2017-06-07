export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
const todo = new Todo({
  title: 'Read SitePoint article',
  complete: false
});


