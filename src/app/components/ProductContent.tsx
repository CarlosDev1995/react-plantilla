import styles from '../styles/styles.module.css';

export interface PropsContent{
  className?: string
  style?: React.CSSProperties;
}

export const ProductContent = ({className, style}: PropsContent) => {
  return (
    <div className={`${styles.contentCard } ${className}`}>
    <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        accusamus unde sequi at magni perferendis nisi quisquam ipsum quia sunt nostrum, 
        velit mollitia provident consequuntur autem reprehenderit quis ratione sint.
    </p>
</div>
  )
}
