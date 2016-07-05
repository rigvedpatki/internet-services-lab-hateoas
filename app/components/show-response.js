import Ember from 'ember';

export default Ember.Component.extend({
  statusCodes : [
    // Source: http://www.restapitutorial.com/httpstatuscodes.html
    "100 - Continue",
    "101 - Switching Protocols",
    "102 - Processing",
    "200 - OK",
    "201 - Created",
    "202 - Accepted",
    "203 - Non-Authoritative Information",
    "204 - No Content",
    "205 - Reset Content",
    "206 - Partial Content",
    "207 - Multi-Status",
    "208 - Already Reported",
    "226 - IM Used",
    "300 - Multiple Choices",
    "301 - Moved Permanently",
    "302 - Found",
    "303 - See Other",
    "304 - Not Modified",
    "305 Use Proxy",
    "307 - Temporary Redirect",
    "308 - Permanent Redirect",
    "400 - Bad Request",
    "401 - Unauthorized",
    "402 - Payment Required",
    "403 - Forbidden",
    "404 - Not Found",
    "405 - Method Not Available",
    "406 - Not Acceptable",
    "407 - Proxy Authentication Required",
    "408 - Request Timeout",
    "409 - Conflict",
    "410 - Gone",
    "411 - Length Required",
    "412 - Precondition Failed",
    "413 - Request Entity Too Large",
    "414 - URI Too Long",
    "415 - Unsupported Media Type",
    "416 - Range Not Satisfiable",
    "417 - Expectation Failed",
    "421 - Misdirected Request",
    "422 - Unprocessable Entity",
    "423 - Locked",
    "424 - Failed Dependency",
    "426 - Upgrade Required",
    "428 - Precondition Required",
    "429 - Too Many Requests",
    "431 - Request Header Fields Too Large",
    "444 - No Response",
    "449 - Retry With",
    "450 - Blocked By Windows Parental Controls",
    "451 - Unavailable for Legal Reasons",
    "499 - Client Closed Request",
    "500 - Internal Server Error",
    "501 - Not Implemented",
    "502 - Bad Gateway",
    "503 - Service Unavailable",
    "504 - Gateway Timeout",
    "505 - HTTP Version Not Supported",
    "506 - Variant Also Negotiates",
    "507 - Insufficient Storage",
    "508 - Loop Detected",
    "509 - Bandwidth Limit Exceeded",
    "510 - Not Extended",
    "511 - Network Authentication Required",
    "598 - Network Read Timeout Error",
    "599 - Network Connect Timeout Error"
  ],
  actions: {
    save(model) {
      model.save();
      Ember.Logger.log("Data is saved for Response id: " + model.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    },
    saveEntity(entity, component) {
      var entities = this.get('entities');
      var myResponse = component.get('response');
      entities.forEach( function(entity2) {
        if( entity !== entity2) {
          entity2.get('responses').removeObject(myResponse);
        }
        entity2.save();
      });
      Ember.Logger.log("Entity saved.");
    },
    toggleVisibility(response) {
      response.get('visible') == true ? response.set('visible', false) : response.set('visible', true);
      response.save();
    }
  }
});
