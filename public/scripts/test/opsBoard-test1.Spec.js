// 1. test OpsBoard directive
(function() {
    angular.module('OpsBoard').directive('opsboardDirective', function () {
        return {
            template: '<div><h3>This is a test</h3></div>',
            restrict: 'E',
            replace: true,
            controller: function ($scope) {
                $scope.open = false;
                $scope.toggle = function () {
                    $scope.open = !$scope.open;
                }
            }
        };
    });
})();


describe('OpsBoard Directive test', function () {
    var $scope;

    beforeEach(angular.mock.module('OpsBoard'));

    beforeEach(inject(function ($rootScope, $compile) {
        $scope = $rootScope.$new();
        var element = angular.element('<opsboard-directive></opsboard-directive>');
        $compile(element)($scope);
        $scope.$digest();
    }));

    it("should toggle open when toggle() is called", function () {

        $scope.open = false;
        $scope.toggle();
        expect($scope.open).toBeTruthy();
        $scope.toggle();
        expect($scope.open).toBeFalsy();
    })
});

//// 2. test more OpsBoard directive
angular.module('OpsBoard').directive('myProfile', function () {
    return {
        restrict: 'E',
        template: '<div>{{user.name}}</div>',
        scope: {
            user: '=data'
        },
        replace: true
    };
});

describe('Testing my-directive', function () {
    var $rootScope, $compile, element, scope;

    beforeEach(function () {
        module('OpsBoard');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            element = angular.element('<my-profile data="user"></my-profile>');
            scope = $rootScope.$new();
            // wrap scope changes using $apply
            scope.$apply(function () {
                scope.user = {name: "William"};
                $compile(element)(scope);
            });
        });
    });

    it('Name should be rendered', function () {
        expect(element[0].innerText).toEqual('William');
    });
});


// 3. test OpsBoard controller
(function () {
    'use strict';
    angular.module('OpsBoard').controller('opsboardCtrl', function ($scope) {
        $scope.title = 'This is DSNY SMARTOB OpsBoard Controller';
    });
}());

describe('OpsBoard Controller test', function () {
    var $scope;
    beforeEach(module('OpsBoard'));
    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('opsboardCtrl', {
            $scope: $scope
        });
    }));

    it('Should OpsBoard controller has title', function () {
        expect($scope.title).toContain('DSNY');
    })

});


// 4. test OpsBoard service
angular.module('OpsBoard').factory('opsboardFactory', function () {
    var boardData = 'BoardData';
    return {
        getBoardData: function () {
            return boardData;
        }
    }
});


describe('OpsBoard Service/Factory Test', function () {
    var factory;

    beforeEach(function () {
        module('OpsBoard');
        inject(function ($injector) {
            factory = $injector.get('opsboardFactory');
        })
    });


    it('Should OpsBoard factory getBoardData contains BoardData', function () {
        expect(factory.getBoardData()).toContain('BoardData');
    })
});


// 5. test OpsBoard filter
angular.module('OpsBoard').filter('opsboardUpper', function () {
    return function (input) {
        return input.toUpperCase();
    }
});

describe('OpsBoard Filter test', function () {
    var upperFilter, $filter;

    beforeEach(function () {
        module('OpsBoard');
        inject(function ($injector) {

            // append Filter to the filter name
            upperFilter = $injector.get('opsboardUpperFilter');

            // using $filter Provider
            $filter = $injector.get('$filter');
        })
    })

    it('should uppercase input', function () {
        expect(upperFilter('smartob')).toEqual('SMARTOB');

        expect($filter('opsboardUpper')('dsny')).toEqual('DSNY');
    })
});
