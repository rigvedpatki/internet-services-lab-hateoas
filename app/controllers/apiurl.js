import Ember from 'ember';

export default Ember.Controller.extend({
  protos:[
    "HTTP/1.1",
    "HTTPS/1.1"
  ],
  auths:[
    {"name":"Custom authentication","code":"CUSTOM"},
    {"name":"Plain FTP authentication","code":"FTP_PLAIN"},
    {"name":"Amazon IAM-based authentication","code":"HTTP_AWS_IAM"},
    {"name":"Amazon Query String authentication","code":"HTTP_AWS_QUERY"},
    {"name":"Amazon S3 HTTP authentication","code":"HTTP_AWS_S3"},
    {"name":"Microsoft Azure Shared Key authorization (authentication)","code":"HTTP_AZURE_SHAREDKEY"},
    {"name":"Microsoft Azure Shared Key lite authorization (authentication)","code":"HTTP_AZURE_SHAREDKEY_LITE"},
    {"name":"Basic HTTP authentication","code":"HTTP_BASIC"},
    {"name":"Cookie HTTP authentication","code":"HTTP_Cookie"},
    {"name":"Digest HTTP authentication","code":"HTTP_DIGEST"},
    {"name":"Microsoft NTLM HTTP authentication","code":"HTTP_NTLM"},
    {"name":"OAuth 1.0 authentication","code":"HTTP_OAuth"},
    {"name":"OAuth 2.0 bearer token authentication","code":"HTTP_Bearer"},
    {"name":"OAuth 2.0 message authentication code authentication","code":"HTTP_MAC"},
    {"name":"Basic POP authentication (USER/PASS commands)","code":"POP_BASIC"},
    {"name":"Digest POP authentication (APOP command)","code":"POP_DIGEST"},
    {"name":"Secure Data Connector authentication","code":"SDC"},
    {"name":"Plain SMTP authentication","code":"SMTP_PLAIN"}
  ],
  getCode: function(authName , auths){
    for (var i = 0; i < 18; i++) {
      if (auths[i].name === authName) {
        return auths[i].code;
      }
    }
  },
  actions:{
    saveAuth: function(apiurl){
      var authName = null;
      authName = apiurl.get('authProtoName');
      Ember.Logger.log(authName);
      var auths = this.get('auths');
      Ember.Logger.log(auths);
      var temp = this.getCode(authName, auths);
      if (temp) {
        apiurl.set('authProtoCode',temp);
      }
      apiurl.save();
      this.controllerFor('application').send('saveSelection', apiurl);
      Ember.Logger.log("Data is saved for API URL id: " + apiurl.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    }
  }

});
