import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  resId: attr(),
  path: attr('string'),
  name: attr('string'),
  description: attr('string'),
  variables: attr(),
  methods: attr()
});
