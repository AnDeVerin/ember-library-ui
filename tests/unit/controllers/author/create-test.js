import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | author/create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:author/create');
    assert.ok(controller);
  });
});
