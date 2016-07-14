import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    downloadFile: function() {
      Ember.Logger.log("Generating Swagger file");
      
      var text = "Hello World!";
      
      
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "Hello.txt");
      Ember.Logger.log("File saved");
    }
  }
});
