import React, { FC } from 'react';
import { CreateNoteDto, UpdateNoteDto } from '../../store';

export interface NoteFormProps {
  data?: UpdateNoteDto;
  onFinish;
}

export const NoteForm: FC<NoteFormProps> = (props) => {
  const { onFinish, data = {} } = props;
  const [values, setValues] = React.useState<CreateNoteDto | UpdateNoteDto>(data);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='h-full'>
      <form
        className='form h-full'
        onSubmit={(e) => {
          e.preventDefault();
          onFinish({
            variables: {
              noteData: {
                ...values,
              },
            },
          });
        }}
      >
        <textarea
          className='w-full h-5/6'
          required
          name='content'
          placeholder='note...'
          onChange={onChange}
          value={values.content}
        />

        <button className='button m-[auto]'>Save</button>
      </form>
    </div>
  );
};

export default NoteForm;
