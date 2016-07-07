import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  registered: attr('boolean'),
  self_defined: attr('boolean'),
  method: belongsTo('method'),
  visible: attr('boolean')
});
