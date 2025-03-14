function DocumentationResource({title, href}) {
    return (
        <>
        <a href={href}>{title}</a><i class="bi bi-pen"></i><i class="bi bi-trash"></i>
        </>
    );
}

export default DocumentationResource;