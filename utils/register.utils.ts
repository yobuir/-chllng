
interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}


const registerUser = async (formData: FormData) => {
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-type': process.env.USER_TYPE ?? 'seller',
        },
        body: JSON.stringify(formData),
    }); 
    return response.json();
};
export default registerUser