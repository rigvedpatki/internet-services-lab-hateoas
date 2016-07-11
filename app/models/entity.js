import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  properties: hasMany('property'),
  external: attr('boolean'),
  url: attr('string'),
  responses: hasMany('response'),
  format: attr(),
  isExpanded: attr('boolean'),
});
