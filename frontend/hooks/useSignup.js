import { useState } from "react"
import toast from 'react-hot-toast'
const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullname, email, password, confirmPassword, role }) => {
        const success= handleInputErrors ({ fullname, email, password, confirmPassword, role })
        if (!success) return;

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, email, password, confirmPassword, role } )
            })
            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
        
    }
}

export default useSignup


function handleInputErrors({ fullname, email, password, confirmPassword, role }) {
    if (!fullname || !email || !password || !confirmPassword || !role) {
        toast.error('Please fill all the fields')
        return false
    }

    if (password !=confirmPassword ) {
        toast.error('Passwords do not match')
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 letters")
        return false
    }
}