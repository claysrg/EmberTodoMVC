/**
 * Created with JetBrains WebStorm.
 * User: clayton
 * Date: 6/21/13
 * Time: 3:43 PM
 * To change this template use File | Settings | File Templates.
 */
    Todos.Router.map(function () {
        this.resource('todos', { path: '/'});
    });

    Todos.TodosRoute = Ember.Route.extend({
        model: function () {
            return Todos.Todo.find();
        }
    });