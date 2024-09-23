// import {defineStore} from 'pinia';
//
// const repositories = new ();
//
// export const useStoreForm = defineStore("formStore", {
//     state: () => ({
//         form: {} as Form
//     }),
//
//     actions: {
//         async postForm(form: Form) {
//             try {
//                 await repositories.postForm(form);
//             } catch (error) {
//                 console.error('Ошибка при отправке формы:', error);
//             }
//         },
//         async getForm() {
//             try {
//                 const form = await repositories.getForm()
//                 if (form) {
//                     this.form = form;
//                 }
//             } catch (error) {
//                 console.error("Ошибка при отправке формы", error)
//             }
//         },
//     }
// });
