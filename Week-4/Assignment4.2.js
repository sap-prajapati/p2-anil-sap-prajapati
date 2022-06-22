function Person() {
    
}

function Teacher(name){
   this.name = name;
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function(subject){
    this.subject=subject;
    console.log( this.name + ' is now teaching ' +  this.subject);
}


const e = new Teacher('Saloni');
e.teach('Math');
