import React, {useEffect} from 'react'

function SnapLogin() {

    const initSnapSdk = () => {
        window.snapKitInit = function () {
            var loginButtonIconId = 'my-login-button-target';
            // Mount Login Button
            window.snap.loginkit.mountButton(loginButtonIconId, {
              clientId: 'd4455360-4fa7-4a38-8334-0ab4b79323d0',
              redirectURI: 'http://localhost:500',
              scopeList: [
                'user.display_name',
                'user.bitmoji.avatar',
                'user.external_id'
              ],
              handleResponseCallback: function() {},
            });
          };
            // Load the SDK asynchronously
      (function (d, s, id) {
        var js,
          sjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://sdk.snapkit.com/js/v1/login.js";
        sjs.parentNode.insertBefore(js, sjs);
      })(document, "script", "loginkit-sdk");
    }

    useEffect(()=>{
        initSnapSdk();
    });

    return (
        <div>
            <div id="my-login-button-target"></div>
        </div>
    )
}

export default SnapLogin
