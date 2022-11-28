import * as yup from 'yup'

export const addSchema = yup.object().shape({

    brand: yup.string("Type the watch brand").required("This field cannot be empty"),

})