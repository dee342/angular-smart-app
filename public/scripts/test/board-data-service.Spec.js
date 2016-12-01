describe('OpsBoard Unit Test - BoardDataService', function() {

  beforeEach(angular.mock.module('OpsBoard'));

  var board_data_service;
  beforeEach(inject(function(BoardDataService, $injector) {
    board_data_service = $injector.get('BoardDataService');
  }));

  it('should BoardDataService be defined', function() {
    expect(board_data_service).toBeDefined();
  });

  it('should getRepairLocations be defined', function() {
    expect(board_data_service.getRepairLocations).toBeDefined();
  });

  it('should getBoardRefData get data', inject(function(ReferenceDataService, $httpBackend) {

    var data = board_data_service.getBoardRefData();
    $httpBackend.expectGET('http://localhost:8080/smart-opsboard/MN01/20151005/load').
        respond(200, data);

    ReferenceDataService.loadBoardData().then(function(data) {
      expect(data).toBeDefined();
    });

    //TODO: need to improve:
    //$httpBackend.flush();
  }));

});