function render(title,content)
{
    return (
        // `<div class="entry">
        // <h1>${title}</h1>
        // <div class="content">
        // ${content}
        // </div>
        // </div>`

        <div class="entry">
        <h1>{{title}}</h1>
        <div class="content">
        {{content}}
        </div>
        </div>
    );
}
// ReactDOM.render(React.createElement(App), document.getElementById('root'));