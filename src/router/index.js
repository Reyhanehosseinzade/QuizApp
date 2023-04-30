import {createRouter , createWebHistory} from 'vue-router'
import QuizesVue from "../views/QuizesView.vue"
import QuizVue from "../views/QuizView.vue"
import pageNotFound from "../views/pageNotFound.vue"

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"quizes",
            component: QuizesVue
        },
        {
            path:'/quiz/:id',
            name:"quiz",
            component: QuizVue
        },
        {
            path:'/:pathMatch(.*)*',
            name:"not found",
            component: pageNotFound
        }
    ]
})

export default router