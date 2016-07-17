import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  external: attr('boolean'),
  url: attr('string'),
  format: attr(),
  api: belongsTo('apiurl'),
  responses: hasMany('response'),
  properties: hasMany('property'),
  isExpanded: attr('boolean'),
});
