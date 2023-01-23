import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

import Header from '../components/Header';

import AuthService from "../services/auth.service";
import authHeader from '../services/auth-header';

function Profile() {
  const [account, setAccount] = useState('');
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    
    if (user) {
      setCurrentUser(user);
      console.log('current user: ' + currentUser);
    }
  }, []);

  useEffect(() => {
    getClientAccount()
  }, []);

  // const id = currentUser.id;

  const getClientAccount = async () => {
    await axios
      .get(`http://localhost:5000/accounts/get-account`, { headers: authHeader() })
      .then((res) => {
        setAccount(res);
      })
      .catch((err) => {
        console.log(err);
      })
  };
  // if (account.length === 0) {
  //   console.log('there is an error');
  // } else {
  //   // console.log(account[0].client.firstName)
  //   // console.log(account[0].client.lastName)
  //   // console.log(account[0].client)
  // }


  return (
    <div>
      <Header />
      <div className=' p-20'>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        Solde
                      </th>
                    </tr>
                  </thead>

                  {/* {(account.length === 0) ? (
                    // console.log('there is an error')
                    <p></p>
                  ) : (
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {account[0].client.firstName + " " + account[0].client.lastName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {account[0].balance} DH
                        </td>
                      </tr>
                    </tbody>
                  )} */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile