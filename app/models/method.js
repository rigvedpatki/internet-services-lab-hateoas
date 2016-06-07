import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  resource: belongsTo('resource'),
  queryParams: attr('string'),
  responses: attr('string')
});
