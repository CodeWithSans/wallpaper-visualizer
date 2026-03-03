import {useState,useEffect}from 'react';

function useEntropy(){
    const [score,setScore] = useState(0);
    const [error,setError] = useState(null);

    useEffect(() => {
        async function fetchScore(){
            try{
                const response = await fetch ('http://localhost:3000/api/entropy');
                const data = await response.json();
                setScore(data.score);
            }
            catch(err){
                setError('cannot reach api');
                console.error('Failed to fetch entropy:',err);
            }
        }
        fetchScore();
        const interval = setInterval(fetchScore, 3000);
        return()=> clearInterval(interval);
    }, []);
    return {score,error};
}
export default useEntropy;