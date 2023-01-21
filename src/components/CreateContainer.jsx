import React, { useState } from 'react'
import { motion } from 'framer-motion';

const CreateContainer = () => {

    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategories] = useState("null");
    const [imageAsset, setImageAsset] = useState("null");
    const [field, setFields] = useState("false");
    const [alertStatus, setAlertStatus] = useState("s");
    const [msg, setMsg] = useState("null");
    const [isLoading, setIsLoading] = useState("false");

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-[90%] md:w-[75%] border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
                {
                    field && (
                        <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? "bg-red-400 text-red-800" : "bg-emerald-400 text-emerald-800"}`}>
                            {msg}
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default CreateContainer