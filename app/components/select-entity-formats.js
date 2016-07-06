import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  formats: [
    "ai",
    "atom",
    "atomcat",
    "atomsvc",
    "au",
    "bin",
    "bmp",
    "class",
    "css",
    "csv",
    "dat",
    "dib",
    "doc",
    "docm",
    "docx",
    "dotm",
    "dotx",
    "dtd",
    "ecore",
    "eps",
    "exe",
    "form",
    "gif",
    "gwt",
    "hqx",
    "htm",
    "html",
    "ico",
    "jad",
    "jar",
    "java",
    "jnlp",
    "jpe",
    "jpeg",
    "jpg",
    "js",
    "jsf",
    "json",
    "jsonsmile",
    "kar",
    "latex",
    "man",
    "mathml",
    "mid",
    "midi",
    "mov",
    "mp2",
    "mp3",
    "mp4",
    "mpe",
    "mpeg",
    "mpg",
    "n3",
    "nt",
    "odb",
    "odc",
    "odf",
    "odg",
    "odi",
    "odm",
    "odp",
    "ods",
    "odt",
    "onetoc",
    "onetoc2",
    "otg",
    "oth",
    "otp",
    "ots",
    "ott",
    "oxt",
    "pdf",
    "png",
    "potm",
    "potx",
    "ppam",
    "pps",
    "ppsm",
    "ppsx",
    "ppt",
    "pptm",
    "pptx",
    "ps",
    "qt",
    "rdf",
    "rnc",
    "rng",
    "rss",
    "rtf",
    "sav",
    "sit",
    "sldm",
    "sldx",
    "snd",
    "sps",
    "sta",
    "svg",
    "swf",
    "tar",
    "tex",
    "tif",
    "tiff",
    "tsv",
    "txt",
    "ulw",
    "vrml",
    "vxml",
    "wadl",
    "wav",
    "wrl",
    "xht",
    "xhtml",
    "xlam",
    "xls",
    "xlsb",
    "xlsm",
    "xlsx",
    "xltm",
    "xltx",
    "xmi",
    "xml",
    "xsd",
    "xsl",
    "xslt",
    "xul",
    "yaml",
    "z",
    "zip"
  ],
  actions: {
    save: function(selection, component) {
      var entity = this.get('model');
      entity.save();
      Ember.Logger.log("Data is saved for entity id: " + entity.id);
      Ember.get(this, 'flashMessages').success('Saved!');
    }
  }
});
