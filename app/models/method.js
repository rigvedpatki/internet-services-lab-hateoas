import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  method: attr('string'),
  description: attr('string'),
  resource: belongsTo('resource'),
  linkRelations: hasMany('link-relation'),
  queryParams: hasMany('query-parameter'),
  responses: hasMany('response'),
  rel: attr('string'),
  visible: attr('boolean')
});
