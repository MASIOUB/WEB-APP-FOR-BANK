import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Header from '../components/Header';

function CreateAccount() {
    const navigate = useNavigate();
    const [balance, setBalance] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    const onChange = (e) => {
        const { value } = e.target;
        setBalance(value)
    };

    const onSubmit = async (e) => {
        e.preventDefault();


        const account = {
            client: user.id,
            solde: parseInt(balance),
        };

        if (account) {
            const res = await axios.post(`http://localhost:5000/accounts`, account);
            if (res) {
                navigate(`/profile/${user.id}`)
                // console.log(response);
            }
        }
    };
    return (
        <div>
            {/* <Header /> */}
            <div className='flex justify-center m-10'>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-6">
                            <label className="form-label inline-block mb-2 text-gray-700">Balance</label>
                            <input
                                type="number"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name='balance'
                                value={balance}
                                onChange={onChange} />
                        </div>
                        <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount