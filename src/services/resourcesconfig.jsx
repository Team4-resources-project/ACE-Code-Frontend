import { getDocumentation, getTutorials, getExercises} from './resourcesapi';

const resourcesList = [
    { id: "documentation", category: "Documentación", fetchFunction: getDocumentation },
    {id: "tutorials", category: "Tutoriales", fetchFunction: getTutorials },
    { id: "exercises", category: "Ejercicios", fetchFunction: getExercises }
  ];
  
export default resourcesList;