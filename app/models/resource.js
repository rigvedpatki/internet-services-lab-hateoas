import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({
  path: attr('string'),
  description: attr('string'),
  api: belongsTo('apiurl'),
  methods: hasMany('method'),
  isExpanded: attr('boolean')
});
