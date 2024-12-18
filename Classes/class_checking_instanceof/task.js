class Employee {
    constructor(name) {
        this.name = name;
    }

    intro() {
        return "I'm " + this.name + ".";
    }
}

class Professor extends Employee {
    constructor(name, researchArea) {
        super(name);
        this.researchArea = researchArea;
    }

    intro() {
        return super.intro() + " Professor in " + this.researchArea + ".";
    }
}

class LabHead extends Professor {
    constructor(name, researchArea, labName) {
        super(name, researchArea);
        this.labName = labName;
    }

    intro() {
        return super.intro() + " Head of " + this.labName + " lab.";
    }
}

function professorsPresenter(professor) {
    if(professor instanceof Professor) {
        return professor.intro();
    }
    return null;
}

let employee = new Employee("John Smith");
let professor = new Professor("Michael Johnson", "Computer Science");
let labHead = new LabHead("Liza Brown", "Robotics", "Autonomous Vehicles");

console.log(professorsPresenter(employee));
// null
console.log(professorsPresenter(professor));
// I'm Michael Johnson. Professor in Computer Science.
console.log(professorsPresenter(labHead));
// I'm Liza Brown. Professor in Robotics. Head of Autonomous Vehicles lab.
