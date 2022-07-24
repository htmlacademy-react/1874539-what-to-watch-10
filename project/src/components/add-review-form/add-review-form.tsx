import React, { ChangeEventHandler, FormEventHandler, Fragment, useState } from 'react';
import uniqid from 'uniqid';

function AddReviewForm(): JSX.Element {
  const [ratingScore, setRatingScore] = useState<string>('5');
  const [text, setText] = useState<string>('');

  const handleChangeRadio: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target } = event;
    setRatingScore(target.value);
  };

  const handleChangeTextArea: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { target } = event;
    setText(target.value);
  };

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setRatingScore('5');
    setText('');
  };

  return (
    <div className='add-review'>
      <form className='add-review__form' onSubmit={handleSubmitForm}>
        <div className='rating'>
          <div className='rating__stars'>
            {new Array(10).fill(null).map((_, index) => (
              <Fragment key={uniqid('key-')}>
                <input
                  className='rating__input'
                  id={`star-${10 - index}`}
                  type='radio'
                  name='rating'
                  value={10 - index}
                  onChange={handleChangeRadio}
                  checked={ratingScore === (10 - index).toString()}
                />
                <label className='rating__label' htmlFor={`star-${10 - index}`}>
                  {`Rating ${10 - index}`}
                </label>
              </Fragment>
            ))}
          </div>
        </div>
        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
            value={text}
            onChange={handleChangeTextArea}
          />
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit'>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
