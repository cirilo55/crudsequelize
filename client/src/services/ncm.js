import { api } from "@/services/config";

export default {
    getAll :() =>{
        return api.get('ncm')
    }

}