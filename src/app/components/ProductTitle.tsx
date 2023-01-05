import styles from '../styles/styles.module.css';

export interface PropsTitle {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({className, style}: PropsTitle) => {
  return (
    <div className={`${styles.titleCard} ${className}`}>
        <h3 style={style}>Titulo largo para pruebas de tarjeta</h3>
        <hr />
    </div>
  )
}
