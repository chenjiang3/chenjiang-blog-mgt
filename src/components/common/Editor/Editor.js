import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';

import 'simplemde/dist/simplemde.min.css';

const input = '# This is a header\n\nAnd this is a paragraph'

export default class Editor extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor').childElementCount,
      autofocus: true,
      autosave: true,
      previewRender: function (planText) {
        return marked(planText, {
          renderer: new marked.Renderer(),
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <textarea id={'editor'}>
        </textarea>
      </div>
    );
  }

}