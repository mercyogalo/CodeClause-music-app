const authEndpoint="https://accounts.spotify.com/authorize?";
const clientID="f53166d8986c455fadc8b5abf861cfdc";
const redirectUrl="http://localhost:3000";
const scope=["user-library","playlist-read-private"];


export  const loginEndpoint=`${authEndpoint}client_id=${clientID}&redirect_url=${ redirectUrl}&scopes=${scope.join("%20")}&response_type=token&show_dialog=true`;