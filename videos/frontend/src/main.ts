import { listVideosByTitle } from './api/listVideosByTitle/listVideosByTitle'
import './styles/reset.css'
import './styles/style.css'


const list = await listVideosByTitle("")
console.log("list - ", list)
