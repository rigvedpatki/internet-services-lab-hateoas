import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-link-relation-entity', 'Integration | Component | create link relation entity', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-link-relation-entity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#create-link-relation-entity}}
      template block text
    {{/create-link-relation-entity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
