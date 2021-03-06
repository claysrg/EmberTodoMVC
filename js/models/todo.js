/**
 * Created with JetBrains WebStorm.
 * User: clayton
 * Date: 6/21/13
 * Time: 3:49 PM
 * To change this template use File | Settings | File Templates.
 */
    Todos.Todo = DS.Model.extend({
        title: DS.attr('string'),
        isCompleted: DS.attr('boolean')
    });

    Todos.Todo.FIXTURES = [
        {
            id: 1,
            title: 'Learn Ember.js',
            isCompleted: true
        },
        {
            id: 2,
            title: '...',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Profit!',
            isCompleted: false
        }
    ];