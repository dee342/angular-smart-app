//Testing a Promise

angular.module('OpsBoard').factory('LanguagesServicePromise', ['$http', '$q', function($http, $q){
    var lng = {};
    lng.get = function() {
        var deferred = $q.defer();
        $http.get('languages.json')
            .then(function(response){
                var languages = response.data.map(function(item){
                    return item.name;
                });
                deferred.resolve(languages);
            })
            .catch(function(response){
                deferred.reject(response);
            });
        return deferred.promise;
    }

    return lng;
}]);


describe('Testing Languages Service - Promise', function(){
    var LanguagesServicePromise,
        $httpBackend,
        jsonResponse = [{"name":"en"}, {"name":"es"}, {"name":"fr"}];

    beforeEach(function(){
        module('OpsBoard');
        inject(function($injector){
            LanguagesServicePromise = $injector.get('LanguagesServicePromise');
            // set up the mock http service
            $httpBackend = $injector.get('$httpBackend');

            // backend definition response common for all tests
            $httpBackend.whenGET('languages.json')
                .respond( jsonResponse );
        });
    });

    it('should return available languages', function(done) {
        // service returns a promise
        var promise = LanguagesServicePromise.get();
        // use promise as usual
        promise.then(function(languages){
            // same tests as before
            expect(languages).toContain('en');
            expect(languages).toContain('es');
            expect(languages).toContain('fr');
            expect(languages.length).toEqual(3);
            // Spec waits till done is called or Timeout kicks in
            done();
        });
        // flushes pending requests
        $httpBackend.flush();
    });
});