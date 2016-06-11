import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  type: attr('string'),
  required: attr('boolean'),
  list: attr('boolean'),
  entity: belongsTo('entity')

});
