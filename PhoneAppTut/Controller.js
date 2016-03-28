



CLASS({
  name: 'Controller',
  
  properties: [
    {
      name: 'search',
      view: { factory_: 'foam.ui.TextFieldView', onKeyMode: true }
    },
    {
      name: 'order',
      defaultValue: Phone.NAME,
      view: { factory_: 'foam.ui.ChoiceView', choices: [
        [ Phone.NAME, 'Alphabetical' ],
        [ Phone.AGE,  'Newest' ]
      ] }
    },
    { name: 'dao', defaultValue: phones },    // phones comes from phones.js
                                              // It's an in-memory DAO
                                              // of the phone data
    {
      name: 'filteredDAO',
      model_: 'foam.core.types.DAOProperty',
      view: {
        factory_: 'foam.ui.DAOListView',
        rowView: 'PhoneCitationView',
        mode: 'read-only'
      },
      dynamicValue: function() {
        return this.dao.orderBy(this.order)
            .where(CONTAINS_IC(SEQ(Phone.NAME, Phone.SNIPPET), this.search));
      }
    }
  ]
});




/*
CLASS({
  name: 'Controller',
  properties: [
    {
        // updates when it loses focus or the user presses Enter.
        //Setting onKeyMode: true will make it fire an update on every
        //keystroke, meaning the list of phones will filter as you type
        name: 'search',
        view: {
          factory_: 'foam.ui.TextFieldView',
          onKeyMode: true }
    },
    {
        name: 'order',
        defaultValue: Phone.NAME,
        view: {
            factory_: 'foam.ui.ChoiceView',
                choices: [ //[internalvalue, Label]
                [ Phone.NAME, 'Alphabetical' ],
                [ Phone.AGE,  'Newest' ]
                ]
            }
    },
    {
        //the original phones.js:
        //var rawPhones = [{"model_": "Phone", "id" : 239824,.....}, .... ];
        //var phoneArray = JSONUtil.arrayToObjArray(X, rawPhones);
        // var phones = phoneArray.dao;
        //(JSONUtil is from foam.core. )
        name: 'dao', 
        defaultValue: phones },
        // phones comes from phones.js
        // It's an in-memory DAO
        // of the phone data
    {
      name: 'filteredDAO',
      model_: 'foam.core.types.DAOProperty',
      view: {
        factory_: 'foam.ui.DAOListView',
        rowView: 'PhoneCitationView',
        mode: 'read-only'
      },
      dynamicValue: function() {
        return this.dao.orderBy(this.order)
            .where(CONTAINS_IC(SEQ(Phone.NAME, Phone.SNIPPET), this.search));
      }
    }
  ]
});

*/