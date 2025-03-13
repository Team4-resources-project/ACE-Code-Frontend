function ExerciseResource({title, src}) {
    return (
        <>
        <img src={src} alt={title} />{title}
        </>
    );
}

export default ExerciseResource;