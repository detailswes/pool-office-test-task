import { useMemo } from 'react'
import styles from "./common.module.css"

const CustomDropDown = ({ register, name, options, disabled, setValue, label }) => {

    const memorizedDropdown = useMemo(() => {
        setValue(name, options?.[0]?.title)
        return (

            <div className={styles.singleField}>
                <label className={styles.label} htmlFor="movies">{label}</label>

                <select
                    className={`${styles.dropDown} ${styles.dropdownArrow} `}
                    {...register(name)}
                    name={name}
                    disabled={disabled}
                >
                    {options && options.map((item, index) => (
                        <option key={index} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>

        )

    }, [options, disabled])

    return memorizedDropdown


}

export default CustomDropDown