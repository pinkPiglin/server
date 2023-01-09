import User from'./User.js'

class EventController{
    async create(req, res) {
        try{
            const {name, login, password, email} = req.body
            const user = await User.create({name, login,password,email})
            return res.status(200).json(user)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async signIn(req, res){
        try{
            const {login, password} = req.body
            if(!login || !password){
                return res.status(400).json('не переданы параметры запроса')
             }
            
            const user = await User.findOne({login, password})
            if(!user){
                return res.status(204).json('юзер не найден')
            }

            return res.status(200).json(user)
        }catch(e){
            res.status(500).json(e)
        }
    }

    
}
export default new EventController()