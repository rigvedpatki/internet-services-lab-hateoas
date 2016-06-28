import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {hasMany} from 'ember-data/relationships';

export default Model.extend({
  path: attr('string'),
  name: attr('string'),
  description: attr('string'),
  methods: hasMany('method'),
  isExpanded: attr('boolean')
});
