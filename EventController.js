import  Event from "./Event.js"

class EventController{
    async create(req, res) {
        try{
            const {userId} =req.params;
            const {event} = req.body
            if(!event){
                return res.status(404)
            }
            const dateIsNotBease = await Event.find({userId, time:event.time, date:event.date}) //проверяю есть ли в БД совпадение по дате и времени
            if(dateIsNotBease.length===0){ // если совпадений по дате и времени нет - добавляю событие
                const response = await Event.create({...event,userId})
                return res.status(200).json(response)
            }
            else{
                return res.status(204).json('По этому времени уже есть событие. Выберите другое время.')
            }
        }catch(e){
            res.status(500).json(e)
        }
    }
    async createAnything(req, res) {
        try{
            const {userId} =req.params;
            const events = req.body;
            await iter()
            async function iter(i=0){
                console.log('i', i)
                const event ={
                    ...events[i],
                    userId,
                    id:i
                }
                const resp = await Event.create(event);
                result.push(resp)
                if(i < events.length -1){
                    console.log('i++', i++)
                        await iter(i++)
                }
                return
            }
            const result = events.map(async (el, i)=>{
                const event ={
                        ...el,
                        userId,
                        id:i
                    }
                return await Event.create(event);
            })
            return res.status(200).json(await result)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try{
            const {userId, id} = req.body
            const result = await Event.findByIdAndDelete({_id:id})
            
            return res.status(200).json(result)
        }catch(e){
            res.status(500).json(e)
        }
    }

    async getAll(req, res){
        try{
            const {userId} = req.params;
            const events = await Event.find({userId});
            if(events.length >0){
                return res.status(200).json(events)
            }

            return res.status(204).json('У этого пользователя нет записей')

        }catch(e){
            return res.status(500).json(e)
        }
    }

    async edit(req, res){
        try{
            const {userId} = req.params;
            const {id, newValue} = req.body;
   
            // const res = await Event.findOneAndUpdate({userId})
            const result = await Event.findOneAndUpdate({userId, _id:id},{text:newValue},{returnOriginal: false})
            return res.send('ok')
        }catch(e){
            return res.status(500).json(e)
        }
       
    }
}
export default new EventController()