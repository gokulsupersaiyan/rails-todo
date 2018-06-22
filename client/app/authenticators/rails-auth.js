import Base from 'ember-simple-auth/authenticators/base';
import RSVP from 'rsvp';
import Ember from 'ember';

export default Base.extend({
    rails_ajax: Ember.inject.service(),
    session: Ember.inject.service(),
    restore(data) {
        console.log(data);
        return new Promise(function (resolve, reject) {
            resolve(data);
        });
    },
    authenticate(username, password) {
        return this.get('rails_ajax').post('/login', { data: { username, password } });
    },
    invalidate(data) {
        return new Promise(function (resolve, reject) {
            resolve(data);
        });
        // return this.get('rails_ajax').post('/logout', { data: { data } });
    }
});