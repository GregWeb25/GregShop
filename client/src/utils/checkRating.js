import { fetchRating } from "../http/deviceAPI";

const checkRating = async (user, id) => {
        if (user.isAuth) {
            const res = await fetchRating({userId: user.user.id, deviceId: id});
            if(res){
            return res.rate
            }
        }
}

export default checkRating;