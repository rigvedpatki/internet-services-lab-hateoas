import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
      return this.store.findRecord('link-relation', params.linkrelation_id);
  },
  afterModel(linkRelation, transition) {
    /**
     * Deletes the given Link Relation and its relations to its Method and Entity.
     * Sends a flash message once deletion is done.
     * @ param linkrelation: the link relation- object to be deleted
     * @ param transition: Not used (aborted)
     */
    const flashMessages = Ember.get(this, 'flashMessages');
    let linkRelationId = linkRelation.id;
    linkRelation.get('method').then(function(method) {
      method.get('linkRelations').then( function(linkRelations) {
        linkRelations.removeObject(linkRelationId);
        method.save();
      });
    });
    linkRelation.get('entity').then(function(entity) {
      entity.get('linkRelations').then( function(linkRelations) {
        linkRelations.removeObject(linkRelationId);
        entity.save();
      });
    });
    linkRelation.destroyRecord();
    flashMessages.success('Link Relation deleted!');
    Ember.Logger.log("Data is destroyed for link Relation with id: " + linkRelationId);
    transition.abort();
  }
});
