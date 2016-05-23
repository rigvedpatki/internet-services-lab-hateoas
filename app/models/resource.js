import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  path: attr('string'),
  name: attr('string'),
  description('string'),
  variables: attr(),
  methods: attr()
});
