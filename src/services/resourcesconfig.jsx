import { getDocumentation, getTutorials, getExercises} from './resourcesapi';

const resources = [
    { id: "tutorials", title: "Turoriales", fetchFunction: getTutorials },
    { id: "documentation", title: "Documentación", fetchFunction: getDocumentation },
    { id: "exercises", title: "Ejercicios", fetchFunction: getExercises }
  ];
  
export default resources;