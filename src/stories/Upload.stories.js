import Upload from '../components/Upload';

export default {
  title: 'Component/Upload',
  component: Upload,
  argTypes: {},
};

export const Default = args => {
  return (
    <Upload {...args}>
      <button>Click me</button>
    </Upload>
  );
};

// 자식 컴포넌트에 file state를 넘겨주는 방법
export const AccessFileToChildren = args => {
  return (
    <Upload {...args}>
      {file => <button>{file ? file.name : 'Click me'}</button>}
    </Upload>
  );
};

export const Draggable = args => {
  return (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: '4px dashed #aaa',
            borderColor: dragging ? 'black' : '#aaa',
          }}
        >
          {file ? file.name : 'Click or drag file to this area to upload.'}
        </div>
      )}
    </Upload>
  );
};
