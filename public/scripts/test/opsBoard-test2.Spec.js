// test opsBoard routes
angular.module('OpsBoard').config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'home.tpl.html',
        controller: 'MainCtrl'
    })
        .otherwise({ redirectTo:'/home' });
});

describe('Testing Routes', function(){
    var $route, $rootScope, $location, $httpBackend;

    beforeEach(function(){
        module('OpsBoard');

        inject(function($injector){
            $route = $injector.get('$route');
            $rootScope = $injector.get('$rootScope');
            $location = $injector.get('$location');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', 'home.tpl.html').respond('home');
        });
    })

    it('should navigate to home', function(){
        // navigate using $apply to safely run the $digest cycle
        $rootScope.$apply(function() {
            $location.path('/home');
        });
        expect($location.path()).toBe('/home');
        expect($route.current.templateUrl).toBe('home.tpl.html');
        expect($route.current.controller).toBe('MainCtrl');
    })

    it('should redirect not registered urls to home', function(){
        // navigate using $apply to safely run the $digest cycle
        $rootScope.$apply(function() {
            $location.path('/other');
        });
        expect($location.path()).toBe('/home');
        expect($route.current.templateUrl).toBe('home.tpl.html');
        expect($route.current.controller).toBe('MainCtrl');
    })
});


// test OpsBoard events
angular.module('OpsBoard').factory("messageBus", ['$rootScope', function($rootScope) {
    var bus = {};

    bus.userLogged = function(user) {
        $rootScope.$broadcast("global.user.logged", user);
    };

    return bus;
}]);

angular.module('OpsBoard').controller('messageCtrl', function($scope, $rootScope) {
    $rootScope.$on("global.user.logged", function(event, user) {
        $scope.user = user;
    });
});

describe("Message Bus", function() {
    var messageBus, $rootScope, $scope, $controller,
        user = { name: "William", id: 1 };

    beforeEach(function() {
        module("OpsBoard");
        inject(function($injector) {
            messageBus = $injector.get("messageBus");
            $rootScope = $injector.get("$rootScope");
            $controller = $injector.get('$controller');
            $scope = $rootScope.$new();
        });
        spyOn($rootScope, '$broadcast').and.callThrough();
        spyOn($rootScope, '$on').and.callThrough();
    });

    it("should broadcast 'global.user.logged' message", function() {
        // avoid calling $broadcast implementation
        $rootScope.$broadcast.and.stub();
        messageBus.userLogged(user);
        expect($rootScope.$broadcast).toHaveBeenCalled();
        expect($rootScope.$broadcast).toHaveBeenCalledWith("global.user.logged", user);
    });

    it("should trigger 'global.user.logged' listener", function() {
        // instantiate controller
        $controller('messageCtrl', { $scope: $scope });
        // trigger event
        messageBus.userLogged(user);
        expect($rootScope.$on).toHaveBeenCalled();
        expect($rootScope.$on).toHaveBeenCalledWith('global.user.logged', jasmine.any(Function));
        expect($scope.user).toEqual(user);
    });
});