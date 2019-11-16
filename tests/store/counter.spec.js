import {
    COUNTER_INCREMENT,
    default as counter
  } from 'modules/counter'

  it('Should return an action with type "COUNTER_INCREMENT".', () => {
    expect(increment()).to.have.property('type', COUNTER_INCREMENT)
  })