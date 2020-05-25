import { headersWithToken, httpHelper } from '../utils/http-helper';

export function getUser(userId) {
    const headers = headersWithToken();

    const params = {
        userId
    };

    return httpHelper.get(headers, params, 'Users');
}

export function createUser(userRegister) {
    const headers = headersWithToken();
    
    const params = {
        ...userRegister
    };

    return httpHelper.post(headers, params, 'Users/Register')
}

export function login(email, password) {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }

    const params = {
        Email: email,
        Password: password
    };

    return httpHelper.post(headers, params, 'Users/Login')
        .then(function(response) {
            if (response.status === 401 || response.status === 404 || response.status === 500) {
                return Promise.reject('Falha ao validar token');
              }

              console.log(response);
            
              const fail = (response.data && response.data.error);
            
              if (fail) {
                const message = (response.data && response.data.message) || 'Email ou senha inválido';
                return Promise.reject(message);
              }
            
              return Promise.resolve(response.data);
        });
}

export function logou(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }

    const params = {
        token,
    };

    return httpHelper.get(headers, params, 'Users/Logout');
}
