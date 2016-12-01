describe('OpsBoard Unit Test - person-model', function() {

  var states, groups, board_data_service, scope, person_model, person;

  beforeEach(module('OpsBoard'));

  beforeEach(inject(function($rootScope, _states_, _groups_, BoardDataService, PersonModel, $injector) {
    states = _states_;
    groups = _groups_;
    board_data_service = $injector.get('BoardDataService');
    person_model = $injector.get('PersonModel');

    scope = $rootScope.$new();

    person = window.__fixtures__['test/fixtures/person'];
    angular.extend(person, person_model);
  }));

  it('getFormattedName should get formatted name E. Martin', function() {
    var name = person_model.getFormattedName.call(person);

    expect(name).toBe('E. Martin');
  });

  it('getIndicatorText should get indicator text', function() {
    var indicator = person_model.getIndicatorText.call(person);
    expect(indicator).toBe('');

    person.availableNextDay = true;
    indicator = person_model.getIndicatorText.call(person);
    expect(indicator).toBe('N');
  });


  it('getIndicatorBox', function() {
    var indicator = person.getIndicatorBox();
    expect(indicator).toBe('nobox');
  });

  it('getFormattedDateObj', function() {
    var dateObj = person.getFormattedDateObj();
    expect(dateObj).toBeDefined();
  });

  it('getFormattedUnavailableReasons', function() {
    var unavailreasons = person.getFormattedUnavailableReasons()
    //console.log(unavailreasons);
    //expect(unavailreasons.length).toBeGreaterThan(theReasons); //27
    var theReasons = person.unavailabilityHistory.length;
    expect(unavailreasons.length).toEqual(theReasons);
  });

  it('isTypeValidForCancelButton: CHART, VACATION, JURY DUTY', function() {
    var all_codes = _.map(person.unavailabilityHistory, function(history) {
      return history.code;
    });
    var validations = [];
    _.uniq(all_codes).forEach(function(code) {
      validations.push(person.isTypeValidForCancelButton(code)); //return ['CHART', 'VACATION', 'JURY DUTY'].indexOf()
    });
    expect(_.uniq(validations).length).toBe(1);
  });

  it('getFormattedSpecialPositions', function() {
    var formattedSpecialPositions = person.getFormattedSpecialPositions();
    expect(formattedSpecialPositions).toBeTruthy();
  });

  it('getSortedUnavailabilityHistory', function() {
    //console.log(person.getSortedUnavailabilityHistory());
  });

  it('isActiveMDA', function() {
    var active_mda = person.isActiveMDA();
    expect(active_mda).toBeTruthy();
    //expect(active_mda).toBeFalsy();
  });

  it('Should State is "Available" and active is true', function() {
    expect(person.state).toBe('Available');
    expect(person.active).toBeTruthy();
  });

});