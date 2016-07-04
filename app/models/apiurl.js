import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';

export default Model.extend({
  resources: hasMany('resource'),
  entities: hasMany('entity'),
  protocol: attr('string'),
  port: attr('string'),
  domain: attr('string'),
  base_path: attr('string'),
  endpoint_url: attr('string')

});
