import { Button } from '../../designSystem/button/Button';
import { Textarea } from '../../designSystem/textarea/Textarea';
import styles from './CommentForm.module.css';

export function CommentForm() {
  return (
    <div>
      <h6 className="mb-2 text-accent text-size-xl text-weight-l">
        Write a comment
      </h6>
      <p className="mb-0 ml-auto text-size-s">
        <a href="" className="text-primary link">
          Login{' '}
        </a>
        to post a comment
      </p>
      <form className="mt-3 d-flex flex-wrap pa-4 bg-lightest-gray">
        <Textarea
          name="test"
          className={`${styles['recipe-comment-textarea']} w-full text-size-base`}
        >
          @Jelanee Uwaezuoke Synth polaroid bitters chillwave pickled. Vegan
          disrupt tousled, Portland keffiyeh aesthetic food truck sriracha
          cornhole single-origin coffee church-key roof party. 🔥|
        </Textarea>
        <Button
          className={`${styles['recipe-comment-button']}  text-size-base text-weight-m px-5 mt-auto ml-auto`}
        >
          Post comment
        </Button>
      </form>
    </div>
  );
}
