function TutorialResource({ title, src }) {
    return (
        <>
           <iframe
                width="560"
                height="315"
                src={src}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
            <i class="bi bi-trash"></i>
            </>
    );
}   

export default TutorialResource;