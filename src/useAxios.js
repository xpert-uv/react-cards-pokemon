import { useState } from 'react';
import axios from 'axios';
import uuid from "uuid";
const useAxios = () => {
    const [card, setCard] = useState([]);

    const addCard = async (url) => {
        const res = await axios.get(url);
        setCard(card => [...card, { ...res.data, id: uuid() }])
    };
    return [card, addCard]
}

export default useAxios;
