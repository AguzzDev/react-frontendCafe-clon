import { types } from "../types/Types"
import { db } from '../firebase/database';

export const sendForm = () => {
    return async (isFormValid) => {
        const s = await db.collection('propuestas').add(isFormValid);
        console.log(s)
    }
}
export const uiOpenModal = () => ({
    type: types.uiOpenModal
})
export const uiCloseModal = () => ({
    type: types.uiCloseModal
})
export const formSetError = (err) => ({
    type: types.formSetError,
    payload: err
})
export const formRemoveError = () => ({
    type: types.formRemoveError,
})
