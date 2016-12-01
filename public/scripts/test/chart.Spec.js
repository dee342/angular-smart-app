describe('UBOAT-1125', function() {

  var chart, display_board_helper_common, board_value_service;

  beforeEach(function() {

    module('OpsBoard');

    inject(function(DisplayBoardHelperCommon, BoardValueService, $controller, $injector) {

      display_board_helper_common = $injector.get('DisplayBoardHelperCommon');
      board_value_service = $injector.get('BoardValueService');

    });

    chart = window.__fixtures__['test/fixtures/chart'];
  });

  it('Should do something', function() {
    var pId = chart.id, hLocation = chart.homeLocation;
    var indicator;

    board_value_service.personnel = {};
    board_value_service.personnel[pId] = chart;
    board_value_service.refData = {
      boardDate: new Date()
    };

    indicator = display_board_helper_common.visualIndicator(pId, hLocation);

    expect(chart.currentLocation).toEqual(hLocation);

    expect(indicator).toBe('');
  });

});
