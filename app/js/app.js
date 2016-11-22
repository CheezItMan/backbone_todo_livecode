window.TodoManager = {
  Models: {},
  Collections: {},
  Views: {}

};
$(function() {
  var todoView = new TodoManager.Views.Todo({
    model: {
        title: "Learn Backbone",
        description: "I REALLY need to learn Backbone",
        completed: false,
        id: 37
    }
    });
    $('#todocontainer').append(todoView.render().$el);
});
