function ExerciseResource({title, src}) {
    return (
        <>
        <img src={src} alt={title} />{title}<i class="bi bi-pen"></i><i class="bi bi-trash"></i>
        </>
    );
}

export default ExerciseResource;