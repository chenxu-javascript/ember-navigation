import Component from '@ember/component';
import { later } from '@ember/runloop';
import { computed as emComputed } from '@ember/object';
import { set, get } from '@ember/object';
import $ from 'jquery';
export default Component.extend({
  body: '',
  isShown: false,
  direction: 'dir-right',
  didInsertElement() {
    this._super(...arguments);
    let body = document.getElementsByTagName('body')[0];
    later(() => this.set('body', body));
  },
  navClassNames: emComputed('isShown', function() {
    const isShown = get(this, 'isShown');
    return isShown ? '_navigation_qulaki _show_qulaki' : '_navigation_qulaki';
  }),

  menyCoverClassNames: emComputed('isShown', function() {
    const isShown = get(this, 'isShown');
    if (isShown) {
      $('html').css({ 'overflow': 'hidden' });
      $('body').css({ 'overflow': 'hidden' });
    } else {
      $('html').css({ 'overflow': 'auto' });
      $('body').css({ 'overflow': 'auto' });
    }
    return isShown ? '_meny_cover _show_qulaki' : '_meny_cover';
  }),

  toggle(context) {
    if (context) context.toggleProperty('isShown');
    else this.toggleProperty('isShown');
  },
  actions: {
    show() {
      set(this, 'isShown', true);
    },

    hide() {
      set(this, 'isShown', false);
    },
  }
});
