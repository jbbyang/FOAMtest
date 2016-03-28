//being used in Controller.js as RowView.


// for a DetailedView:
// ---It has a data property which is set to some FOAM object.
// ---The DetailView has a default template, which runs through
//the list of properties on the object, and displays their names
//(or labels, if set) in the left column of a table, and their views on the right.


CLASS({
  name: 'PhoneCitationView',
  extends: 'foam.ui.DetailView',
  templates: [
    function toHTML() {/*
      <li class="thumbnail">
        <a href="#{{this.data.id}}" class="thumb">$$imageUrl</a>
        <a href="#{{this.data.id}}">$$name{mode: 'read-only'}</a>
        <p>$$snippet{mode: 'read-only'}</p>
      </li>
    */}
  ]
});