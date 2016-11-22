TodoManager.Views.Todo = Backbone.View.extend( {
  tagName: 'section',
  className: 'media no-bullet column',
  template: _.template($('#tpl-todo').html()),
  initialize:  function() {
    // put event listeners here!
  },
  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }
});
