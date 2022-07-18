import React from 'react';
function Redirect() {
    let clientId = 8219136
    let redirectUri = "http://localhost:3000/ant"
    let url = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`
    window.location.href = url;
}
const Auth = () => {
    return (
        <div>
            <button style={{width:400, height:200}} onClick={Redirect}>fght</button>
        </div>
    );
};

export default Auth;