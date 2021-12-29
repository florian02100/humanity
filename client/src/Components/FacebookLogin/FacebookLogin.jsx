import React, { useEffect,useRef,useImperativeHandle,forwardRef } from 'react'

const facebookAppId = '997547634128466';

const FacebookLogin = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({

        logOut(){ // (Ref. 8)
          (async() => {
            window.FB.getLoginStatus(function(response) {
                if (response && response.status === 'connected') {
                    window.FB.logout(function(response) {
                        document.location.reload();
                    });
                }
            });
        }
    )();
    }
    }
    ));

    const initFacebookSdk = () => {
            
        // wait for facebook sdk to initialize before starting the react app
            window.fbAsyncInit = function () {
                window.FB.init({
                    appId: facebookAppId,
                    cookie: true,
                    xfbml: true,
                    version: 'v8.0'
                });
    
                // auto authenticate with the api if already logged in with facebook
                window.FB.getLoginStatus(({ authResponse }) => {
                    if (authResponse) {
                        console.log(authResponse);
                        window.FB.api('/me?fields=name,email', function(response) {
                            console.log('Good to see you, ' + response.picture +" "+ response.email +'.');
                            props.getLogin([
                                {
                                name: response.name,
                                email: response.email,
                                image: response.pictures
                                }
                            ]);
                            props.getIsLogged(true);
                        });
                    } else {
                       /* window.FB.login(function(response) {
                            if (response.authResponse) {
                                // connected
                                //document.location.reload();

                                window.FB.api('/me?fields=name,email', function(response) {
                                    console.log('Good to see you, ' + response.picture +" "+ response.email +'.');
                                    props.getLogin([
                                        {
                                        name: response.name,
                                        email: response.email,
                                        image: response.pictures
                                        }
                                    ]);
                                    props.getIsLogged(true);
                                });
                            } else {
                                props.getIsLogged(false);
                            }
                            
                        });*/
                        

                    }
                },{ scope: 'email , public_profile'});
            };
    
            // load facebook sdk script
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/fr_FR/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));    
        
    }


    useEffect(()=>{
        initFacebookSdk();
    });

    return (
        <div id="google-signin" className="google-login-button">
            <div class="fb-login-button" scope="public_profile, email" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
        </div>
    )
}
)

export default FacebookLogin
