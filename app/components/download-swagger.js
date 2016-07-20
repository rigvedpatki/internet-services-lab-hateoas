import Ember from 'ember';

/**
 * Receives: resources, entities, api
 */
export default Ember.Component.extend({
  actions: {
    downloadFile: function() {
      var api = this.get('api');
      Ember.Logger.log("Generating Swagger file for api: " + api.get('generalInfoDescription') + " (" + api.id + ")");
      
      var swaggerObject = {
        "swagger": "2.0",
        "info": {
            "title": api.get('generalInfoName'),
            "description": api.get('generalInfoDescription'),
            "version": "1.0.0"
        },
        "host": api.get('domain'),
        "schemes": [
            api.get('protocol')
        ],
        "basePath": api.get('base_path'),
        "produces": [
            "application/json"
        ],
        "paths": {},
        "entities": {}
      };
      api.get('resources').forEach(function(resource) {
        var resObject = {
          "description": resource.get('description')
        };
        resource.get('methods').forEach(function(method) {
          if (typeof(method) !== 'undefined') {
            var methodObject = {
              "tags": [],
              "summary": method.get('description'),
              "rel": method.get('rel'),
              "parameters": {},
              "responses": {}
            };
            var linkRelations = [], externalDocs = [];
            method.get('linkRelations').forEach(function(linkRelation) {
              var rel = linkRelation.get('rel');
              var url = linkRelation.get('url');
              if( typeof(rel) !== 'undefined') {
                linkRelations.push(rel);
                if( rel == 'profile' && typeof(url) !== 'undefined') {
                  externalDocs.push(url);
                }
              }
            });
            methodObject.tags = linkRelations;
            if( externalDocs.length > 0) {
              methodObject.externalDocs = externalDocs;
            }

            method.get('queryParams').forEach(function(queryParameter) {
              var queryParamObj = {};
              var name = queryParameter.get('name');
              var type = queryParameter.get('type');
              var description = queryParameter.get('description');
              var example = queryParameter.get('example');
              if( typeof(name) !== 'undefined') {
                if (typeof(type) !== 'undefined') {
                  queryParamObj.type = type;
                }
                if (typeof(description) !== 'undefined') {
                  queryParamObj.description = description;
                }
                if (typeof(example) !== 'undefined') {
                  queryParamObj.example = example;
                }
                methodObject.parameters[name] = queryParamObj;
              }
            });
            
            method.get('responses').forEach(function(response) {
              if( typeof(response) !== 'undefined') {
                var responseObj = {
                  "name": response.get('name'),
                  "description": response.get('description')
                };
                var entity = response.get('entity');
                if( typeof(entity) !== 'undefined') {
                  responseObj.entity = entity.get('name');
                }
                methodObject.responses[response.get('status')] = responseObj;
              }
            });
            resObject[method.get('method')] = methodObject;
          }
        });
        swaggerObject.paths[resource.get('path')] = resObject;
      });
      
      api.get('entities').forEach(function(entity) {
        var entityObject = {
          "description": entity.get('description'),
          "external": entity.get('external'),
          "url": entity.get('url'),
          "format": entity.get('format'),
          "properties": {}
        };
        entity.get('properties').forEach(function(property) {
          var name = property.get('name');
          if (typeof(property) !== 'undefined' && typeof(name) !== 'undefined') {
            entityObject.properties[name] = {
              "description": property.get('description'),
              "type": property.get('type'),
              "required": property.get('required'),
              "list": property.get('list')
            };
          }
        });
        swaggerObject.entities[entity.get('name')] = entityObject;
      });
        
      var blob = new Blob([JSON.stringify(swaggerObject, null, '\t')], {type: "application/json;charset=utf-8"});
      saveAs(blob, api.get('generalInfoName').replace(" ", "-") + ".swagger");
      Ember.Logger.log("File saved");
    }
  }
});
