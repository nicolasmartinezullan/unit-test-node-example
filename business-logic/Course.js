'use strict';

function Course() {}

Course.create = function (name, code, description) {
  const course = new Course();

  course.name = name;
  course.code = code;
  course.description = description;

  course.students = [];
  course.times = [];

  return course;
};

const _p = Course.prototype;

_p.registerStudent = function (student) {
  this.students.push(student);
};

_p.unregisterStudent = function (studentId) {
  if (!this.students.some((student, i) => {
      if (student.id === studentId) {
        this.students.splice(i, 1);
        return true;
      }
    })) {
    throw new Error(`Student ${studentId} is not registered for this course`);
  }
};

_p.addTimes = function (days, times) {

  if (!Array.isArray(days)) {
    days = [days];
  }

  if (!Array.isArray(times)) {
    times = [times];
  }

  days.forEach(day => {
    times.forEach(time => {
      this.times.push({
        day,
        time
      });
    });
  });
};

_p.showSchedule = function () {
  let scheduleString = '',
    first = true;

  this.times.forEach(time => {
    if (!first) {
      scheduleString += '\n';
    }
    first = true;

    scheduleString += `${time.day} at ${time.time}`;
  });

  return scheduleString;
};

_p.showStudents = function () {
  const studentString = '',
    first = true;

  this.students.forEach(student => {
    if (!first) {
      studentString += '\n';
    }
    first = true;

    studentString += student.toString();
  });

  return studentString;
};

module.exports = Course;
