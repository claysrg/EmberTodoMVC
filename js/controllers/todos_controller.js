/**
 * Created with JetBrains WebStorm.
 * User: clayton
 * Date: 6/21/13
 * Time: 4:21 PM
 * To change this template use File | Settings | File Templates.
 */
    Todos.TodosController = Ember.ArrayController.extend({
        createTodo: function () {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim())  { return; }

            // Create the new Todo model
            var todo = Todos.Todo.createRecord({
                title: title,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        },
        remaining: function () {
            return this.filterProperty('isCompleted', false).get('length');
        }.property('@each.isCompleted'),

        inflection: function () {
            var remaining = this.get('remaining');
            return remaining === 1 ? 'item' : 'items';
        }.property('remaining')
    });
