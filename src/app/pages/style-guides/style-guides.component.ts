import { Component } from '@angular/core';

@Component({
  selector: 'style-guides-page',
  template: `
    <div class="p-8">
      <div
        class="w-full rounded-md bg-gradient-to-r from-angular-red via-angular-light-purple to-angular-purple p-1"
      >
        <div
          class="h-full w-full items-center justify-center bg-gray-100 rounded-xs p-4"
        >
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
      </div>

      <p>
        This is a paragraph. It contains some text to demonstrate the default
        styling of a paragraph element.
      </p>

      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
        <li>Unordered list item 3</li>
      </ul>

      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
        <li>Ordered list item 3</li>
      </ol>

      <blockquote>
        This is a blockquote. It is used to indicate that the enclosed text is
        an extended quotation.
      </blockquote>

      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class StyleGuidesComponent {}
