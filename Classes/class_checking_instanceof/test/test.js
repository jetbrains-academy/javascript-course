const rewire = require('rewire');
const task = rewire('../task');
const utils = rewire('#utils/utils.js')
customizeError = utils.__get__('customizeError')
importByName = utils.__get__('importByName')

beforeAll(() => {
    Employee = importByName(task, 'Employee');
    Professor = importByName(task, 'Professor');
    LabHead = importByName(task, 'LabHead');
    professorsPresenter = importByName(task, 'professorsPresenter');
});

test('professorsPresenter for Employee', () => {
    try {
        let labHead = new LabHead("Liza Brown", "Robotics", "Autonomous Vehicles");
        expect(labHead.intro()).toBe("I'm Liza Brown. Professor in Robotics. Head of Autonomous Vehicles lab.");
    } catch (e){
        customizeError(e, 'Implement intro() method for LabHead class.', true)
        throw e
    }
});

test('professorsPresenter for Employee', () => {
    try {
        let employee = new Employee("John Smith");
        expect(professorsPresenter(employee)).toBe(null);
    } catch (e){
        customizeError(e, 'professorsPresenter should return null for Employee objects.', true)
        throw e
    }
});

test('professorsPresenter for Professor', () => {
    try {
        let professor = new Professor("Michael Johnson", "Computer Science");
        expect(professorsPresenter(professor)).toBe("I'm Michael Johnson. Professor in Computer Science.");
    } catch (e){
        customizeError(e, 'professorsPresenter should call intro() method for Professor objects.', true)
        throw e
    }
});

test('professorsPresenter for LabHead', () => {
    try {
        let labHead = new LabHead("Liza Brown", "Robotics", "Autonomous Vehicles");
        expect(professorsPresenter(labHead)).toBe("I'm Liza Brown. Professor in Robotics. Head of Autonomous Vehicles lab.");
    } catch (e){
        customizeError(e, 'professorsPresenter should call intro() method for LabHead objects.', true)
        throw e
    }
});
