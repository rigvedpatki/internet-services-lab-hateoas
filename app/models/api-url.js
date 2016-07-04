import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  resources: hasMany('resource'),
  entities: hasMany('entity'),
  protocol: attr('string'),
  port: attr('string'),
  domain: attr('string'),
  base_path: attr('string'),
  endpoint_uri: Ember.computed('protocol','domain','base_path', function(){
    var protocol_url = null;
    if (this.get('protocol') == 'HTTP/1.1'){
      protocol_url = 'http://'
    }else if (this.get('protocol') == 'HTTPS/1.1') {
      protocol_url = 'https://'
    }
    var final_url = protocol_url.concat(protocol_url,this.get('domain'),this.get('base_path'));
    return `final_url` ;
  })

});
