import styles from './loader.module.scss'
const Loader = () => {
    return (
        <div className='flex justify-center items-center py-40'>
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loader