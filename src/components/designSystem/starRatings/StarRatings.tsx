import style from './StarRatings.module.css';

type StarRatingsProps = {
  rating: number;
};

export function StarRatings({ rating }: StarRatingsProps) {
  return (
    <div className={style['wrapper']}>
      <div className={style['float-left']}>
        <div
          className={`${style['fabrx-ratings']} ${style['has-rating']} ${style['rating']}`}
        >
          <input id="checkbox1" type="checkbox" value="1" />
          <label className={style['starboxes']} htmlFor="checkbox1"></label>

          <input id="checkbox2" type="checkbox" value="2" />
          <label className={style['starboxes']} htmlFor="checkbox2"></label>

          <input id="checkbox3" type="checkbox" value="3" />
          <label className={style['starboxes']} htmlFor="checkbox3"></label>

          <input id="checkbox4" type="checkbox" value="4" />
          <label className={style['starboxes']} htmlFor="checkbox4"></label>

          <input id="checkbox5" type="checkbox" value="5" />
          <label className={style['starboxes']} htmlFor="checkbox5"></label>
        </div>
      </div>
    </div>
  );
}
