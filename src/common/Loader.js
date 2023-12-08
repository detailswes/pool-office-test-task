
import LoadingOverlay from 'react-loading-overlay'
import { SpinnerCircular } from 'spinners-react'
import styles from "../common/common.module.css"
const Loader = ({ active }) => {

    return (
        <div className={styles.singleField}>
            <LoadingOverlay
                active={active}
                spinner={<SpinnerCircular size={32} thickness={80} speed={150} color="rgba(57, 62, 172, 1)" secondaryColor="rgba(57, 172, 125, 0.44)" />}
                text='Fetching favorite star...'
            />
        </div>
    )
}

export default Loader