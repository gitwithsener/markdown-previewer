import { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { FaFreeCodeCamp, FaArrowsAlt } from "react-icons/fa";
// import marked from 'marked';

const defaultMarkdown = `
 # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
-i work


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

// marked.setOptions({
//   breaks: true,
// });

// const htmlContent = marked(defaultMarkdown);

function App() {
  const [markdown, setMarkdownTest] = useState<string>(defaultMarkdown);
  // const [htmlContent, setHtmlContent] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);

  // useEffect(() => {
  //   setHtmlContent(markdown(markdown));
  // }, [markdown]);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <>
    <h1 id="title">Markdown Previewer</h1>
    <div className='container'>
      <div className={`editor-wrap ${isMaximized ? 'maximized' : ''}`}>
        <div id='bar'>
        <FaFreeCodeCamp size="20" style={{ marginRight: "10px" }} />
          <span>Editor</span>
        <FaArrowsAlt size="20" style={{ marginLeft: "10px", cursor: "pointer" }} onClick={toggleMaximize} />
        </div>
        <textarea name='editor' id='editor' value={markdown} onChange={(e) => setMarkdownTest(e.target.value)}></textarea>
      </div>
      
      <div className='previewer-wrap'>
        <div className='bar'><span>Previewer</span></div>
        <div id='preview'>
          <ReactMarkdown>{ markdown }</ReactMarkdown>
        </div>
        {/* <div id="preview" dangerouslySetInnerHTML={{ __html: htmlContent }}></div> */}
      </div>
    </div>
  </>
  );
}

export default App
