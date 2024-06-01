# react-action-buttons

> View, Edit, Delete And Comment buttons for react apps

[![NPM](https://img.shields.io/npm/v/react-action-buttons.svg)](https://www.npmjs.com/package/react-action-buttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-action-buttons
```

## rendered

![react action buttons](react-action-button.png)

## Usage

```jsx
import ActionButtons from 'react-action-buttons';
import 'react-action-buttons/dist/index.css'

function App() {
  return (
    <div className="App">
      <ActionButtons
        data={{name: '', lastName: ''}} 
        viewPermission={true}
        commentPermission={true}
        deletePermission={true}
        updatePermission={true}
        claimPermission={true}

        styles={{
          view: {
            backgroundColor: 'blue'
          },
          delete: {
            backgroundColor: 'red'
          },
          comment: {
            backgroundColor: '#90EE90'
          }
        }}

        onClickView={(data) => console.log('clicked View', data)}
        onClickClaim={(data) => console.log('clicked Claim', data)}
        onClickUpdate={(data) => console.log('clicked Update', data)}
        onClickComment={(data) => console.log('clicked Comment', data)}
        onClickDelete={(data) => console.log('clicked delete', data)}
      />
    </div>
  );
}

export default App;

```

## props

|       Name      |   type   |   Required   | DefaultValue |
|-----------------|----------|--------------|--------------|
|   onClickView   | function |    false     |   undefined  |
|  onClickUpdate  | function |    false     |   undefined  |
|  onClickDelete  | function |    false     |   undefined  |
|  onClickComment | function |    false     |   undefined  |
|  viewClassName  | string   |    false     |      ''      |
| updateClassName | string   |    false     |      ''      |
| deleteClassName | string   |    false     |      ''      |
|commentClassName | string   |    false     |      ''      |
|veiwPermission   | boolean  |    false     |   undefined  |
|updatePermission | boolean  |    false     |   undefined  |
|deletePermission | boolean  |    false     |   undefined  |
|commentPermission| boolean  |    false     |   undefined  |
|     data        |  any     |    false     |   undefined  |
|     styles      | Object   |    false     |   undefined  |

data object is return to the onClick functions.
And styles must be passed with keys of delete, update, view and edit
each containing its styles.

## License

MIT © [H5SH](https://github.com/H5SH)