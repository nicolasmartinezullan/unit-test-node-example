'use strict';

const Student = require('../Student'),
  Course = require('../Course'),
  chai = require('chai'),
  should = chai.should(),
  expect = chai.expect;

describe('Student', () => {
  let studentName = 'John Doe',
    studentGrade = 5;
  it('should save the info on the student and create an id when created', () => {
    const student = Student.create(studentName, studentGrade);

    should.exist(student.name);
    student.name.should.equal(studentName);

    should.exist(student.grade);
    student.grade.should.equal(studentGrade);

    should.exist(student.id);
  });

  it(`should increase the student's grade by 1 when advanceGrade is called`, () => {
    const student = Student.create(studentName, studentGrade);

    student.advanceGrade();

    student.grade.should.equal(studentGrade + 1);
  });
});
