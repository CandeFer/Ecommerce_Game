import React, { useState } from 'react'

const LoginPage = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
    return (
        <div>
            <h1>Pagina de login</h1>
        </div>
    )
}

export default LoginPage