//<foam id="cat" model="Controller" view="ControllerView"></foam>


CLASS({
  name: 'ControllerView',
  extends: 'foam.ui.DetailView',
  requires: [
    'PhoneCitationView',
    'foam.ui.TextFieldView',
    'foam.ui.ChoiceView',
    'foam.ui.DAOListView',
    'foam.ui.ImageView'
  ],
  
  templates: [
    {name: "toHTML"}, 
  ]
  
  
});
