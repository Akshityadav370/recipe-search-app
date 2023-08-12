import styles from '../Styles/card.module.css';
const Card = ({recipe}) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={recipe.image} alt={recipe.label} className={styles.img}/>
      </div>
      <div>
        <a href="props.url">
          <h2>{recipe.label}</h2>
        </a>
        <a href={recipe.uri}>
          <button className={styles.btn}>See More...</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
