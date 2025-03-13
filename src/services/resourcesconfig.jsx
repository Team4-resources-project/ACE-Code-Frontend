import { getDocumentation, getTutorials, getExercises} from './resourcesapi';

const resourcesList = [
    { id: "tutorials", category: "Tutoriales", fetchFunction: getTutorials },
    { id: "documentation", category: "Documentación", fetchFunction: getDocumentation },
    { id: "exercises", category: "Ejercicios", fetchFunction: getExercises }
  ];
  
export default resourcesList;