import { useNavigate } from 'react-router-dom';
import askForSignInModal from '../components/modals/ask/AskForSignInModal';
import useAuth from './useAuth';
import askModal from '../components/modals/ask/askModal';
import { axiosInstance } from './useAxios';

const useSubscribe = (isSubscribed, setIsSubscribed, allRefetch, channelId) => {
    const { user, loading } = useAuth();
    const navigate = useNavigate()

    // handle subscribe
    async function handleSubscribe() {
        if (loading) return;
        if (!user) {
            const askForSignIn = await askForSignInModal("to subscribe")
            if (askForSignIn) {
                return navigate("/sign-in")
            } else {
                return
            }
        }
        if (isSubscribed) {
            const ask = await askModal("Do you want to unsubscribe?")
            if (!ask) return
            setIsSubscribed(false)
        } else {
            setIsSubscribed(true)
        }
        try {
            const info = {
                channel: channelId,
                subscriber: user?._id
            }
            const { data } = await axiosInstance.post(`/user-actions/subscribe`, info)
            console.log(data.data);
            allRefetch() // here 'allRefetch' will be a custom function. in the parent component, I have to create a function and in this function i will call all refetch functions. so that i can call all needed refetch functions by calling a single function in this hook.
        } catch (err) {
            console.error("subscribe error:", err);
            allRefetch()
        }
    }

    return handleSubscribe
};

export default useSubscribe;