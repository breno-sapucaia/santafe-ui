import { TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

interface Props {}
const validationSchema = yup.object({
    email: yup
        .string()
        .email('insira um E-mail válido')
        .required('E-mail é obrigatório'),
    password: yup
        .string()
        .min(8, 'A senha deve conter no mínimo 8 caractéres')
        .required('Senha é obrigatória')

})


function Form(props: Props) {
    const {} = props
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values,null,2))
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
        </form>
    )
}

export default Form
