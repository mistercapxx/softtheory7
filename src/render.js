function render (title,content) {
    return (
        `<div class="entry">
        <h1>${title}</h1>
        <div class="content">
        ${content}
        </div>`
    );
}

export default render;