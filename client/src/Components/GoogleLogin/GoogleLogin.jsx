import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react'
import './GoogleLogin.css'

const GoogleLogin = forwardRef((props, ref) => {

    const googleClientId = '291405793986-pp5g8088hce6s6g7i6a9jf4amfkgn7kk.apps.googleusercontent.com';
    const loadGoogleScript = () => {
  
        // Loads the Google JavaScript Library
        (function () {
            const id = 'google-js';
            const src = 'https://apis.google.com/js/platform.js'; // (Ref. 1)
            
            // We have at least one script (React)
            const firstJs = document.getElementsByTagName('script')[0]; // (Ref. 2)
            
            // Prevent script from loading twice
            if (document.getElementById(id)) { return; } // (Ref. 3)
            const js = document.createElement('script'); // (Ref. 4)
            js.id = id;
            js.src = src;
            js.onload = window.onGoogleScriptLoad; // (Ref. 5)
            firstJs.parentNode.insertBefore(js, firstJs);
        }());    
        
  }
  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();
  
  const onSuccess = (googleUser) => { // (Ref. 7)
    setIsLoggedIn(true);
    
    const profile = googleUser.getBasicProfile();
    console.log(profile);
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
    console.log(imageUrl);

    props.getLogin(
      [{
        name:profile.getName(),
        email:profile.getEmail(),
        image:profile.getImageUrl()
      }]);
  
    props.getIsLogged(true);

  };
  
  const onFailure = () => {
    setIsLoggedIn(false);
    props.getIsLogged(false);

  }
  
  useImperativeHandle(ref, () => ({

    logOut(){ // (Ref. 8)
      (async() => {
        await googleAuth.signOut();
        setIsLoggedIn(false);
        props.getIsLogged(false);
        renderSigninButton(gapi);
      })();
    }
  }));
  

  
  const renderSigninButton = (_gapi) => { // (Ref. 6)
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': onSuccess,
      'onfailure': onFailure 
    });
  }

  useEffect(() => {
    
    // Window.gapi is available at this point
    window.onGoogleScriptLoad = () => { // (Ref. 1)
     
      const _gapi = window.gapi; // (Ref. 2)
      setGapi(_gapi);
      
      _gapi.load('auth2', () => { // (Ref. 3)
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({ // (Ref. 4)
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth); // (Ref. 5)
          renderSigninButton(_gapi); // (Ref. 6)
          console.log('auth2 done');
        })();
      });
    }
    
    // Ensure everything is set before loading the script
    loadGoogleScript(); // (Ref. 9)
    
  }, []);

    return (
        <div>

            <div className={isLoggedIn ? 'google-signin-button-hidden' : 'google-signin-button'}>
              <div id="google-signin" className="google-login-button"></div>
            </div>
        </div>
    )
}
)

export default GoogleLogin;
