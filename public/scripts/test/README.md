
## TDD, BDD test
First of all, install karma and its command-line:

```
$ npm install -g karma-cli
```

Now can start karma unit testing:
```bash
$ cd `SMART repository``
$ cd smart-ops-board-app/src/main/web/public/scripts
$ npm install
$ karma start karma.conf.js
```

By default, in Macbook, it uses phontomJS for monitoring the output; while in Windows env, it uses Chrome.

### Test Controller

### Test Directive
When writing directives there are a couple of things to consider:

1. Use templateUrl for any non-trivial templates
1. Business logic should go in the directive’s controller function
1. All DOM manipulation belongs in the directive’s link function

When testing directives there are corresponding considerations:

1. Use html2js preprocessor to more easily handle templateUrl directives
1. The directive’s controller function can be tested similarly to a standalone controller
1. DOM manipulation can (and should) be unit tested

### Test Service/Factory

### Test filter

### Test Misc



### Jasmine inject
Jasmine inject function uses dependency injection to resolve common services or providers, like $rootScope, $controller, $q (promises mock), $httpBackend ($http mock), and match them to the corresponding parameters. Common notations for inject are:
```
// Using _serviceProvider_ notation
var $q;
beforeEach(inject(function (_$q_) {
    $q = _$q_;
}));

// Using $injector
var $q;
beforeEach(inject(function ($injector) {
    $q = $injector.get('$q');
}));

// Using an alias Eg: $$q, q, _q
var $$q;
beforeEach(inject(function ($q) {
    $$q = $q;
}));
```

### ngMock
The ngMock module is injected during tests and replaces some core components of the framework to better accommodate the needs of unit tests.

#### 1. $timeout
As tests are part of the development workflow, tests must execute extremely quickly. Angular solves this by forcing all $timeout calls to execute immediately after the current thread completes, e.g. setTimeout(myFn, 0); In most cases, using timeouts is frowned upon, but there are obviously many cases where they’re strictly necessary. It’s important to keep in mind that code cannot rely on specific timing to work properly within unit tests.

#### 2. $httpBackend
In order to isolate functionality and improve execution time, unit tests should never call out for data. The $httpBackend service automatically replaces $http (Angular’s Ajax service) so all such calls can be mocked.

There are two key concepts to employ with $httpBackend: expect and when. Simply put expect() tells your test to expect that a call is made and made correctly. On the other hand, when() allows you to inject a mock response so that you can test that the data is used properly. Both of these are absolutely critical to effective unit testing of Angular apps.

One brilliant feature of $httpBackend is its flush() method. Rather than forcing asynchronous test code, flush() allows tests to explicitly “execute” pending requests. This allows you to avoid the usual array of promises, callbacks and closures in your test code.


#### Tips for Avoiding Headaches
1. No DOM manipulation in controllers
1. Separate controller and link code in directives
1. Each function should have one clear purpose
1. Don’t hide key functionality with closures
1. Just go ahead and bookmark $httpBackend docs now
1. Focus on quality over quantity when unit testing


## E2E test

```
    cd test/e2e
    protractor smart-conf.js
```


## Reference / Resources
1. [Angular — Unit Testing with Jasmine](
https://medium.com/angularjs-meetup-south-london/angular-unit-testing-with-jasmine-24795a44998e)
1. [Unit Testing](https://docs.angularjs.org/guide/unit-testing)
1. [An Introduction To Unit Testing In AngularJS Applications](http://www.smashingmagazine.com/2014/10/introduction-to-unit-testing-in-angularjs/)
1. [AngularJS TDD By Example](http://angularjs-tdd.tumblr.com/)