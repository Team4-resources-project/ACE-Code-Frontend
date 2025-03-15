function ExerciseResource({title, src}) {
    return (
        <>
        <div>
        <img src={src} alt={title} 
        style={{
            width: "100%",
            maxWidth: "100px",
            height: "auto",
            display: "block",
            border: "2px solid blue", 
        }} />
        </div>
        <div>{title}<i class="bi bi-pen"></i><i class="bi bi-trash"></i></div>
        </>
    );
}

export default ExerciseResource;