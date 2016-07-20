import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('show-link-relation-entity', 'Integration | Component | show link relation entity', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{show-link-relation-entity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#show-link-relation-entity}}
      template block text
    {{/show-link-relation-entity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
