import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  rel: attr('string'),
  url: attr('string'),
  method: belongsTo('method'),
  entity: belongsTo('entity'),
  visible: attr('boolean')
});
