import institutions from "./institution";
import students from "./students";
import teachers from "./teachers";
import { sortStudents } from "./students";
import classes from "./classes";

const db = {
  institutions: institutions,
  students: students,
  teachers: teachers,
  classes: classes,
  sortStudents: sortStudents(students),
};

export default db;
