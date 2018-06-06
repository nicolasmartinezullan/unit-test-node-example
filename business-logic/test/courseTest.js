'use strict';

const Course = require('../Course'),
  Student = require('../Student'),
  chai = require('chai'),
  should = chai.should(),
  expect = chai.expect;

describe('Course', () => {

  let courseName = `Introduction to Awesomeness`,
    courseCode = `AWE 101`,
    courseDescription = `This course will make you awesome!`,
    student;

  beforeEach(() => {
    student = Student.create('John Doe', 5);
  });

  it('should have data correctly', () => {
    const course = Course.create(courseName, courseCode, courseDescription);

    should.exist(course.name);
    should.exist(course.code);
    should.exist(course.description);

    should.exist(course.students);
    course.students.should.eql([]);

    should.exist(course.times);
    course.times.should.eql([]);

  });

  describe('registerStudent', () => {
    it('should add the student to the students array', () => {
      const course = Course.create(courseName, courseCode, courseDescription);

      course.registerStudent(student);

      course.students.length.should.equal(1);
      course.students[0].id.should.equal(student.id);
    });
  });

  describe('unregisterStudent', () => {
    it(`should throw an error if we try to remove a student that isn't in the class`, () => {
      const course = Course.create(courseName, courseCode, courseDescription);

      expect(() => {
        course.unregisterStudent('asd');
      }).to.throw();
    });
  });

  describe(`addTimes`, () => {
    it(`should add the given days/times to the course`, () => {
      const course = Course.create(courseName, courseCode, courseDescription);
      const days = ['Monday', 'Wednesday', 'Friday'],
        times = ['10:00', '14:00'];

        course.addTimes(days, times);

        course.times.length.should.equal(6);
    });
  });
});
