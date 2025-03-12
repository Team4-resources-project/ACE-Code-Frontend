import { getDocumentation, getTutorials, getExercises} from './resourcesapi';

const resourcesList = [
    { id: "tutorials", title: "Tutoriales", fetchFunction: getTutorials },
    { id: "documentation", title: "Documentación", fetchFunction: getDocumentation },
    { id: "exercises", title: "Ejercicios", fetchFunction: getExercises }
  ];
  
export default resourcesList;