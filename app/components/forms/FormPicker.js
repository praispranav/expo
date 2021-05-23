import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

const FormPicker = ({ items, icon, name, placeholder,width,numberOfColumns,PickerItemComponent, ...otherProps }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <Picker
                items={items}
                numberOfColumns={numberOfColumns}
                icon={icon}
                onItemSelect={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormPicker;