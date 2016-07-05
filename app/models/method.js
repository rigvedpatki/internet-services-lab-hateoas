import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  method: attr('string'),
  name: attr('string'),
  description: attr('string'),
  resource: belongsTo('resource'),
  queryParams: hasMany('query-parameter'),
  responses: hasMany('response'),
  visible: attr('boolean')
});
