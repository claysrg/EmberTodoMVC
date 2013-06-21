/**
 * Created with JetBrains WebStorm.
 * User: clayton
 * Date: 6/21/13
 * Time: 4:36 PM
 * To change this template use File | Settings | File Templates.
 */
    Todos.TodoController = Ember.ObjectController.extend({
        isCompleted: function(key, value){
            var model = this.get('model');

            if (value === undefined) {
                // property being used as a getter
                return model.get('isCompleted');
            } else {
                // property being used as a setter
                model.set('isCompleted', value);
                model.save();
                return value;
            }
        }.property('model.isCompleted')
    });