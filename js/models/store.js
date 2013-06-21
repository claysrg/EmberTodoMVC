/**
 * Created with JetBrains WebStorm.
 * User: clayton
 * Date: 6/21/13
 * Time: 3:51 PM
 * To change this template use File | Settings | File Templates.
 */
    Todos.Store = DS.Store.extend({
        revision: 12,
        adapter: 'DS.FixtureAdapter'
    });