describe('karma-duplicate-name test - ', function() {

    var data, person1, person2, formattedName;

    beforeEach(function() {

        module('OpsBoard');
        data = window.__fixtures__['test/fixtures/duplicateNames'];
    });

    it('loads the person1.', function () {
        person1 = data[0];
        expect(person1.currentLocation).toContain('BKN08');
    });

    it('loads the person2.', function () {
        person2 = data[1];
        expect(person2.currentLocation).toContain('QE07B');
    });

    //'Hidden', 'Unavailable'
    it('person2 state ', function() {
        expect(person1.state).toBe('Unavailable');
        expect(person2.state).toBe('Hidden');

        function getFormattedName(person) {
            if(/Hidden/i.test(person.state)) {
                formattedName = person.firstName.substr(0, 1).toUpperCase() + '. ' + person.lastName;
            }
            else {
                formattedName = person.firstName + person.lastName.substr(0,4) + '.';
            }
            return formattedName;
        }
        function use_underscore() {
            return _.map([1,2,3], function(i) { return i*5});
        }

        it('', function() {
            person1.state = 'Unavailable';
            person2.state = 'Unavailable';
            expect(getFormattedName(person1)).toBe('Andrew Thomas Gibs.');
            expect(getFormattedName(person2)).toBe('Antoine Gibs.');
        });

        it('', function() {
            person1.state = 'Hidden';
            person2.state = 'Unavailable';
            expect(getFormattedName(person1)).toBe('A. Gibson');
            expect(getFormattedName(person2)).toBe('A. Gibson');
        });

        it('', function() {
            person1.state = 'Unavailable';
            person2.state = 'Hidden';
            expect(getFormattedName(person1)).toBe('Andrew Gibs.');
            expect(getFormattedName(person2)).toBe('Antoine Jamel Gibs.');
        });

        it('', function() {
            person1.state = 'Hidden';
            person2.state = 'Hidden';
            expect(getFormattedName(person1)).toBe('A. Gibson');
            expect(getFormattedName(person2)).toBe('A. Gibson');
        });
    });

});

